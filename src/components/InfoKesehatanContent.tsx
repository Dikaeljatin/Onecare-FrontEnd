const categories = [
  {
    name: "Gizi",
    image: "/images/gizi.svg",
    description: "Informasi seputar nutrisi dan pola makan sehat",
  },
  {
    name: "Edukasi",
    image: "/images/edukasi.svg",
    description: "Edukasi kesehatan untuk masyarakat umum",
  },
  {
    name: "Mitos dan Fakta",
    image: "/images/mitos-fakta.svg",
    description: "Membedakan mitos dan fakta seputar kesehatan",
  },
];

export default function InfoKesehatanContent() {
  return (
    <div>
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Info Kesehatan</h1>
        <p className="text-lg text-gray-500 mt-1">
          Temukan informasi kesehatan terpercaya untuk keluarga Anda
        </p>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <button
            key={category.name}
            className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-10"></div>
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>
            </div>

            {/* Label */}
            <div className="bg-sky-400 py-4 px-6">
              <h3 className="text-xl font-bold text-white text-center">
                {category.name}
              </h3>
            </div>

            {/* Description overlay on hover */}
            <div className="absolute inset-0 bg-sky-500/90 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {category.name}
                </h3>
                <p className="text-white/90 text-base">{category.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
