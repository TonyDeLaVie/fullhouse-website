import { useMobileBreakpoint } from '../hooks/useMobileBreakpoint.js';

const defaultLogos = [
  { src: '/logos/krombacher.png', alt: 'Krombacher', size: 'normal' },
  { src: '/logos/rieter.png', alt: 'RIETER', size: 'normal' },
  { src: '/logos/dah-gruppe.png', alt: 'DAH Gruppe', size: 'normal' },
  { src: '/logos/buena.png', alt: 'Buena', size: 'large' },
  { src: '/logos/barilla.png', alt: 'Barilla', size: 'small' },
  { src: '/logos/bau.png', alt: 'BAU', size: 'normal' },
];

export default function LogoStrip({ logos = defaultLogos }) {
  const isMobile = useMobileBreakpoint();

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

  // Dupliziere Logos für nahtlose Animation
  const duplicatedLogos = [...logos, ...logos];

  const marqueeClass = isMobile
    ? 'flex items-center gap-10 overflow-x-auto snap-x snap-mandatory px-1'
    : 'flex items-center gap-x-16 animate-logo-scroll group';

  return (
    <section className="py-14 bg-white overflow-hidden">
      <div className="relative">
        <div
          className={marqueeClass}
          style={isMobile ? { animation: 'none' } : undefined}
        >
          {duplicatedLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 snap-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${getSizeClass(logo.size)} w-auto object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


