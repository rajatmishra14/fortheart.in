import { useRoute, Link } from "wouter";
// Fixed syntax error
import { ArrowLeft } from "lucide-react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { type Post, type Comment } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import CommentForm from "@/components/CommentForm";
import CommentsDisplay from "@/components/CommentsDisplay";

export default function WritingPost() {
  const [, params] = useRoute("/writing/:id");
  const postId = params?.id;
  const { toast } = useToast();

  // Fetch post details
  const { data: post, isLoading: postLoading, isError } = useQuery<Post>({
    queryKey: [`/api/posts/${postId}`],
    enabled: !!postId,
  });

  // Fetch comments for this post
  const { data: comments = [], isLoading: commentsLoading } = useQuery<Comment[]>({
    queryKey: ["/api/posts", postId, "comments"],
    enabled: !!postId,
  });

  // Mutation to create a new comment
  const createCommentMutation = useMutation({
    mutationFn: async (values: { text: string; author: string; email: string }) => {
      const response = await apiRequest("POST", `/api/posts/${postId}/comments`, values);
      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/posts", postId, "comments"] });
      toast({
        title: "Comment posted",
        description: "Your comment has been successfully submitted.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to post comment. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleCommentSubmit = async (values: { text: string; author: string; email: string }) => {
    await createCommentMutation.mutateAsync(values);
  };

  if (postLoading) {
    return <div className="max-w-prose mx-auto px-6 py-12 text-center opacity-60">Loading post...</div>;
  }

  if (isError || !post) {
    return (
      <div className="max-w-prose mx-auto px-6 py-12 text-center">
        <h1 className="text-2xl font-semibold mb-4">Post not found</h1>
        <Link href="/">
          <span className="text-primary hover:underline cursor-pointer">Return to home</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-prose mx-auto px-6 py-12">
      <Link href="/" data-testid="link-back">
        <div className="flex items-center gap-2 text-sm opacity-70 hover-elevate inline-flex px-2 py-1 rounded-md transition-opacity mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to home</span>
        </div>
      </Link>
      <article>
        <h1 className="text-3xl font-semibold mb-4" data-testid="heading-post-title">
          {post.title}
        </h1>

        <div className="text-sm opacity-60 space-x-2 mb-8" data-testid="metadata-post">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.views} views</span>
        </div>

        {post.thumbnailUrl && (
          <figure className="my-8">
            <div className="rounded-md overflow-hidden">
              <img
                src={post.thumbnailUrl}
                alt={post.title}
                className="w-full"
              />
            </div>
          </figure>
        )}

        <div className="prose prose-lg max-w-none leading-relaxed space-y-6" data-testid="content-post">
          <p className="text-base leading-relaxed whitespace-pre-wrap">
            {post.content}
          </p>
        </div>
      </article>

      {/* Comments Section */}
      <section className="mt-16 pt-16 border-t border-border" data-testid="section-comments">
        {commentsLoading ? (
          <p className="text-sm opacity-60" data-testid="text-loading-comments">Loading comments...</p>
        ) : (
          <CommentsDisplay comments={comments} />
        )}

        <CommentForm
          postId={postId!}
          onSubmit={handleCommentSubmit}
          isSubmitting={createCommentMutation.isPending}
        />
      </section>
    </div>
  );
}
