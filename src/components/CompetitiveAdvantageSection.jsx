export default function CompetitiveAdvantageSection() {
  return (
    <section 
      className="relative w-full min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden"
      style={{ fontFamily: 'Lato, sans-serif' }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url(/Animations/our_areas.png)',
        }}
      />
      
      {/* Gradient Overlay - smooth white fade at top */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,1.0) 0%, rgba(255,255,255,0.7) 25%, rgba(255,255,255,0) 65%)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 -mt-24 md:-mt-32 pb-32 md:pb-40 text-center">
        <div className="flex flex-col items-center space-y-8">
          {/* Headline */}
          <h2 
            className="text-3xl md:text-4xl font-bold text-[#0B1324] leading-tight max-w-4xl"
          >
            Besetze deine nächste Stelle in Rekordzeit.
          </h2>
          
          {/* CTA Button */}
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-lg font-semibold text-white transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ 
              backgroundColor: '#0A0E17',
              outlineColor: '#A8E3E9',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#A8E3E9';
              e.target.style.color = '#0B1324';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#0A0E17';
              e.target.style.color = 'white';
            }}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('kontakt');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Jetzt kostenloses Erstgespräch buchen.
          </a>
        </div>
      </div>
    </section>
  );
}

