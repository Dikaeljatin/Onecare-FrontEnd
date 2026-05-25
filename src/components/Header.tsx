"use client";

import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
      {/* Search Bar */}
      <div className="relative w-80">
        <MagnifyingGlassIcon className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Cari layanan, dokter, atau fasilitas..."
          className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-base text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-400 transition"
        />
      </div>

      <div className="flex items-center gap-3">
        {/* Notification */}
        <button className="relative p-2 rounded-lg hover:bg-gray-50 border border-gray-200 transition">
          <BellIcon className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
        </button>

        {/* Date */}
        <div className="px-4 py-2.5 rounded-lg bg-sky-50 border border-sky-100">
          <p className="text-base text-sky-700 font-medium">
            {new Date().toLocaleDateString("id-ID", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </header>
  );
}
