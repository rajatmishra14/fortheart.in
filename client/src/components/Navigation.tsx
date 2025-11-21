import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <nav className="border-b border-border">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="flex items-center gap-3 text-sm font-medium">
          <Link href="/" data-testid="link-nav-home">
            <span className={`hover-elevate transition-opacity px-2 py-1 rounded-md ${isActive("/") ? "opacity-100" : "opacity-70"
              }`}>
              Home
            </span>
          </Link>
          <span className="opacity-30">|</span>
          <Link href="/writing" data-testid="link-writing">
            <span className={`hover-elevate transition-opacity px-2 py-1 rounded-md ${isActive("/writing") ? "opacity-100" : "opacity-70"
              }`}>Ethics</span>
          </Link>
          <span className="opacity-30">|</span>
          <Link href="/drawings" data-testid="link-drawings">
            <span className={`hover-elevate transition-opacity px-2 py-1 rounded-md ${isActive("/drawings") ? "opacity-100" : "opacity-70"
              }`}>
              Aesthetics
            </span>
          </Link>
          <span className="opacity-30">|</span>
          <Link href="/animations" data-testid="link-animations">
            <span className={`hover-elevate transition-opacity px-2 py-1 rounded-md ${isActive("/animations") ? "opacity-100" : "opacity-70"
              }`}>
              Animations
            </span>
          </Link>
          <span className="opacity-30">|</span>
          <Link href="/about" data-testid="link-about">
            <span className={`hover-elevate transition-opacity px-2 py-1 rounded-md ${isActive("/about") ? "opacity-100" : "opacity-70"
              }`}>
              About
            </span>
          </Link>
          <span className="opacity-30">|</span>
          <Link href="/contact" data-testid="link-contact">
            <span className={`hover-elevate transition-opacity px-2 py-1 rounded-md ${isActive("/contact") ? "opacity-100" : "opacity-70"
              }`}>
              Contact
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
