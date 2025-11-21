import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import animation1 from "@assets/generated_images/Geometric_transformation_frame_8f83c90a.png";
import animation2 from "@assets/generated_images/Flowing_lines_motion_study_09ed811f.png";

// TODO: remove mock data
const allAnimations = [
  { id: "1", title: "Transformation", thumbnailUrl: animation1, date: "2025-01-06" },
  { id: "2", title: "Flow and Motion", thumbnailUrl: animation2, date: "2024-12-29" },
  { id: "3", title: "Shape Evolution", thumbnailUrl: animation1, date: "2024-12-22" },
  { id: "4", title: "Rhythm in Movement", thumbnailUrl: animation2, date: "2024-12-15" },
];

export default function AllAnimations() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <Link href="/" data-testid="link-back">
        <div className="flex items-center gap-2 text-sm opacity-70 hover-elevate inline-flex px-2 py-1 rounded-md transition-opacity mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to home</span>
        </div>
      </Link>

      <h1 className="text-3xl font-semibold mb-12" data-testid="heading-all-animations">
        # Animations
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {allAnimations.map((animation) => (
          <article key={animation.id}>
            <Link href={`/animations/${animation.id}`} data-testid={`link-animation-${animation.id}`}>
              <div className="hover-elevate rounded-md overflow-hidden mb-3">
                <img 
                  src={animation.thumbnailUrl} 
                  alt={animation.title}
                  className="w-full aspect-video object-cover"
                  data-testid={`img-animation-${animation.id}`}
                />
              </div>
              <h2 className="text-lg font-medium mb-1">{animation.title}</h2>
            </Link>
            <div className="text-sm opacity-60" data-testid={`date-animation-${animation.id}`}>
              {animation.date}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
