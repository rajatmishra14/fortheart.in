import { Instagram, Youtube } from "lucide-react";
import { SiReddit, SiDiscord } from "./social-icons";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 pt-8 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm opacity-60">
          © {new Date().getFullYear()} fortheart
        </div>
        <div className="flex items-center gap-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://youtube.com/@letterstorajat" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
            <Youtube className="w-5 h-5" />
          </a>
          <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
            <SiReddit className="w-5 h-5" />
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
            <SiDiscord className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
