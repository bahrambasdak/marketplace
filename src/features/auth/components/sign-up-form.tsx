"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, LoaderCircle, LockKeyhole } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { signUpAction } from "../actions";
import { signUpSchema, type SignUpInput } from "../schemas";
import { PasswordInput } from "./password-input";

export function SignUpForm() {
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setServerError(null);
    const formData = new FormData();
    formData.set("name", values.name);
    formData.set("email", values.email);
    formData.set("password", values.password);

    const result = await signUpAction(formData);
    if (result?.error) {
      setServerError(result.error);
    }
  });

  const text = {
    signUp: {
      eyebrow: "Get started",
      title: "Create your account",
      description:
        "Enter your details below to create your marketplace account.",
      name: "Full name",
      email: "Email address",
      password: "Password",
      submit: "Create account",
      submitting: "Creating account...",
      existingAccount: "Already have an account?",
      signIn: "Sign in",
    },
    showPassword: "Show password",
    hidePassword: "Hide password",
  };

  return (
    <Card className="w-full max-w-md shadow-xl shadow-black/5">
      <CardHeader className="gap-2">
        <div className="mb-2 grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
          <LockKeyhole className="size-5" aria-hidden="true" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {text.signUp.eyebrow}
        </p>
        <CardTitle className="text-2xl">{text.signUp.title}</CardTitle>
        <CardDescription>{text.signUp.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-5" onSubmit={onSubmit} noValidate>
          {serverError ? (
            <Alert variant="destructive">
              <AlertCircle aria-hidden="true" />
              <AlertDescription>{serverError}</AlertDescription>
            </Alert>
          ) : null}

          <div className="grid gap-2">
            <Label htmlFor="sign-up-name">{text.signUp.name}</Label>
            <Input
              id="sign-up-name"
              type="text"
              autoComplete="name"
              required
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "sign-up-name-error" : undefined}
              {...register("name")}
            />
            {errors.name ? (
              <p id="sign-up-name-error" className="text-sm text-destructive">
                {errors.name.message}
              </p>
            ) : null}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="sign-up-email">{text.signUp.email}</Label>
            <Input
              id="sign-up-email"
              type="email"
              autoComplete="email"
              inputMode="email"
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email ? "sign-up-email-error" : undefined
              }
              {...register("email")}
            />
            {errors.email ? (
              <p id="sign-up-email-error" className="text-sm text-destructive">
                {errors.email.message}
              </p>
            ) : null}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="sign-up-password">{text.signUp.password}</Label>
            <PasswordInput
              id="sign-up-password"
              autoComplete="new-password"
              required
              aria-invalid={Boolean(errors.password)}
              aria-describedby={
                errors.password ? "sign-up-password-error" : undefined
              }
              showLabel={text.showPassword}
              hideLabel={text.hidePassword}
              {...register("password")}
            />
            {errors.password ? (
              <p
                id="sign-up-password-error"
                className="text-sm text-destructive"
              >
                {errors.password.message}
              </p>
            ) : null}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <LoaderCircle className="animate-spin" aria-hidden="true" />
                {text.signUp.submitting}
              </>
            ) : (
              text.signUp.submit
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center gap-1.5 text-sm text-muted-foreground">
        <span>{text.signUp.existingAccount}</span>
        <Link
          href="/sign-in"
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          {text.signUp.signIn}
        </Link>
      </CardFooter>
    </Card>
  );
}
