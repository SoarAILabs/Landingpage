export default function Footer() {
  return (
    <footer className="relative z-10 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span className="font-semibold text-lg text-white">
              Soar AI Labs
            </span>
          </div>

          <div className="flex items-center gap-8 text-sm text-white">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="/support" className="hover:text-white transition-colors">
              Support
            </a>
            <a href="/status" className="hover:text-white transition-colors">
              Status
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center text-sm text-white">
          © 2025 Soar AI Labs. Making your git life easier.
        </div>
      </div>
    </footer>
  );
}
