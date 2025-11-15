export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-24 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-center text-sm opacity-60" data-testid="text-copyright">
          © {currentYear} Your Name
        </p>
      </div>
    </footer>
  );
}
