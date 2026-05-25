"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  HeartIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as HomeIconSolid,
  HeartIcon as HeartIconSolid,
  CalendarDaysIcon as CalendarDaysIconSolid,
  ChatBubbleLeftRightIcon as ChatBubbleLeftRightIconSolid,
  UserIcon as UserIconSolid,
} from "@heroicons/react/24/solid";

const menuItems = [
  { name: "Rekam Medis", icon: HomeIcon, activeIcon: HomeIconSolid, href: "/" },
  { name: "Info Kesehatan", icon: HeartIcon, activeIcon: HeartIconSolid, href: "/info-kesehatan" },
  { name: "Layanan Janji", icon: CalendarDaysIcon, activeIcon: CalendarDaysIconSolid, href: "/layanan-janji" },
  { name: "Pesan", icon: ChatBubbleLeftRightIcon, activeIcon: ChatBubbleLeftRightIconSolid, href: "/pesan" },
  { name: "Profile", icon: UserIcon, activeIcon: UserIconSolid, href: "/profile" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="px-6 py-6">
        <div className="flex items-center justify-center gap-3">
          <Image
            src="/images/onecare_logo.png"
            alt="OneCare Logo"
            width={44}
            height={44}
            className="rounded-xl"
          />
          <h1 className="text-[22px] font-bold tracking-tight">
            <span className="text-gray-800">One</span>
            <span className="text-sky-500">Care</span>
          </h1>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-5 h-px bg-gray-100"></div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-5">
        <p className="px-3 mb-3 text-sm font-semibold uppercase tracking-wider text-gray-400">
          Menu
        </p>
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = isActive ? item.activeIcon : item.icon;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-sky-50 text-sky-600 border border-sky-100"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium text-[15px]">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Card */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center gap-3 px-2">
          <div className="w-9 h-9 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 font-bold text-sm">
            E
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[15px] font-semibold text-gray-800 truncate">Edo</p>
            <p className="text-sm text-gray-400">Pasien</p>
          </div>
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
        </div>
      </div>
    </aside>
  );
}
