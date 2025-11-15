import { useRoute, Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import drawing1 from "@assets/generated_images/Abstract_geometric_line_drawing_51a0a65f.png";
import drawing2 from "@assets/generated_images/Organic_curves_visual_study_86bcec83.png";
import drawing3 from "@assets/generated_images/Perspective_lines_geometric_art_668711b7.png";
import drawing4 from "@assets/generated_images/Light_shadow_abstract_shapes_4ce07207.png";

// TODO: remove mock data
const drawings: Record<string, { title: string; imageUrl: string; date: string; description: string }> = {
  "1": {
    title: "Abstract Forms",
    imageUrl: drawing1,
    date: "2025-01-08",
    description: "An exploration of geometric abstraction and the relationship between form and space. This piece investigates how simple lines can create complex visual rhythms.",
  },
  "2": {
    title: "Visual Rhythm",
    imageUrl: drawing2,
    date: "2025-01-03",
    description: "Flowing organic curves that suggest movement and continuity. A study in visual perception and the eye's natural tendency to follow flowing lines.",
  },
  "3": {
    title: "Perspective Study",
    imageUrl: drawing3,
    date: "2024-12-30",
    description: "An investigation of depth and perspective through intersecting lines. Exploring how two-dimensional marks can create the illusion of three-dimensional space.",
  },
  "4": {
    title: "Light and Shadow",
    imageUrl: drawing4,
    date: "2024-12-25",
    description: "A minimalist representation of light and shadow using basic geometric shapes. Examining the essential elements that our minds need to perceive form.",
  },
};

export default function DrawingDetail() {
  const [, params] = useRoute("/drawings/:id");
  const drawingId = params?.id || "1";
  const drawing = drawings[drawingId] || drawings["1"];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link href="/drawings" data-testid="link-back">
        <div className="flex items-center gap-2 text-sm opacity-70 hover-elevate inline-flex px-2 py-1 rounded-md transition-opacity mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to drawings</span>
        </div>
      </Link>

      <article>
        <h1 className="text-3xl font-semibold mb-4" data-testid="heading-drawing-title">
          {drawing.title}
        </h1>
        
        <div className="text-sm opacity-60 mb-8" data-testid="date-drawing">
          {drawing.date}
        </div>

        <div className="mb-8 rounded-md overflow-hidden">
          <img 
            src={drawing.imageUrl} 
            alt={drawing.title}
            className="w-full"
            data-testid="img-drawing-full"
          />
        </div>

        <p className="text-base leading-relaxed" data-testid="description-drawing">
          {drawing.description}
        </p>
      </article>
    </div>
  );
}
