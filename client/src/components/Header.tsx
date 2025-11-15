import { Link } from "wouter";

export default function Header() {
  return (
    <header className="pt-12 pb-8">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/" data-testid="link-home">
          <h1 className="text-2xl font-semibold mb-2 hover-elevate inline-block px-2 py-1 rounded-md transition-opacity">
            Your Name
          </h1>
        </Link>
        <p className="text-base opacity-70 italic leading-relaxed" data-testid="text-tagline">
          Clarity & Beauty – Join the conversation on drawing, creativity and visual understanding, 
          and have a look at my pictures of this great spectacle called life!
        </p>
      </div>
    </header>
  );
}
