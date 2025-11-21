import { Link } from "wouter";
import { SiInstagram, SiYoutube, SiReddit, SiDiscord } from "react-icons/si";

export default function Header() {
  return (
    <header className="pt-12 pb-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <Link href="/" data-testid="link-home">
            <h1 className="text-2xl font-semibold hover-elevate inline-block px-2 py-1 rounded-md transition-opacity">For the art</h1>
          </Link>
          <div className="flex items-center gap-3 pt-1">
            <a
              href="https://instagram.com/fortheart.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-elevate px-2 py-1 rounded-md transition-opacity opacity-70 hover:opacity-100"
              data-testid="link-instagram"
              aria-label="Instagram"
            >
              <SiInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com/@letterstorajat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-elevate px-2 py-1 rounded-md transition-opacity opacity-70 hover:opacity-100"
              data-testid="link-youtube"
              aria-label="YouTube"
            >
              <SiYoutube className="w-5 h-5" />
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
              href="https://discord.com"
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
          Clarity & Beauty – Join the conversation on drawing, creativity and visual understanding,
          and have a look at my pictures of this great spectacle called life!
        </p>
      </div>
    </header>
  );
}
