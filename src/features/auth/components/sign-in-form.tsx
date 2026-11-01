"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, LoaderCircle, LockKeyhole } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

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
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { signInAction } from "../actions";
import { signInSchema, type SignInInput } from "../schemas";
import { PasswordInput } from "./password-input";
import Link from "next/link";

type SignInFormProps = {
  callbackUrl?: string;
};

export function SignInForm({ callbackUrl }: SignInFormProps) {
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInInput>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: true,
      callbackUrl,
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setServerError(null);
    const formData = new FormData();
    for (const [field, value] of Object.entries(values)) {
      if (value !== undefined) {
        formData.append(field, String(value));
      }
    }
    const result = await signInAction(values, formData);

    if (typeof result === "string") {
      setServerError(result);
    }
  });

  const text = {
    signIn: {
      eyebrow: "Welcome back",
      title: "Sign in to your account",
      description:
        "Enter your email and password below to sign in to your account.",
      email: "Email address",
      password: "Password",
      remember: "Remember me",
      submit: "Sign in",
      submitting: "Signing in...",
      newAccount: "New to our platform?",
      createAccount: "Create an account",
    },
    showPassword: "Show password",
    hidePassword: "Hide password",
    genericError:
      "We could not complete that request. Check your details and try again.",
  };

  return (
    <Card className="w-full max-w-md shadow-xl shadow-black/5">
      <CardHeader className="gap-2">
        <div className="mb-2 grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
          <LockKeyhole className="size-5" aria-hidden="true" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {text.signIn.eyebrow}
        </p>
        <CardTitle className="text-2xl">{text.signIn.title}</CardTitle>
        <CardDescription>{text.signIn.description}</CardDescription>
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
            <Label htmlFor="sign-in-email">{text.signIn.email}</Label>
            <Input
              id="sign-in-email"
              type="email"
              autoComplete="email"
              inputMode="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email ? "sign-in-email-error" : undefined
              }
              {...register("email")}
            />
            {errors.email ? (
              <p id="sign-in-email-error" className="text-sm text-destructive">
                {errors.email.message}
              </p>
            ) : null}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="sign-in-password">{text.signIn.password}</Label>
            <PasswordInput
              id="sign-in-password"
              autoComplete="current-password"
              aria-invalid={Boolean(errors.password)}
              aria-describedby={
                errors.password ? "sign-in-password-error" : undefined
              }
              showLabel={text.showPassword}
              hideLabel={text.hidePassword}
              {...register("password")}
            />
            {errors.password ? (
              <p
                id="sign-in-password-error"
                className="text-sm text-destructive"
              >
                {errors.password.message}
              </p>
            ) : null}
          </div>

          <Controller
            control={control}
            name="rememberMe"
            render={({ field }) => (
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember-me"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <Label
                  htmlFor="remember-me"
                  className="font-normal text-muted-foreground"
                >
                  {text.signIn.remember}
                </Label>
              </div>
            )}
          />

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <LoaderCircle className="animate-spin" aria-hidden="true" />
                {text.signIn.submitting}
              </>
            ) : (
              text.signIn.submit
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center gap-1.5 text-sm text-muted-foreground">
        <span>{text.signIn.newAccount}</span>
        <Link
          href="/sign-up"
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          {text.signIn.createAccount}
        </Link>
      </CardFooter>
    </Card>
  );
}
