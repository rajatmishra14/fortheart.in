import { type Comment } from "@shared/schema";
import { format } from "date-fns";

interface CommentsDisplayProps {
  comments: Comment[];
}

export default function CommentsDisplay({ comments }: CommentsDisplayProps) {
  if (comments.length === 0) {
    return null;
  }

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return format(date, "d. MMMM yyyy");
    } catch {
      return dateString;
    }
  };

  return (
    <div className="mt-12 space-y-8" data-testid="comments-list">
      {comments.map((comment) => (
        <div 
          key={comment.id} 
          className="border-b border-border pb-8 last:border-0"
          data-testid={`comment-${comment.id}`}
        >
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 
              className="font-semibold text-base" 
              data-testid={`comment-author-${comment.id}`}
            >
              {comment.author}
            </h3>
            <time 
              className="text-sm opacity-60 whitespace-nowrap" 
              dateTime={comment.date}
              data-testid={`comment-date-${comment.id}`}
            >
              {formatDate(comment.date)}
            </time>
          </div>
          <p 
            className="text-base leading-relaxed"
            data-testid={`comment-text-${comment.id}`}
          >
            {comment.text}
          </p>
        </div>
      ))}
    </div>
  );
}
