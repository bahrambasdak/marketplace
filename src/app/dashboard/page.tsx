import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { auth } from "@/src/auth";

export const metadata: Metadata = {
  title: "Dashboard | Marketplace",
};

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/sign-in");
  }

  return (
    <section className="mx-auto w-full max-w-4xl space-y-3">
      <p className="text-sm font-medium text-primary">Your account</p>
      <h1 className="text-3xl font-semibold tracking-tight">
        Welcome, {session.user.name ?? "there"}.
      </h1>
      <p className="text-muted-foreground">
        You are signed in and ready to continue.
      </p>
    </section>
  );
}
