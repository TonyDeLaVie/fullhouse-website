import AnnouncementBanner from './AnnouncementBanner.jsx'

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 pt-20 pb-8 bg-white">
      <div className="container flex flex-col items-center">
        <AnnouncementBanner />
        <h1 className="mb-6 leading-tight">
          Die besten technischen Außendienst-Teams<br />vertrauen <span className="highlight"><span>Fullhouse</span></span>
        </h1>

        <p className="text-gray-600 text-lg mb-10 max-w-2xl">
          Wir füllen Ihren technischen Außendienst in <span className="highlight-blue"><span>7 Tagen</span></span> – ohne <span className="highlight-blue"><span>Vermittlungskosten</span></span>.
        </p>

        <button className="bg-black text-white font-semibold px-8 py-3 rounded-full hover:bg-accent hover:text-black transition text-lg">
          Get Demo
        </button>
      </div>
    </section>
  );
}


