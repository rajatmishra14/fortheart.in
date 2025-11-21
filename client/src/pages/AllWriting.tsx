import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { type Post, uiCategories } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AllWriting() {
  const [location, setLocation] = useLocation();
  const params = new URLSearchParams(location.split('?')[1]);
  
  const [sortBy, setSortBy] = useState<"time" | "popularity">(
    (params.get('sortBy') as "time" | "popularity") || "time"
  );
  const [selectedCategory, setSelectedCategory] = useState<string>(
    params.get('category') || "All categories"
  );

  // Fetch posts with filters
  const { data: posts, isLoading, isError, error } = useQuery<Post[]>({
    queryKey: ['/api/posts', selectedCategory, sortBy],
    queryFn: async () => {
      const queryParams = new URLSearchParams();
      // Only send category if it's not "All categories"
      if (selectedCategory !== "All categories") {
        queryParams.set('category', selectedCategory);
      }
      queryParams.set('sortBy', sortBy);
      
      const response = await fetch(`/api/posts?${queryParams.toString()}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch posts');
      }
      return response.json();
    }
  });

  // Sync filters to URL
  useEffect(() => {
    const params = new URLSearchParams();
    params.set('sortBy', sortBy);
    if (selectedCategory !== "All categories") {
      params.set('category', selectedCategory);
    }
    setLocation(`/writing?${params.toString()}`, { replace: true });
  }, [sortBy, selectedCategory, setLocation]);

  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <aside className="w-64 border-r border-border px-6 py-12 flex-shrink-0">
        {/* Sort By Section */}
        <div className="mb-8">
          <h3 className="text-sm font-medium mb-3 opacity-60" data-testid="heading-sort">
            Sort by
          </h3>
          <div className="space-y-2">
            <button
              onClick={() => setSortBy("time")}
              className={`block w-full text-left text-sm px-2 py-1.5 rounded-md hover-elevate ${
                sortBy === "time" ? "font-medium" : "opacity-60"
              }`}
              data-testid="button-sort-time"
            >
              Time
            </button>
            <button
              onClick={() => setSortBy("popularity")}
              className={`block w-full text-left text-sm px-2 py-1.5 rounded-md hover-elevate ${
                sortBy === "popularity" ? "font-medium" : "opacity-60"
              }`}
              data-testid="button-sort-popularity"
            >
              Popularity
            </button>
          </div>
        </div>

        {/* Category Section */}
        <div>
          <h3 className="text-sm font-medium mb-3 opacity-60" data-testid="heading-category">
            Category
          </h3>
          <div className="space-y-2">
            {uiCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`block w-full text-left text-sm px-2 py-1.5 rounded-md hover-elevate ${
                  selectedCategory === category ? "font-medium" : "opacity-60"
                }`}
                data-testid={`button-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 px-12 py-12">
        <h1 className="text-3xl font-semibold mb-12" data-testid="heading-writing">Ethics</h1>

        {isLoading ? (
          <div className="text-center py-12 opacity-60" data-testid="text-loading">Loading...</div>
        ) : isError ? (
          <div className="text-center py-12" data-testid="text-error">
            <p className="text-red-500 mb-4">Failed to load posts. {error?.message || 'Please try again.'}</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSelectedCategory("All categories");
                setSortBy("time");
              }}
              data-testid="button-reset-filters"
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="space-y-6 max-w-3xl">
            {posts?.map((post) => (
              <Card key={post.id} className="overflow-hidden hover-elevate" data-testid={`card-post-${post.id}`}>
                <CardContent className="p-0">
                  <div className="flex gap-6 p-6">
                    {/* Thumbnail */}
                    {post.thumbnailUrl && (
                      <div className="w-32 h-32 flex-shrink-0 rounded-md overflow-hidden bg-muted">
                        <img 
                          src={post.thumbnailUrl} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                          data-testid={`img-post-thumbnail-${post.id}`}
                        />
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <Link href={`/writing/${post.id}`} data-testid={`link-post-title-${post.id}`}>
                        <h2 className="text-xl font-medium mb-2 hover:opacity-70 transition-opacity" data-testid={`heading-post-title-${post.id}`}>
                          {post.title}
                        </h2>
                      </Link>
                      
                      <div className="text-sm opacity-60 mb-3" data-testid={`metadata-post-${post.id}`}>
                        <span>{post.date}</span>
                        <span className="mx-2">·</span>
                        <span>{post.views} views</span>
                      </div>
                      
                      <p className="text-sm opacity-70 mb-4 line-clamp-2" data-testid={`excerpt-post-${post.id}`}>
                        {post.content}
                      </p>
                      
                      <div className="mt-auto">
                        <Link href={`/writing/${post.id}`} data-testid={`link-read-${post.id}`}>
                          <Button variant="outline" size="sm" data-testid={`button-read-${post.id}`}>
                            Read
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {posts?.length === 0 && (
              <div className="text-center py-12 opacity-60" data-testid="text-no-posts">
                No posts found in this category.
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
