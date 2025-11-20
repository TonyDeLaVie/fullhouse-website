export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-6 border-b border-gray-200 bg-white sticky top-0 z-50">
      <h1 className="text-2xl font-extrabold"><span className="highlight"><span>Fullhouse</span></span></h1>
      <nav className="hidden md:flex space-x-10 text-gray-600">
        <a href="#unternehmen" className="hover:text-black transition marker-underline">Für Unternehmen</a>
        <a href="#so-funktioniert-es" className="hover:text-black transition marker-underline">Ergebnisse</a>
        <a href="#about" className="hover:text-black transition marker-underline">Über uns</a>
        <a href="#kontakt" className="hover:text-black transition marker-underline">Kontakt</a>
      </nav>
      <button className="border border-gray-300 text-gray-900 font-semibold px-6 py-2 rounded-full hover:bg-accent transition">
        Erstgespräch buchen
      </button>
    </header>
  );
}


