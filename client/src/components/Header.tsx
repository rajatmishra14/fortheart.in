import { Link } from "wouter";
import { Instagram, Youtube } from "lucide-react";
import { SiReddit, SiDiscord } from "./social-icons";

export default function Header() {
  return (
    <header className="pt-12 pb-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <Link href="/" data-testid="link-home">
            <h1 className="text-2xl font-semibold hover-elevate inline-block px-2 py-1 rounded-md transition-opacity">For the art</h1>
          </Link>
          <div className="flex items-center gap-3 pt-1">
            {/* Social Links */}
            <a
              href="https://instagram.com/fortheart.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-elevate px-2 py-1 rounded-md transition-opacity opacity-70 hover:opacity-100"
              data-testid="link-instagram"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com/@letterstorajat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-elevate px-2 py-1 rounded-md transition-opacity opacity-70 hover:opacity-100"
              data-testid="link-youtube"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href="https://reddit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-elevate px-2 py-1 rounded-md transition-opacity opacity-70 hover:opacity-100"
              data-testid="link-reddit"
              aria-label="Reddit"
            >
              <SiReddit className="w-5 h-5" />
            </a>
            <a
              href="https://discord.gg/Zy9Jz9fk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-elevate px-2 py-1 rounded-md transition-opacity opacity-70 hover:opacity-100"
              data-testid="link-discord"
              aria-label="Discord"
            >
              <SiDiscord className="w-5 h-5" />
            </a>
          </div>
        </div>
        <p className="text-base opacity-70 italic leading-relaxed" data-testid="text-tagline">
          There is too much world, so it's better to concentrate on particulars, rather than the whole.
        </p>
      </div>
    </header>
  );
}
