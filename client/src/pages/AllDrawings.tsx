import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import drawing1 from "@assets/generated_images/Abstract_geometric_line_drawing_51a0a65f.png";
import drawing2 from "@assets/generated_images/Organic_curves_visual_study_86bcec83.png";
import drawing3 from "@assets/generated_images/Perspective_lines_geometric_art_668711b7.png";
import drawing4 from "@assets/generated_images/Light_shadow_abstract_shapes_4ce07207.png";

// TODO: remove mock data
const allDrawings = [
  { id: "1", title: "Abstract Forms", imageUrl: drawing1, date: "2025-01-08" },
  { id: "2", title: "Visual Rhythm", imageUrl: drawing2, date: "2025-01-03" },
  { id: "3", title: "Perspective Study", imageUrl: drawing3, date: "2024-12-30" },
  { id: "4", title: "Light and Shadow", imageUrl: drawing4, date: "2024-12-25" },
  { id: "5", title: "Geometric Exploration", imageUrl: drawing1, date: "2024-12-18" },
  { id: "6", title: "Flow Studies", imageUrl: drawing2, date: "2024-12-10" },
];

export default function AllDrawings() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <Link href="/" data-testid="link-back">
        <div className="flex items-center gap-2 text-sm opacity-70 hover-elevate inline-flex px-2 py-1 rounded-md transition-opacity mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to home</span>
        </div>
      </Link>

      <h1 className="text-3xl font-semibold mb-12" data-testid="heading-all-drawings">
        # Drawings
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {allDrawings.map((drawing) => (
          <article key={drawing.id}>
            <Link href={`/drawings/${drawing.id}`} data-testid={`link-drawing-${drawing.id}`}>
              <div className="hover-elevate rounded-md overflow-hidden mb-3">
              </div>
              <h2 className="text-lg font-medium mb-1">{drawing.title}</h2>
            </Link>
            <div className="text-sm opacity-60" data-testid={`date-drawing-${drawing.id}`}>
              {drawing.date}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
