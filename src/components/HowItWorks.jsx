import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HowItWorks() {
  return (
    <section id="so-funktioniert-es" className="py-32 bg-fullhouse-light">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-12 items-center">
          {/* LEFT COLUMN: Headline, subline, bullets, metric */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-fullhouse-dark leading-tight">
              So funktioniert das <span className="highlight-blue"><span>Fullhouse System</span></span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Innerhalb von 7 Tagen bauen wir Ihnen Ihren eigenen Kandidatenpool auf.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div
                  className="mt-1 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#A8E3E9' }}
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700">Kandidaten bewerben sich proaktiv bei Ihnen</p>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="mt-1 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#A8E3E9' }}
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700">Vorgeprüft, qualifiziert & interessiert</p>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="mt-1 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#A8E3E9' }}
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700">Alles zentral im Dashboard verwalten</p>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-3xl font-bold text-fullhouse-dark">50+</p>
              <p className="text-lg text-gray-600 mt-1">erfolgreiche Projekte</p>
            </div>
          </div>

          {/* CENTER COLUMN: Dashboard Mockup */}
          <div className="flex items-center justify-center">
            <div className="relative w-[420px] aspect-[838/600]">
              <div className="absolute inset-0 rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.08),_40px_40px_80px_rgba(168,227,233,0.25)]" />
              <div
                className="absolute inset-0 rounded-[40px] border shadow-[0_0_40px_rgba(168,227,233,0.2)]"
                style={{ borderColor: 'rgba(168,227,233,0.4)' }}
              />
              <div
                className="
                  relative z-10 h-full rounded-[40px] overflow-hidden
                  bg-[linear-gradient(180deg,_#FFFFFF_0%,_#F7FAFB_45%,_#EEF4F6_100%)]
                  shadow-[inset_0_4px_10px_rgba(0,0,0,0.03)]
                "
              >
                <img
                  src="/Animations/Eingang_Lead.gif"
                  alt="Fullhouse Dashboard Animation"
                  className="absolute inset-0 rounded-[24px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'center',
                    scale: '1.01',
                    borderRadius: '24px',
                  }}
                />
                <div className="pointer-events-none absolute inset-0 rounded-[40px] bg-gradient-to-t from-transparent via-white/30 to-white/60 mix-blend-overlay z-10" />
              </div>
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full blur-3xl"
                style={{ backgroundColor: 'rgba(168,227,233,0.2)' }}
              ></div>
            </div>
          </div>

          {/* RIGHT COLUMN: Testimonial */}
          <div className="flex items-start">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#A8E3E9' }}>
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                "Wir konnten mit der Hilfe von Fullhouse erfolgreich eine Stelle im Bereich Bauleitung/Projektleitung für unsere Biogasanlagen besetzen, an der wir schon sehr lange verzweifelt gearbeitet hatten. Besonders gut gefallen hat uns die Hartnäckigkeit und der Wille, die Stelle und unsere Bedürfnisse in diesem sehr speziellen Betätigungsfeld zu verstehen."
              </blockquote>

              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-lg font-semibold text-fullhouse-dark">Andreas Groicher</p>
                    <p className="text-lg text-gray-600 mt-1">Personalleiter DAH Gruppe</p>
                  </div>
                  <a
                    href="https://www.dah-gruppe.de/start/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <img
                      src="/logos/dah-gruppe.png"
                      alt="DAH Gruppe"
                      className="h-14 object-contain opacity-70 hover:opacity-100 transition"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
