const defaultLogos = [
  { src: '/logos/krombacher.png', alt: 'Krombacher', size: 'normal' },
  { src: '/logos/rieter.png', alt: 'RIETER', size: 'normal' },
  { src: '/logos/dah-gruppe.png', alt: 'DAH Gruppe', size: 'normal' },
  { src: '/logos/buena.png', alt: 'Buena', size: 'large' },
  { src: '/logos/barilla.png', alt: 'Barilla', size: 'small' },
  { src: '/logos/bau.png', alt: 'BAU', size: 'normal' },
];

export default function LogoStrip({ logos = defaultLogos }) {
  const getSizeClass = (size) => {
    switch (size) {
      case 'small':
        return 'h-10 md:h-12';
      case 'large':
        return 'h-16 md:h-20';
      default:
        return 'h-14 md:h-16';
    }
  };

  return (
    <section className="py-14 bg-white">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
          {logos.map((logo, idx) => (
            <img
              key={idx}
              src={logo.src}
              alt={logo.alt}
              className={`${getSizeClass(logo.size)} w-auto object-contain grayscale opacity-70 hover:opacity-90 hover:grayscale-0 transition`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


