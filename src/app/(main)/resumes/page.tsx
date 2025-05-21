import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constant";
import { PlusSquare } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your resumes",
};

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-7xl space-y-6 px-3 py-6">
      <Button asChild className="mx-auto flex w-fit gap-2">
        <Link href={ROUTES.EDITOR}>
          <PlusSquare className="size-5" />
          New resume
        </Link>
      </Button>
    </main>
  );
}
