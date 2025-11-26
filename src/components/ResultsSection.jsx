import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useMobileBreakpoint } from '../hooks/useMobileBreakpoint.js';

const kpiCards = [
  {
    id: 1,
    number: '48–96 h',
    subtext: 'Erste qualifizierte Bewerbungen.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ opacity: 0.7 }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    number: '22–35 %',
    subtext: 'Interview-Quote der gelieferten Kandidaten.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ opacity: 0.7 }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    highlight: true,
  },
  {
    id: 3,
    number: '3–7',
    timeWindow: 'in 14 Tagen',
    subtext: 'Passende Kandidaten pro Stelle.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ opacity: 0.7 }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 4,
    number: '–40–60 %',
    subtext: 'Kostenersparnis gegenüber Personalvermittlern.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ opacity: 0.7 }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 5,
    number: '<5 min',
    subtext: 'Ihr Aufwand je Kandidat – prüfen & zum Gespräch einladen.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ opacity: 0.7 }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

function AnimatedKPICard({ card, index, scrollYProgress }) {
  const SECTION_START = 0.1;
  const SECTION_END = 0.65;
  const SECTION_RANGE = SECTION_END - SECTION_START;
  const CARD_STEP = SECTION_RANGE / 5.5;
  const cardStart = SECTION_START + (index * CARD_STEP);
  const cardEnd = cardStart + CARD_STEP;

  const cardStartProgress = cardStart;
  const cardEndProgress = cardStart + CARD_STEP * 0.35;
  const cardOpacity = useTransform(
    scrollYProgress,
    [cardStartProgress - 0.01, cardEndProgress],
    [0, 1]
  );
  const cardScale = useTransform(
    scrollYProgress,
    [cardStartProgress - 0.01, cardEndProgress],
    [0.98, 1]
  );

  const numberStartProgress = cardStart + CARD_STEP * 0.35;
  const numberEndProgress = cardStart + CARD_STEP * 0.65;
  const numberOpacity = useTransform(
    scrollYProgress,
    [numberStartProgress - 0.01, numberEndProgress],
    [0, 1]
  );
  const numberY = useTransform(
    scrollYProgress,
    [numberStartProgress - 0.01, numberEndProgress],
    [20, 0]
  );
  const numberScale = useTransform(
    scrollYProgress,
    [numberStartProgress - 0.01, numberEndProgress],
    [0.95, 1]
  );

  const textStartProgress = cardStart + CARD_STEP * 0.65;
  const textEndProgress = cardEnd;
  const textOpacity = useTransform(
    scrollYProgress,
    [textStartProgress - 0.01, textEndProgress],
    [0, 1]
  );
  const textY = useTransform(
    scrollYProgress,
    [textStartProgress - 0.01, textEndProgress],
    [16, 0]
  );

  return (
    <motion.div
      className={`
        bg-white rounded-2xl p-6 border border-[#E6E8EB]
        shadow-[0_1px_2px_rgba(0,0,0,0.03)]
        ${card.highlight ? 'bg-[#EEF4FF] border-[#EEF4FF]' : ''}
      `}
      style={{ opacity: cardOpacity, scale: cardScale }}
    >
      <motion.div
        className="flex items-start justify-between mb-4"
        style={{ opacity: cardOpacity }}
      >
        <div className="text-[#0B1324]">
          {card.icon}
        </div>
      </motion.div>

      <motion.div
        className="mb-2"
        style={{ opacity: numberOpacity, y: numberY, scale: numberScale }}
      >
        <div className="flex flex-col">
          <span className="text-4xl md:text-5xl font-extrabold text-[#0B1324] kpi-number">
            {card.number}
          </span>
          {card.timeWindow && (
            <motion.span
              className="text-lg text-gray-500 font-medium mt-1 leading-relaxed"
              style={{ opacity: numberOpacity, y: numberY, scale: numberScale }}
            >
              {card.timeWindow}
            </motion.span>
          )}
        </div>
      </motion.div>

      <motion.p
        className="text-lg text-[#6A6E73] font-medium leading-relaxed kpi-text"
        style={{ opacity: textOpacity, y: textY }}
      >
        {card.subtext}
      </motion.p>
    </motion.div>
  );
}

function StaticKPICard({ card }) {
  return (
    <div
      className={`
        bg-white rounded-2xl p-8 border border-[#E6E8EB]
        shadow-[0_1px_2px_rgba(0,0,0,0.03)]
        ${card.highlight ? 'bg-[#EEF4FF] border-[#EEF4FF]' : ''}
        text-center
      `}
    >
      <div className="flex items-center justify-center gap-3 mb-6 text-[#0B1324]">
        <div className="w-8 h-8">{card.icon}</div>
        <span className="text-sm uppercase tracking-wide text-gray-500">Kennzahl</span>
      </div>
      <div className="flex flex-col mb-4">
        <span className="text-4xl font-extrabold text-[#0B1324]">
          {card.number}
        </span>
        {card.timeWindow && (
          <span className="text-lg text-gray-500 font-medium mt-2 leading-relaxed">
            {card.timeWindow}
          </span>
        )}
      </div>
      <p className="text-lg text-[#6A6E73] font-medium leading-relaxed">
        {card.subtext}
      </p>
    </div>
  );
}

function ResultsSectionDesktop() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.7', 'end 0.3'],
  });

  return (
    <section ref={sectionRef} className="py-24 bg-white relative" style={{ minHeight: '250vh' }}>
      <div className="container max-w-7xl mx-auto px-6 sticky top-0 pt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1324] leading-tight mb-4">
            Ergebnisse in nur <span className="highlight-blue"><span>7 Tagen</span></span>
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            Transparente Leistungskennzahlen aus 50 Projekten
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {kpiCards.slice(0, 3).map((card, index) => (
              <AnimatedKPICard key={card.id} card={card} index={index} scrollYProgress={scrollYProgress} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {kpiCards.slice(3, 5).map((card, index) => (
              <AnimatedKPICard key={card.id} card={card} index={index + 3} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultsSectionMobile() {
  return (
    <section className="py-20 bg-white px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#0B1324] leading-tight mb-5">
          Ergebnisse in nur <span className="highlight-blue"><span>7 Tagen</span></span>
        </h2>
        <p className="text-lg text-gray-600 font-medium">
          Leistungskennzahlen auf einen Blick
        </p>
      </div>

      <div className="space-y-8 max-w-2xl mx-auto">
        {kpiCards.map((card) => (
          <StaticKPICard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}

export default function ResultsSection() {
  const isMobile = useMobileBreakpoint();
  return isMobile ? <ResultsSectionMobile /> : <ResultsSectionDesktop />;
}

