import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

// TODO: remove mock data
const allPosts = [
  { id: "1", title: "On Visual Thinking and Clarity", date: "2025-01-10", views: 2819 },
  { id: "2", title: "The Art of Simplification", date: "2025-01-05", views: 1543 },
  { id: "3", title: "Drawing as Understanding", date: "2024-12-28", views: 987 },
  { id: "4", title: "Lines and Meaning", date: "2024-12-20", views: 1205 },
  { id: "5", title: "Perspective in Visual Communication", date: "2024-12-15", views: 876 },
  { id: "6", title: "The Power of Minimalism", date: "2024-12-08", views: 1432 },
  { id: "7", title: "Creative Process and Discovery", date: "2024-12-01", views: 654 },
];

export default function AllWriting() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link href="/" data-testid="link-back">
        <div className="flex items-center gap-2 text-sm opacity-70 hover-elevate inline-flex px-2 py-1 rounded-md transition-opacity mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to home</span>
        </div>
      </Link>

      <h1 className="text-3xl font-semibold mb-12" data-testid="heading-all-writing">
        # Writing
      </h1>

      <div className="space-y-8">
        {allPosts.map((post) => (
          <article key={post.id} className="border-b border-border pb-8 last:border-0">
            <Link href={`/writing/${post.id}`} data-testid={`link-post-${post.id}`}>
              <h2 className="text-xl font-medium hover-elevate inline-block px-1 py-0.5 rounded-md transition-opacity mb-2">
                {post.title}
              </h2>
            </Link>
            <div className="text-sm opacity-60 space-x-2" data-testid={`metadata-post-${post.id}`}>
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.views} views</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
