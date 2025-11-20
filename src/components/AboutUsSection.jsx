import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutUsSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Outro: Bild und Panels ausblenden (0.75-0.85) - viel später
  const outroStart = 0.75;
  
  // Bild fade-in und fade-out (bleibt lange sichtbar)
  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.05, outroStart, outroStart + 0.1],
    [0, 1, 1, 0]
  );
  
  // Panel Viktor (0.08-0.18 ein, outroStart aus) - zuerst eingeblendet
  const viktorY = useTransform(scrollYProgress, [0.08, 0.18], [60, 0]);
  const viktorFinalOpacity = useTransform(
    scrollYProgress,
    [0.08, 0.18, outroStart, outroStart + 0.1],
    [0, 1, 1, 0]
  );
  
  // Panel Sebastian (0.15-0.3 ein, outroStart aus) - lange sichtbar für Text
  const sebastianY = useTransform(scrollYProgress, [0.15, 0.3], [40, 0]);
  const sebastianFinalOpacity = useTransform(
    scrollYProgress,
    [0.15, 0.3, outroStart, outroStart + 0.1],
    [0, 1, 1, 0]
  );
  

  return (
    <section 
      id="about"
      ref={sectionRef} 
      className="py-24 bg-white relative" 
      style={{ minHeight: '900vh', paddingTop: '-10vh' }}
    >
      <div className="container max-w-7xl mx-auto px-6 sticky top-0" style={{ paddingTop: '10vh' }}>
        {/* "Über uns" Überschrift - absolut im Whitespace, ändert Layout nicht */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1324] text-center" style={{ position: 'absolute', top: '5vh', left: '1.5rem', right: '1.5rem', pointerEvents: 'none' }}>
          Über uns
        </h2>
        
        {/* Image with Panels */}
        <div className="relative mb-16 md:mb-24" style={{ marginTop: '5vh', paddingBottom: '10vh' }}>
          <motion.img
            src="/about_us/about_us.png"
            alt="Fullhouse Team"
            className="w-full h-auto rounded-2xl"
            style={{ opacity: imageOpacity }}
          />
          
          {/* Panels - Sebastian */}
          <motion.div
            className="absolute left-4 md:left-8 lg:left-16 top-[42%] md:top-[47%] max-w-[380px] md:max-w-[500px] bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-[0_4px_14px_rgba(0,0,0,0.05)] border border-[#E6E8EB] z-10 hidden md:block"
            style={{ 
              opacity: sebastianFinalOpacity,
              y: sebastianY
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#0B1324] mb-1">
              <span className="highlight-blue"><span>Sebastian Hoppen</span></span>
            </h3>
            <h4 className="text-lg text-gray-600 font-medium mb-3">
              Co-Founder Fullhouse • Ex-Hays
            </h4>
            <p className="text-lg text-[#6A6E73] leading-relaxed">
              „Kam aus dem klassischen Recruiting und ließ Fullhouse entstehen, um Besetzungen schneller und planbarer zu machen. Verantwortet Sales, Finance und die operative Skalierung."
            </p>
          </motion.div>

          {/* Panels - Viktor */}
          <motion.div
            className="absolute right-6 md:right-16 lg:right-32 top-[5%] md:top-[10%] max-w-[380px] md:max-w-[500px] bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-[0_4px_14px_rgba(0,0,0,0.05)] border border-[#E6E8EB] z-10 hidden md:block"
            style={{ 
              opacity: viktorFinalOpacity,
              y: viktorY
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#0B1324] mb-1">
              <span className="highlight-blue"><span>Viktor Presber</span></span>
            </h3>
            <h4 className="text-lg text-gray-600 font-medium mb-3">
              Co-Founder Fullhouse
            </h4>
            <p className="text-lg text-[#6A6E73] leading-relaxed">
              „Gewann internationale Werbe- und Marketingpreise und bringt mehrjährige Recruiting-Erfahrung mit. Hat bereits hunderte Außendienst-Profile qualifiziert und verantwortet bei Fullhouse Produkt, Marketing & Prozesse."
            </p>
          </motion.div>
        </div>

        {/* Mobile Panels */}
        <div className="md:hidden space-y-6 mt-8">
          <motion.div
            className="max-w-full bg-white rounded-2xl p-6 shadow-[0_4px_14px_rgba(0,0,0,0.05)] border border-[#E6E8EB]"
            style={{ 
              opacity: sebastianFinalOpacity,
              y: sebastianY
            }}
          >
            <h3 className="text-2xl font-bold text-[#0B1324] mb-1">
              <span className="highlight-blue"><span>Sebastian Hoppen</span></span>
            </h3>
            <h4 className="text-lg text-gray-600 font-medium mb-3">
              Co-Founder Fullhouse • Ex-Hays
            </h4>
            <p className="text-lg text-[#6A6E73] leading-relaxed">
              „Kam aus dem klassischen Recruiting und ließ Fullhouse entstehen, um Besetzungen schneller und planbarer zu machen. Verantwortet Sales, Finance und die operative Skalierung."
            </p>
          </motion.div>

          <motion.div
            className="max-w-full bg-white rounded-2xl p-6 shadow-[0_4px_14px_rgba(0,0,0,0.05)] border border-[#E6E8EB]"
            style={{ 
              opacity: viktorFinalOpacity,
              y: viktorY
            }}
          >
            <h3 className="text-2xl font-bold text-[#0B1324] mb-1">
              <span className="highlight-blue"><span>Viktor Presber</span></span>
            </h3>
            <h4 className="text-lg text-gray-600 font-medium mb-3">
              Co-Founder Fullhouse
            </h4>
            <p className="text-lg text-[#6A6E73] leading-relaxed">
              „Gewann internationale Werbe- und Marketingpreise und bringt mehrjährige Recruiting-Erfahrung mit. Hat bereits hunderte Außendienst-Profile qualifiziert und verantwortet bei Fullhouse Produkt, Marketing & Prozesse."
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

