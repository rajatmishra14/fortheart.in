export default function Footer() {
  return (
    <footer className="mt-24 pb-12 border-t border-border/40 pt-8">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm opacity-60" data-testid="text-copyright">
          &copy; {new Date().getFullYear()} letterstorajat
        </p>
        <div className="flex gap-6 text-sm opacity-60">
          <a href="/contact" className="hover:opacity-100 transition-opacity">Contact</a>
          <a href="/about" className="hover:opacity-100 transition-opacity">About</a>
        </div>
      </div>
    </footer>
  );
}
