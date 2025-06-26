import Navbar from "@/components/nav-bar";
import PremiumModal from "@/components/premium/premium-modal";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
      <PremiumModal />
    </div>
  );
}
