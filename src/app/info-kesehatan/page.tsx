import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import InfoKesehatanContent from "@/components/InfoKesehatanContent";

export default function InfoKesehatan() {
  return (
    <div className="flex w-full min-h-screen">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 min-h-screen">
        <Header />

        <div className="p-8">
          <InfoKesehatanContent />
        </div>
      </main>
    </div>
  );
}
