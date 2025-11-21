export default function Footer() {
  return (
    <footer className="mt-24 pb-12 border-t border-border/40 pt-8">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-sm opacity-60" data-testid="text-copyright">
          &copy; {new Date().getFullYear()} letterstorajat
        </p>
      </div>
    </footer>
  );
}
