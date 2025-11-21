import { Link } from "wouter";
import { ArrowLeft, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-prose mx-auto px-6 py-12">
      <Link href="/" data-testid="link-back">
        <div className="flex items-center gap-2 text-sm opacity-70 hover-elevate inline-flex px-2 py-1 rounded-md transition-opacity mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to home</span>
        </div>
      </Link>

      <h1 className="text-3xl font-semibold mb-8" data-testid="heading-contact">
        # Contact
      </h1>

      <div className="space-y-6 leading-relaxed">
        <p className="text-base">
          I'm always interested in conversations about visual thinking, drawing, creativity, 
          and the ways we understand and communicate through images.
        </p>

        <p className="text-base">
          Whether you have questions about my work, want to discuss a project, or simply 
          want to share your thoughts on visual communication, I'd be happy to hear from you.
        </p>

        <div className="pt-4">
          <a 
            href="mailto:hello@example.com" 
            className="inline-flex items-center gap-2 text-base hover-elevate px-3 py-2 rounded-md transition-opacity"
            data-testid="link-email"
          >
            <Mail className="w-5 h-5" />
            <span>hello@example.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
