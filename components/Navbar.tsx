import Link from 'next/link';

/**
 * Navbar Component
 * Brutalist navigation bar with semantic HTML
 * Responsive: stacks on mobile, horizontal on desktop
 */

export default function Navbar() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/work', label: 'Work' },
    { href: '/vault', label: 'Vault' },
    { href: '/echo', label: 'Echo' },
  ];

  return (
    <nav className="border-b-2 border-black bg-white sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Logo/Brand */}
          <Link href="/" className="text-2xl font-bold no-underline hover:underline">
            Portfolio OS
          </Link>

          {/* Navigation Links */}
          <ul className="flex flex-wrap gap-6 md:gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-lg font-semibold no-underline hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
