import Navbar from "@/components/nav-bar";
import PremiumModal from "@/components/premium/premium-modal";
import SubscriptionLevelProvider from "@/components/subscription-level-providers";
import { getUserSubscriptionLevel } from "@/lib/subscription";
import { auth } from "@clerk/nextjs/server";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const userSubscriptionLevel = await getUserSubscriptionLevel(userId);

  return (
    <SubscriptionLevelProvider userSubscriptionLevel={userSubscriptionLevel}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        {children}
        <PremiumModal />
      </div>
    </SubscriptionLevelProvider>
  );
}
