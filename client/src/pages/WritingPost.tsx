import { useRoute, Link } from "wouter";
import { ArrowLeft } from "lucide-react";

// TODO: remove mock data
const posts: Record<string, { title: string; date: string; views: number; content: string }> = {
  "1": {
    title: "On Visual Thinking and Clarity",
    date: "2025-01-10",
    views: 2819,
    content: `Visual thinking is not just about creating beautiful images—it's about understanding and communicating complex ideas through visual means. When we draw, we are forced to think deeply about what we're trying to express.

The process of translating thoughts into visual form requires a level of clarity that words alone don't always demand. Every line, every shape, every spatial relationship must be intentional. This discipline of visual expression sharpens our thinking in profound ways.

In my years of working with visual communication, I've discovered that the act of drawing is fundamentally an act of understanding. When you can draw something, you truly understand it. The hand and eye working together force the mind to confront gaps in knowledge and fill them.

This is why visual thinking is so powerful in education, in design, in problem-solving. It makes the abstract concrete. It reveals connections that might remain hidden in purely verbal discourse.

The beauty of visual thinking lies not in its complexity, but in its clarity. The best visual explanations are often the simplest ones—those that strip away everything nonessential and reveal the core structure of an idea.`,
  },
  "2": {
    title: "The Art of Simplification",
    date: "2025-01-05",
    views: 1543,
    content: `Simplification is not about removing detail—it's about finding the essential truth of a thing and expressing it with economy.

In drawing, every line you don't draw is as important as every line you do. The negative space, the emptiness, the restraint—these are what give meaning to the marks you make.

I've spent years learning to see what can be removed rather than what can be added. This is the harder skill, the one that requires true understanding.`,
  },
  "3": {
    title: "Drawing as Understanding",
    date: "2024-12-28",
    views: 987,
    content: `To draw something is to truly see it. Not just to look at it, but to understand its structure, its form, its essence.

When you sit down to draw an object, you're forced to answer questions you never knew existed. How does this curve relate to that edge? Where exactly does the shadow fall? What is the proportion of this element to that one?

These questions can't be answered superficially. They demand observation, analysis, and ultimately, understanding.`,
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

        <div className="prose prose-lg max-w-none leading-relaxed space-y-4" data-testid="content-post">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
