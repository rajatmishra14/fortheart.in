import { useRoute, Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import animation1 from "@assets/generated_images/Geometric_transformation_frame_8f83c90a.png";
import animation2 from "@assets/generated_images/Flowing_lines_motion_study_09ed811f.png";

// TODO: remove mock data
const animations: Record<string, { title: string; thumbnailUrl: string; date: string; description: string }> = {
  "1": {
    title: "Transformation",
    thumbnailUrl: animation1,
    date: "2025-01-06",
    description: "A study of geometric transformation and metamorphosis. This animation explores how simple shapes can evolve and transform while maintaining their essential character. Through careful timing and spacing, the piece reveals the underlying mathematics of change.",
  },
  "2": {
    title: "Flow and Motion",
    thumbnailUrl: animation2,
    date: "2024-12-29",
    description: "An exploration of organic movement and rhythm. Flowing lines trace paths through space, creating patterns that evoke natural motion. The animation investigates how our eyes perceive continuity and how movement can create meaning.",
  },
  "3": {
    title: "Shape Evolution",
    thumbnailUrl: animation1,
    date: "2024-12-22",
    description: "A meditation on the evolution of form. Simple geometric shapes gradually shift and transform, revealing the subtle transitions between different states of being.",
  },
  "4": {
    title: "Rhythm in Movement",
    thumbnailUrl: animation2,
    date: "2024-12-15",
    description: "An investigation of temporal rhythm and visual cadence. The piece uses repetition and variation to create a sense of musical rhythm in visual form.",
  },
};

export default function AnimationDetail() {
  const [, params] = useRoute("/animations/:id");
  const animationId = params?.id || "1";
  const animation = animations[animationId] || animations["1"];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link href="/animations" data-testid="link-back">
        <div className="flex items-center gap-2 text-sm opacity-70 hover-elevate inline-flex px-2 py-1 rounded-md transition-opacity mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to animations</span>
        </div>
      </Link>

      <article>
        <h1 className="text-3xl font-semibold mb-4" data-testid="heading-animation-title">
          {animation.title}
        </h1>
        
        <div className="text-sm opacity-60 mb-8" data-testid="date-animation">
          {animation.date}
        </div>

        <div className="mb-8 rounded-md overflow-hidden bg-muted">
          <img 
            src={animation.thumbnailUrl} 
            alt={animation.title}
            className="w-full"
            data-testid="img-animation-preview"
          />
        </div>

        <p className="text-base leading-relaxed" data-testid="description-animation">
          {animation.description}
        </p>
      </article>
    </div>
  );
}
