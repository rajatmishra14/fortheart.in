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
              For the art
            </span>
          </Link>
          <span className="opacity-30">|</span>
          <Link href="/ethics" data-testid="link-ethics">
            <span className={`hover-elevate transition-opacity px-2 py-1 rounded-md ${isActive("/ethics") ? "opacity-100" : "opacity-70"
              }`}>
              Ethics
            </span>
          </Link>
          <span className="opacity-30">|</span>
          <Link href="/aesthetics" data-testid="link-aesthetics">
            <span className={`hover-elevate transition-opacity px-2 py-1 rounded-md ${isActive("/aesthetics") ? "opacity-100" : "opacity-70"
              }`}>
              Aesthetics
            </span>
          </Link>
          <span className="opacity-30">|</span>
          <Link href="/metaphysics" data-testid="link-metaphysics">
            <span className={`hover-elevate transition-opacity px-2 py-1 rounded-md ${isActive("/metaphysics") ? "opacity-100" : "opacity-70"
              }`}>
              Metaphysics
            </span>
          </Link>
          <span className="opacity-30">|</span>
          <Link href="/community" data-testid="link-community">
            <span className={`hover-elevate transition-opacity px-2 py-1 rounded-md ${isActive("/community") ? "opacity-100" : "opacity-70"
              }`}>
              Join our community
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
