import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import BannerCard from "@/components/BannerCard";
import RekamMedis from "@/components/RekamMedis";
import QuickStats from "@/components/QuickStats";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 min-h-screen">
        <Header />

        <div className="p-8">
          {/* Greeting */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Selamat Datang, <span className="text-sky-600">Edo</span>! 👋
            </h1>
            <p className="text-lg text-gray-500 mt-1">
              Apa kabarmu hari ini? Semoga kamu baik-baik saja.
            </p>
          </div>

          {/* Quick Stats */}
          <QuickStats />

          {/* Banner */}
          <BannerCard />

          {/* Rekam Medis Section */}
          <RekamMedis />
        </div>
      </main>
    </div>
  );
}
