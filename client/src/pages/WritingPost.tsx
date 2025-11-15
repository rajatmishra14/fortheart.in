import { useRoute, Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import drawing1 from "@assets/generated_images/Abstract_geometric_line_drawing_51a0a65f.png";
import drawing2 from "@assets/generated_images/Organic_curves_visual_study_86bcec83.png";
import animation1 from "@assets/generated_images/Geometric_transformation_frame_8f83c90a.png";

// Content block types for rich blog posts
type ContentBlock = 
  | { type: 'text'; content: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'animation'; src: string; alt: string; caption?: string };

// TODO: remove mock data
const posts: Record<string, { 
  title: string; 
  date: string; 
  views: number; 
  content: ContentBlock[] 
}> = {
  "1": {
    title: "On Visual Thinking and Clarity",
    date: "2025-01-10",
    views: 2819,
    content: [
      {
        type: 'text',
        content: 'Visual thinking is not just about creating beautiful images—it\'s about understanding and communicating complex ideas through visual means. When we draw, we are forced to think deeply about what we\'re trying to express.'
      },
      {
        type: 'image',
        src: drawing1,
        alt: 'Abstract geometric forms',
        caption: 'Simple geometric forms can express complex spatial relationships'
      },
      {
        type: 'text',
        content: 'The process of translating thoughts into visual form requires a level of clarity that words alone don\'t always demand. Every line, every shape, every spatial relationship must be intentional. This discipline of visual expression sharpens our thinking in profound ways.'
      },
      {
        type: 'text',
        content: 'In my years of working with visual communication, I\'ve discovered that the act of drawing is fundamentally an act of understanding. When you can draw something, you truly understand it. The hand and eye working together force the mind to confront gaps in knowledge and fill them.'
      },
      {
        type: 'animation',
        src: animation1,
        alt: 'Geometric transformation sequence',
        caption: 'Animation showing the transformation of basic shapes—movement reveals structure'
      },
      {
        type: 'text',
        content: 'This is why visual thinking is so powerful in education, in design, in problem-solving. It makes the abstract concrete. It reveals connections that might remain hidden in purely verbal discourse.'
      },
      {
        type: 'text',
        content: 'The beauty of visual thinking lies not in its complexity, but in its clarity. The best visual explanations are often the simplest ones—those that strip away everything nonessential and reveal the core structure of an idea.'
      },
    ],
  },
  "2": {
    title: "The Art of Simplification",
    date: "2025-01-05",
    views: 1543,
    content: [
      {
        type: 'text',
        content: 'Simplification is not about removing detail—it\'s about finding the essential truth of a thing and expressing it with economy.'
      },
      {
        type: 'image',
        src: drawing2,
        alt: 'Flowing organic curves',
        caption: 'A single flowing line can capture movement and grace'
      },
      {
        type: 'text',
        content: 'In drawing, every line you don\'t draw is as important as every line you do. The negative space, the emptiness, the restraint—these are what give meaning to the marks you make.'
      },
      {
        type: 'text',
        content: 'I\'ve spent years learning to see what can be removed rather than what can be added. This is the harder skill, the one that requires true understanding.'
      },
    ],
  },
  "3": {
    title: "Drawing as Understanding",
    date: "2024-12-28",
    views: 987,
    content: [
      {
        type: 'text',
        content: 'To draw something is to truly see it. Not just to look at it, but to understand its structure, its form, its essence.'
      },
      {
        type: 'text',
        content: 'When you sit down to draw an object, you\'re forced to answer questions you never knew existed. How does this curve relate to that edge? Where exactly does the shadow fall? What is the proportion of this element to that one?'
      },
      {
        type: 'text',
        content: 'These questions can\'t be answered superficially. They demand observation, analysis, and ultimately, understanding.'
      },
    ],
  },
};

export default function WritingPost() {
  const [, params] = useRoute("/writing/:id");
  const postId = params?.id || "1";
  const post = posts[postId] || posts["1"];

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

        <div className="prose prose-lg max-w-none leading-relaxed space-y-6" data-testid="content-post">
          {post.content.map((block, index) => {
            if (block.type === 'text') {
              return (
                <p key={index} className="text-base leading-relaxed" data-testid={`text-block-${index}`}>
                  {block.content}
                </p>
              );
            }
            
            if (block.type === 'image') {
              return (
                <figure key={index} className="my-8" data-testid={`figure-image-${index}`}>
                  <div className="rounded-md overflow-hidden">
                    <img 
                      src={block.src} 
                      alt={block.alt}
                      className="w-full"
                      data-testid={`img-inline-${index}`}
                    />
                  </div>
                  {block.caption && (
                    <figcaption className="text-sm opacity-60 mt-3 text-center italic" data-testid={`caption-image-${index}`}>
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              );
            }
            
            if (block.type === 'animation') {
              return (
                <figure key={index} className="my-8" data-testid={`figure-animation-${index}`}>
                  <div className="rounded-md overflow-hidden bg-muted">
                    <img 
                      src={block.src} 
                      alt={block.alt}
                      className="w-full"
                      data-testid={`animation-inline-${index}`}
                    />
                  </div>
                  {block.caption && (
                    <figcaption className="text-sm opacity-60 mt-3 text-center italic" data-testid={`caption-animation-${index}`}>
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              );
            }
            
            return null;
          })}
        </div>
      </article>
    </div>
  );
}
