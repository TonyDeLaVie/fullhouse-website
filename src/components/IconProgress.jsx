
const cx = (...classes) => classes.filter(Boolean).join(' ');

const BrainIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 3.5c-2 0-3.5 1.6-3.5 3.5v2c-1.15.32-2 1.36-2 2.6 0 1.24.85 2.28 2 2.6v2.2C5.5 18.9 7 20.5 9 20.5c.7 0 1.34-.2 1.9-.54.56.34 1.2.54 1.9.54 2 0 3.5-1.6 3.5-3.5v-2.2c1.15-.32 2-1.36 2-2.6 0-1.24-.85-2.28-2-2.6v-2c0-1.9-1.5-3.5-3.5-3.5-.7 0-1.34.2-1.9.54C10.34 3.7 9.7 3.5 9 3.5z" />
    <path d="M9.2 7.8c.48.3.8.82.8 1.4 0 .58-.32 1.1-.8 1.4M14.8 7.8c-.48.3-.8.82-.8 1.4 0 .58.32 1.1.8 1.4" />
  </svg>
);

const WrenchIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 7.5a4.5 4.5 0 01-6 4.24l-5.9 5.9a1.8 1.8 0 01-2.55 0l-.69-.69a1.8 1.8 0 010-2.55l5.9-5.9A4.5 4.5 0 115 6.5" />
    <circle cx="7.5" cy="16.5" r=".75" />
  </svg>
);

const BoltIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M13 2L5.5 12H11l-1 9 7.5-10H12l1-9z" />
  </svg>
);

const StarIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="12 3 14.9 8.74 21 9.77 16.5 14.13 17.5 20.2 12 17.4 6.5 20.2 7.5 14.13 3 9.77 9.1 8.74 12 3" />
  </svg>
);

const CraneIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 21h6M7 21V8h10l3 3M7 11h6" />
    <path d="M20 18a2 2 0 01-4 0 2 2 0 014 0z" />
  </svg>
);

const GlobeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="8" />
    <path d="M4 12h16M12 4a14 14 0 010 16M12 4a14 14 0 000 16" />
  </svg>
);

export const ICON_COMPONENTS = [BrainIcon, WrenchIcon, BoltIcon, StarIcon, CraneIcon, GlobeIcon];

export default function IconProgress({ activeIndex = 0, onSelect }) {
  return (
    <div className="flex items-center gap-5 h-14">
      {ICON_COMPONENTS.map((Icon, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={index}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (onSelect) {
                onSelect(index);
              }
            }}
            className={cx(
              'group flex flex-col items-center justify-center gap-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0B1324]/30 rounded-full px-2 py-2 h-full cursor-pointer relative z-30',
              !onSelect && 'cursor-default'
            )}
            aria-current={isActive ? 'step' : undefined}
            style={{ pointerEvents: 'auto', touchAction: 'manipulation' }}
          >
            <span
              className={cx(
                'rounded-full p-2 transition-all flex items-center justify-center',
                isActive ? 'text-[#0B1324]' : 'text-gray-500'
              )}
            >
              <Icon className={isActive ? 'h-8 w-8' : 'h-5 w-5'} />
            </span>
            <span
              className={cx(
                'block h-0.5 w-6 rounded-full transition-colors flex-shrink-0',
                isActive ? 'bg-[#A8E3E9]' : 'bg-transparent group-hover:bg-gray-300/40'
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
