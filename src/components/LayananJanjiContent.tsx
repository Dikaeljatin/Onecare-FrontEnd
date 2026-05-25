import { UserCircleIcon } from "@heroicons/react/24/solid";

const doctors = [
  {
    name: "Dr. Ahmad Fauzi",
    specialty: "Dokter Umum",
  },
  {
    name: "Dr. Siti Rahmawati",
    specialty: "Dokter Gigi",
  },
  {
    name: "Dr. Budi Santoso",
    specialty: "Dokter Anak",
  },
  {
    name: "Dr. Rina Kartika",
    specialty: "Dokter Mata",
  },
];

export default function LayananJanjiContent() {
  return (
    <div>
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Layanan Janji</h1>
        <p className="text-lg text-gray-500 mt-1">
          Atur jadwal kunjungan dan konsultasi dengan dokter
        </p>
      </div>

      {/* Schedule Type Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {/* Jadwal Tindakan */}
        <button className="flex flex-col items-center gap-4 p-6 bg-gradient-to-b from-sky-400 to-sky-500 rounded-2xl shadow-md shadow-sky-200 hover:shadow-lg hover:shadow-sky-300 transition-all duration-200 group cursor-pointer">
          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
            <svg
              className="w-7 h-7 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085"
              />
            </svg>
          </div>
          <span className="text-base font-semibold text-white">Jadwal Tindakan</span>
        </button>

        {/* Jadwal Pengobatan */}
        <button className="flex flex-col items-center gap-4 p-6 bg-gradient-to-b from-sky-400 to-sky-500 rounded-2xl shadow-md shadow-sky-200 hover:shadow-lg hover:shadow-sky-300 transition-all duration-200 group cursor-pointer">
          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
            <svg
              className="w-7 h-7 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
          </div>
          <span className="text-base font-semibold text-white">Jadwal Pengobatan</span>
        </button>

        {/* Jadwal Konsultasi */}
        <button className="flex flex-col items-center gap-4 p-6 bg-gradient-to-b from-sky-400 to-sky-500 rounded-2xl shadow-md shadow-sky-200 hover:shadow-lg hover:shadow-sky-300 transition-all duration-200 group cursor-pointer">
          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
            <svg
              className="w-7 h-7 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>
          </div>
          <span className="text-base font-semibold text-white">Jadwal Konsultasi</span>
        </button>

        {/* Jadwal Vaksinasi */}
        <button className="flex flex-col items-center gap-4 p-6 bg-gradient-to-b from-sky-400 to-sky-500 rounded-2xl shadow-md shadow-sky-200 hover:shadow-lg hover:shadow-sky-300 transition-all duration-200 group cursor-pointer">
          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
            <svg
              className="w-7 h-7 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
              />
            </svg>
          </div>
          <span className="text-base font-semibold text-white">Jadwal Vaksinasi</span>
        </button>
      </div>

      {/* Doctor List Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
          Atur Jadwal Dengan Dokter Anda
        </h2>
        <p className="text-base text-gray-500 text-center mb-6">
          Pilih dokter dan atur jadwal konsultasi
        </p>

        <div className="space-y-4 max-w-3xl mx-auto">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              {/* Doctor Avatar */}
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                <UserCircleIcon className="w-16 h-16 text-gray-400" />
              </div>

              {/* Doctor Info */}
              <div className="flex-1 min-w-0">
                <p className="text-lg font-bold text-gray-800">{doctor.name}</p>
                <p className="text-sm text-gray-500">{doctor.specialty}</p>
              </div>

              {/* Action Button */}
              <button className="px-5 py-2.5 bg-sky-400 hover:bg-sky-500 text-white font-semibold text-base rounded-full transition-colors shadow-sm">
                Atur Jadwal
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
