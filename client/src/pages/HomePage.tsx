import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import drawing1 from "@assets/generated_images/Abstract_geometric_line_drawing_51a0a65f.png";
import drawing2 from "@assets/generated_images/Organic_curves_visual_study_86bcec83.png";
import drawing3 from "@assets/generated_images/Perspective_lines_geometric_art_668711b7.png";
import animation1 from "@assets/generated_images/Geometric_transformation_frame_8f83c90a.png";
import animation2 from "@assets/generated_images/Flowing_lines_motion_study_09ed811f.png";

// TODO: remove mock data
const recentPosts = [
  { id: "1", title: "On Visual Thinking and Clarity", date: "2025-01-10", views: 2819 },
  { id: "2", title: "The Art of Simplification", date: "2025-01-05", views: 1543 },
  { id: "3", title: "Drawing as Understanding", date: "2024-12-28", views: 987 },
];

const recentDrawings = [
  { id: "1", title: "Abstract Forms", imageUrl: drawing1, date: "2025-01-08" },
  { id: "2", title: "Visual Rhythm", imageUrl: drawing2, date: "2025-01-03" },
  { id: "3", title: "Perspective Study", imageUrl: drawing3, date: "2024-12-30" },
];

const recentAnimations = [
  { id: "1", title: "Transformation", thumbnailUrl: animation1, date: "2025-01-06" },
  { id: "2", title: "Flow and Motion", thumbnailUrl: animation2, date: "2024-12-29" },
];

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        {/* Writing Section */}
        <section>
          <h2 className="text-xl font-semibold mb-6" data-testid="heading-writing">Ethics</h2>
          <div className="space-y-6">
            {recentPosts.map((post) => (
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
          <Link href="/writing" data-testid="link-all-articles">
            <div className="mt-8 flex items-center gap-1 text-sm opacity-70 hover-elevate inline-flex px-2 py-1 rounded-md transition-opacity">
              <span>See all articles</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </section>

        {/* Drawings Section */}
        <section>
          <h2 className="text-xl font-semibold mb-6" data-testid="heading-drawings">
            # Drawings
          </h2>
          <div className="space-y-6">
            {recentDrawings.map((drawing) => (
              <article key={drawing.id}>
                <Link href={`/drawings/${drawing.id}`} data-testid={`link-drawing-${drawing.id}`}>
                  <div className="hover-elevate rounded-md overflow-hidden mb-2">
                    <img 
                      src={drawing.imageUrl} 
                      alt={drawing.title}
                      className="w-full aspect-square object-cover"
                      data-testid={`img-drawing-${drawing.id}`}
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-1">{drawing.title}</h3>
                </Link>
                <div className="text-sm opacity-60" data-testid={`date-drawing-${drawing.id}`}>
                  {drawing.date}
                </div>
              </article>
            ))}
          </div>
          <Link href="/drawings" data-testid="link-all-drawings">
            <div className="mt-8 flex items-center gap-1 text-sm opacity-70 hover-elevate inline-flex px-2 py-1 rounded-md transition-opacity">
              <span>See all drawings</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </section>

        {/* Animations Section */}
        <section>
          <h2 className="text-xl font-semibold mb-6" data-testid="heading-animations">
            # Animations
          </h2>
          <div className="space-y-6">
            {recentAnimations.map((animation) => (
              <article key={animation.id}>
                <Link href={`/animations/${animation.id}`} data-testid={`link-animation-${animation.id}`}>
                  <div className="hover-elevate rounded-md overflow-hidden mb-2">
                    <img 
                      src={animation.thumbnailUrl} 
                      alt={animation.title}
                      className="w-full aspect-video object-cover"
                      data-testid={`img-animation-${animation.id}`}
                    />
                  </div>
                  <h3 className="text-lg font-medium mb-1">{animation.title}</h3>
                </Link>
                <div className="text-sm opacity-60" data-testid={`date-animation-${animation.id}`}>
                  {animation.date}
                </div>
              </article>
            ))}
          </div>
          <Link href="/animations" data-testid="link-all-animations">
            <div className="mt-8 flex items-center gap-1 text-sm opacity-70 hover-elevate inline-flex px-2 py-1 rounded-md transition-opacity">
              <span>See all animations</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
}
