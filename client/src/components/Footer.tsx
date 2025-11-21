
export default function Footer() {
  return (
    <footer className="border-t border-border/40 pt-8 mt-auto">
      <div className="flex justify-center items-center gap-4">
        <div className="text-sm opacity-60">
          © {new Date().getFullYear()} fortheart
        </div>
      </div>
    </footer>
  );
}
