import {
  DocumentTextIcon,
  CalendarDaysIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const stats = [
  {
    label: "Total Kunjungan",
    value: "12",
    icon: DocumentTextIcon,
  },
  {
    label: "Janji Mendatang",
    value: "2",
    icon: CalendarDaysIcon,
  },
  {
    label: "Terakhir Periksa",
    value: "3 hari lalu",
    icon: ClockIcon,
  },
];

export default function QuickStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100"
          >
            <div className="w-11 h-11 bg-sky-50 rounded-lg flex items-center justify-center">
              <Icon className="w-5 h-5 text-sky-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
