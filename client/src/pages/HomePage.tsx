import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { type Post } from "@shared/schema";

export default function HomePage() {
  // Fetch all posts
  const { data: posts = [], isLoading } = useQuery<Post[]>({
    queryKey: ['/api/posts'],
  });

  // Filter posts by category
  const ethicsPosts = posts.filter(p => p.category === "Ethics").slice(0, 3);
  const aestheticsPosts = posts.filter(p => p.category === "Aesthetics").slice(0, 3);
  const metaphysicsPosts = posts.filter(p => p.category === "Metaphysics").slice(0, 3);

  if (isLoading) {
    return <div className="max-w-6xl mx-auto px-6 py-12 text-center opacity-60">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        {/* Ethics Section */}
        <section>
          <h2 className="text-xl font-semibold mb-6" data-testid="heading-ethics">
            # Ethics
          </h2>
          <div className="space-y-6">
            {ethicsPosts.map((post) => (
              <article key={post.id}>
                <Link href={`/writing/${post.id}`} data-testid={`link-post-${post.id}`}>
                  <h3 className="text-lg font-medium hover-elevate inline-block px-1 py-0.5 rounded-md transition-opacity mb-1">
                    {post.title}
                  </h3>
                </Link>
                <div className="text-sm opacity-60 space-x-2" data-testid={`metadata-post-${post.id}`}>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.views} views</span>
                </div>
              </article>
            ))}
          </div>
          <Link href="/ethics" data-testid="link-all-ethics">
            <div className="mt-8 flex items-center gap-1 text-sm opacity-70 hover-elevate inline-flex px-2 py-1 rounded-md transition-opacity">
              <span>See all ethics</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </section>

        {/* Aesthetics Section */}
        <section>
          <h2 className="text-xl font-semibold mb-6" data-testid="heading-aesthetics">
            # Aesthetics
          </h2>
          <div className="space-y-6">
            {aestheticsPosts.map((post) => (
              <article key={post.id}>
                <Link href={`/writing/${post.id}`} data-testid={`link-drawing-${post.id}`}>
                  <div className="hover-elevate rounded-md overflow-hidden mb-2">
                    {post.thumbnailUrl && (
                      <img
                        src={post.thumbnailUrl}
                        alt={post.title}
                        className="w-full aspect-square object-cover"
                        data-testid={`img-drawing-${post.id}`}
                      />
                    )}
                  </div>
                  <h3 className="text-lg font-medium mb-1">{post.title}</h3>
                </Link>
                <div className="text-sm opacity-60" data-testid={`date-drawing-${post.id}`}>
                  {post.date}
                </div>
              </article>
            ))}
          </div>
          <Link href="/aesthetics" data-testid="link-all-aesthetics">
            <div className="mt-8 flex items-center gap-1 text-sm opacity-70 hover-elevate inline-flex px-2 py-1 rounded-md transition-opacity">
              <span>See all aesthetics</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </section>

        {/* Metaphysics Section */}
        <section>
          <h2 className="text-xl font-semibold mb-6" data-testid="heading-metaphysics">
            # Metaphysics
          </h2>
          <div className="space-y-6">
            {metaphysicsPosts.map((post) => (
              <article key={post.id}>
                <Link href={`/writing/${post.id}`} data-testid={`link-animation-${post.id}`}>
                  <div className="hover-elevate rounded-md overflow-hidden mb-2">
                    {post.thumbnailUrl && (
                      <img
                        src={post.thumbnailUrl}
                        alt={post.title}
                        className="w-full aspect-video object-cover"
                        data-testid={`img-animation-${post.id}`}
                      />
                    )}
                  </div>
                  <h3 className="text-lg font-medium mb-1">{post.title}</h3>
                </Link>
                <div className="text-sm opacity-60" data-testid={`date-animation-${post.id}`}>
                  {post.date}
                </div>
              </article>
            ))}
          </div>
          <Link href="/metaphysics" data-testid="link-all-metaphysics">
            <div className="mt-8 flex items-center gap-1 text-sm opacity-70 hover-elevate inline-flex px-2 py-1 rounded-md transition-opacity">
              <span>See all metaphysics</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
}
