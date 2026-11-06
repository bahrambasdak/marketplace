import { SignUpForm } from "@/src/features/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create an account | Marketplace",
  description: "Create an account to get started with the marketplace.",
};

export default function SignUpPage() {
  return (
    <section
      aria-labelledby="sign-up-page-title"
      className="flex min-h-[calc(100svh-8rem)] items-center justify-center px-4 py-10"
    >
      <div className="grid w-full max-w-5xl items-center gap-8 md:grid-cols-2 md:gap-14">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Marketplace
          </p>
          <h1
            id="sign-up-page-title"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Start with an account that is yours.
          </h1>
          <p className="max-w-prose text-muted-foreground">
            Create an account to continue. Your details stay protected and are
            used to sign you in securely.
          </p>
        </div>
        <SignUpForm />
      </div>
    </section>
  );
}
