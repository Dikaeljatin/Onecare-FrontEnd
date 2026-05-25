import {
  BuildingOffice2Icon,
  BuildingOfficeIcon,
  HomeModernIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

const facilities = [
  {
    name: "Rumah Sakit A",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Rumah Sakit B",
    icon: BuildingOfficeIcon,
  },
  {
    name: "Klinik X",
    icon: HomeModernIcon,
  },
  {
    name: "Puskesmas X",
    icon: BuildingLibraryIcon,
  },
];

export default function RekamMedis() {
  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Rekam Medis</h2>
          <p className="text-base text-gray-500 mt-0.5">Pilih fasilitas kesehatan untuk melihat rekam medis</p>
        </div>
        <button className="text-base text-sky-600 font-medium hover:text-sky-700 transition">
          Lihat Semua →
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {facilities.map((facility) => {
          const Icon = facility.icon;
          return (
            <button
              key={facility.name}
              className="flex flex-col items-center gap-3 p-5 bg-white rounded-xl border border-gray-100 hover:border-sky-200 hover:shadow-md transition-all duration-200 group cursor-pointer"
            >
              <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center group-hover:bg-sky-100 transition-colors">
                <Icon className="w-7 h-7 text-sky-600" />
              </div>
              <span className="text-base font-medium text-gray-700 text-center">
                {facility.name}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
