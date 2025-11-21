import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function About() {
    return (
        <div className="max-w-prose mx-auto px-6 py-12">
            <Link href="/" data-testid="link-back">
                <div className="flex items-center gap-2 text-sm opacity-70 hover-elevate inline-flex px-2 py-1 rounded-md transition-opacity mb-8">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to home</span>
                </div>
            </Link>

            <h1 className="text-3xl font-semibold mb-8" data-testid="heading-about">
                # About
            </h1>

            <div className="space-y-6 leading-relaxed">
                <p className="text-base">
                    Hello, I'm Rajat. This is a space where I share my explorations in art, writing, and the beauty of the world around us.
                </p>

                <p className="text-base">
                    [Your bio goes here. You can edit this file to tell your story, describe your artistic vision, or share your background.]
                </p>

                <p className="text-base">
                    Feel free to explore my writings, drawings, and animations. If something resonates with you, I'd love to hear from you.
                </p>
            </div>
        </div>
    );
}
