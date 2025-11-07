/**
 * Footer Component
 * Simple footer with copyright and minimal branding
 * Semantic HTML with proper ARIA roles
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-black bg-light-gray mt-auto" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm md:text-base">
            © {currentYear} Alex Rivera. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/alexrivera"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base font-semibold hover:underline"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/alexrivera"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base font-semibold hover:underline"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
            <a
              href="https://behance.net/alexrivera"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base font-semibold hover:underline"
              aria-label="Behance portfolio"
            >
              Behance
            </a>
            <a
              href="https://twitter.com/alexrivera"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base font-semibold hover:underline"
              aria-label="Twitter profile"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
