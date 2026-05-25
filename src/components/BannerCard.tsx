export default function BannerCard() {
  return (
    <div className="bg-gradient-to-r from-sky-500 to-sky-400 rounded-2xl p-8 mb-8 flex items-center justify-between overflow-hidden relative">
      {/* Text Content */}
      <div className="max-w-lg z-10">
        <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
          <span className="text-white text-xs font-medium">Layanan Aktif 24/7</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">OneCare</h2>
        <p className="text-white/90 text-base leading-relaxed">
          OneCare adalah aplikasi layanan kesehatan yang terintegrasi dan mudah
          digunakan. Kami hadir untuk membantu masyarakat mendapatkan layanan
          yang cepat, tertata, dan efisien kapan saja, di mana saja.
        </p>
        <button className="mt-5 px-5 py-2 bg-white text-sky-600 font-semibold text-sm rounded-lg hover:bg-sky-50 transition shadow-sm">
          Pelajari Selengkapnya
        </button>
      </div>

      {/* Doctor Illustration */}
      <div className="relative z-10 hidden lg:flex">
        <div className="w-44 h-44 bg-white/15 rounded-full flex items-center justify-center border border-white/20">
          <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
            <svg
              className="w-20 h-20 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.2}
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-white/5 rounded-full translate-y-1/2"></div>
    </div>
  );
}
