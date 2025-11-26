import { useState } from 'react';

const navLinks = [
  { href: '#unternehmen', label: 'Für Unternehmen' },
  { href: '#so-funktioniert-es', label: 'Ergebnisse' },
  { href: '#about', label: 'Über uns' },
  { href: '#kontakt', label: 'Kontakt' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="flex flex-col gap-3 px-10 py-6 border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between w-full gap-4">
        <h1 className="text-2xl font-extrabold">
          <span className="highlight"><span>Fullhouse</span></span>
        </h1>

        <nav className="hidden md:flex space-x-10 text-gray-600">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-black transition marker-underline">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="mobile-nav-toggle md:hidden p-2 border border-gray-200 rounded-full"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={toggleMenu}
          >
            <span className="sr-only">Menü öffnen</span>
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
          <a href="tel:01741429615" className="border border-gray-300 text-gray-900 font-semibold px-6 py-2 rounded-full hover:bg-accent transition">
            Erstgespräch buchen
          </a>
        </div>
      </div>

      {isMenuOpen && (
        <nav id="mobile-nav" className="mobile-nav-panel md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav-link marker-underline"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
