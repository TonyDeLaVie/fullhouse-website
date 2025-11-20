import { useMemo, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import IconProgress, { ICON_COMPONENTS } from './IconProgress.jsx';

const roleData = [
  { id: 'bauleiter', title: 'Bauleiter', image: '/Bilder%20Fachbereiche/Bauleiter.png', row: 'top', order: 0 },
  { id: 'servicetechniker', title: 'Servicetechniker', image: '/Bilder%20Fachbereiche/Servicetechniker.png', row: 'top', order: 1 },
  { id: 'inbetriebnehmer', title: 'Inbetriebnehmer', image: '/Bilder%20Fachbereiche/Inbetriebnehmer.png', row: 'top', order: 2 },
];

const iconSteps = [
  {
    title: 'Maschinenbau & Sondermaschinenbau',
    description: 'Erprobte Fachkräfte für CNC, Werkzeugmaschinen, Zerspanung & Präzisionsanlagen.'
  },
  {
    title: 'Automatisierung & Steuerungstechnik',
    description: 'Spezialist:innen für Steuerungen, TIA Portal, Fehlersuche & Prozessoptimierung.'
  },
  {
    title: 'Energie & Elektrotechnik',
    description: 'Fachkräfte für Energieanlagen, Schaltanlagenbau, Schutztechnik & Instandhaltung.'
  },
  {
    title: 'Montage, Service & weltweiter Außendienst',
    description: 'Reisebereite Profis für Wartung, Diagnosen, Reparatur & Modernisierung.'
  },
  {
    title: 'Bau & Projektleitung',
    description: 'Erfahrene Fach- und Führungskräfte für komplexe Bau- und Industrieprojekte.'
  },
  {
    title: 'Industrie, Produktion & Anlagenbetrieb',
    description: 'Spezialist:innen für die technische Wertschöpfung – von Fertigung bis Betrieb.'
  },
];

const totalRoles = roleData.length;
const ICONS_COUNT = iconSteps.length;
const TOTAL_STAGES = totalRoles + ICONS_COUNT + 10;
const STEP = 1 / TOTAL_STAGES;
const TRANSITION_WINDOW = STEP * 0.4;
const FINAL_START = (totalRoles + 4) * STEP;
const FINAL_END = FINAL_START + ICONS_COUNT * STEP + STEP * 3;

function RoleCard({ role, scrollYProgress }) {
  const baseStart = role.order * STEP;
  const appearStart = baseStart;
  const appearEnd = baseStart + TRANSITION_WINDOW;
  const peakEnd = FINAL_START - STEP * 0.5; // Gemeinsamer Zeitpunkt, an dem alle Bilder voll sichtbar sind

  const opacity = useTransform(
    scrollYProgress,
    [appearStart - 0.01, appearStart, appearEnd, peakEnd, FINAL_START, FINAL_END],
    [0, 0, 1, 1, 0, 0]
  );

  const translateY = useTransform(
    scrollYProgress,
    [appearStart - 0.02, appearStart, appearEnd, FINAL_START],
    [32, 0, 0, -16]
  );

  return (
    <motion.figure className="flex flex-col items-center gap-3" style={{ opacity }}>
      <motion.div
        className="relative w-full max-w-xs overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_rgba(15,23,42,0.12)] ring-1 ring-white/60"
        style={{ y: translateY }}
      >
        <img
          src={role.image}
          alt={role.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>
      <figcaption className="text-lg font-semibold text-[#0B1324] leading-relaxed">
        {role.title}
      </figcaption>
    </motion.figure>
  );
}

export default function FocusRolesSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const roles = useMemo(() => roleData, []);

  const FINAL_TEXT_START = FINAL_END - STEP * 2;
  
  const finalOpacity = useTransform(
    scrollYProgress,
    [FINAL_START - STEP * 1, FINAL_START + STEP * 0.2, FINAL_TEXT_START, FINAL_END],
    [0, 1, 1, 1]
  );
  const finalProgress = useTransform(scrollYProgress, [FINAL_START, FINAL_END], [0, 1]);
  const overlayY = useTransform(finalProgress, (value) => 20 + value * 20);
  const headingOpacity = useTransform(finalProgress, [0, 0.85, 0.95], [1, 1, 0]);
  const finalY = useTransform(finalProgress, (value) => value * 20);
  const iconsOpacity = useTransform(finalProgress, [0, 0, 0.85, 0.95], [1, 1, 1, 0]);
  const textOpacity = useTransform(finalProgress, [0, 0.05, 0.85, 0.95], [1, 1, 1, 0]);
  const textY = useTransform(finalProgress, [0, 0.05, 0.95], [0, 0, 0]);
  const finalTextOpacity = useTransform(
    scrollYProgress,
    [FINAL_TEXT_START + STEP * 0.5, FINAL_TEXT_START + STEP * 1, FINAL_END - STEP * 0.5, FINAL_END],
    [0, 1, 1, 1]
  );
  const [activeIcon, setActiveIcon] = useState(0);
  const overlayPointerEvents = useTransform(finalOpacity, (value) => (value > 0.1 ? 'auto' : 'none'));

  const handleSelectIcon = (index) => {
    const targetProgress = FINAL_START + index * STEP + STEP * 0.5;
    const element = sectionRef.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      const totalHeight = rect.height;
      const scrollTarget =
        window.scrollY + rect.top + targetProgress * totalHeight - window.innerHeight * 0.55;
      window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
    }
  };

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    if (value >= FINAL_START && value <= FINAL_END) {
      const index = Math.min(
        ICONS_COUNT - 1,
        Math.floor((value - FINAL_START) / STEP)
      );
      if (index !== activeIcon) {
        setActiveIcon(index);
      }
    }
  });

  return (
    <section
      id="unternehmen"
      ref={sectionRef}
      className="relative pt-16 md:pt-28 pb-12 md:pb-16 px-6 bg-white text-center"
      aria-labelledby="focus-roles-heading"
      style={{ fontFamily: 'Lato, sans-serif', minHeight: '480vh' }}
    >
      <div className="sticky top-[1vh] md:top-[0.5vh] flex min-h-screen items-center justify-center">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12 pt-0 md:pt-2">
          <h1
            id="focus-roles-heading"
            className="text-5xl md:text-6xl font-normal tracking-tight text-[#0B1324]"
            style={{ opacity: headingOpacity }}
          >
            Gemacht für die Stellen, die <br className="hidden md:block" />{' '}
            <span className="highlight-blue"><span>wirklich zählen</span></span>.
          </h1>

          <div className="relative w-full">
            <div className="grid w-full gap-10">
              <div className="grid gap-12 md:grid-cols-3">
                {roles.map((role) => (
                  <RoleCard key={role.id} role={role} scrollYProgress={scrollYProgress} />
                ))}
              </div>
            </div>

            <motion.div
              className="absolute left-0 right-0 bottom-[-20px] md:bottom-[-10px] flex flex-col items-center gap-0 px-4 md:px-0 z-20"
              style={{
                opacity: finalOpacity,
                pointerEvents: 'auto',
                y: overlayY
              }}
            >
              <motion.div style={{ opacity: iconsOpacity, pointerEvents: 'auto' }} className="flex justify-center relative z-20">
                <IconProgress activeIndex={activeIcon} onSelect={handleSelectIcon} />
              </motion.div>

              <motion.div
                className="flex items-center justify-center h-[240px] md:h-[280px] max-w-4xl -mt-20"
                style={{ opacity: textOpacity, y: textY }}
              >
                <div className="max-w-2xl flex-1 text-center">
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#0B1324] mb-3">
                    {iconSteps[activeIcon].title}
                  </h3>
                  <p className="text-lg text-[#0B1324]/70 leading-relaxed">
                    {iconSteps[activeIcon].description}
                  </p>
                </div>
              </motion.div>

            </motion.div>

            <motion.div
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex items-center justify-center z-30 px-4"
              style={{ opacity: finalTextOpacity }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1324] leading-tight text-center">
                <span className="highlight-blue"><span>120 Stellen</span></span> besetzt und wir hören nicht auf.
              </h2>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="h-[120px]" />
    </section>
  );
}

