export default function AnnouncementBanner() {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 bg-gray-100 rounded-full px-6 py-2 shadow-sm border border-gray-200">
        <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
          </svg>
        </div>
        <span className="text-sm font-normal text-gray-900">
          Erprobt in Maschinenbau, Sondermaschinenbau, Energieanlagen & Bauprojekten
        </span>
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}

