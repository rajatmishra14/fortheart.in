import { useRoute, Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { type Comment, type Post } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import CommentForm from "@/components/CommentForm";
import CommentsDisplay from "@/components/CommentsDisplay";

export default function WritingPost() {
  const [, params] = useRoute("/writing/:id");
  const postId = params?.id || "1";
  const { toast } = useToast();

  // Fetch the post data from API
  const { data: post, isLoading: postLoading, isError: postError } = useQuery<Post>({
    queryKey: [`/api/posts/${postId}`],
  });

  // Fetch comments for this post
  const { data: comments = [], isLoading: commentsLoading } = useQuery<Comment[]>({
    queryKey: [`/api/posts/${postId}/comments`],
  });

  // Mutation to create a new comment
  const createCommentMutation = useMutation({
    mutationFn: async (values: { text: string; author: string; email: string }) => {
      const response = await apiRequest("POST", `/api/posts/${postId}/comments`, values);
      return await response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`/api/posts/${postId}/comments`] });
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
    return (
      <div className="max-w-prose mx-auto px-6 py-12">
        <Link href="/writing" data-testid="link-back">
          <div className="flex items-center gap-2 text-sm opacity-70 hover-elevate inline-flex px-2 py-1 rounded-md transition-opacity mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to writing</span>
          </div>
        </Link>
        <div className="text-center py-12 opacity-60" data-testid="text-loading-post">
          Loading article...
        </div>
      </div>
    );
  }

  if (postError || !post) {
    return (
      <div className="max-w-prose mx-auto px-6 py-12">
        <Link href="/writing" data-testid="link-back">
          <div className="flex items-center gap-2 text-sm opacity-70 hover-elevate inline-flex px-2 py-1 rounded-md transition-opacity mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to writing</span>
          </div>
        </Link>
        <div className="text-center py-12" data-testid="text-error-post">
          <p className="text-red-500 mb-4">Article not found.</p>
          <Link href="/writing">
            <button className="text-sm opacity-70 hover:opacity-100">Return to all writing</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-prose mx-auto px-6 py-12">
      <Link href="/writing" data-testid="link-back">
        <div className="flex items-center gap-2 text-sm opacity-70 hover-elevate inline-flex px-2 py-1 rounded-md transition-opacity mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to writing</span>
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

        <div className="prose prose-lg max-w-none leading-relaxed" data-testid="content-post">
          <div className="text-base leading-relaxed whitespace-pre-wrap" data-testid="text-post-content">
            {post.content}
          </div>
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
          postId={postId}
          onSubmit={handleCommentSubmit}
          isSubmitting={createCommentMutation.isPending}
        />
      </section>
    </div>
  );
}
