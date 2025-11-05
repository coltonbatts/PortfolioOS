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
            © {currentYear} Portfolio OS. All rights reserved.
          </p>

          {/* Additional Links - placeholder for future expansion */}
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base font-semibold"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base font-semibold"
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
