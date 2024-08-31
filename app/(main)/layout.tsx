
import Header from '@/components/Header';
import Navigation from "@/components/layout/navigations";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-[288px] md:flex-col md:fixed md:inset-y-0  bg-[#EFF3FB]">
        <Navigation />
      </div>

      <main className="md:pl-72 !h-[100vh]">
        <Header />
        {children}
      </main>
    </div>
  );
};
export default DashboardLayout;
