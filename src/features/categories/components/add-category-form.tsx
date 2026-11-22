"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, ArrowLeft, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { createCategory } from "../actions";
import {
  createCategorySchema,
  type CreateCategoryInput,
} from "../schemas";

export function AddCategoryForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CreateCategoryInput>({
    resolver: zodResolver(createCategorySchema),
    defaultValues: {
      name: "",
      slug: "",
      description: "",
    },
  });

  const slug = watch("slug");

  function generateSlug(value: string) {
    setValue(
      "slug",
      value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, ""),
    );
  }

  const onSubmit = handleSubmit(async (values) => {
    setServerError(null);
    const formData = new FormData();
    formData.set("name", values.name);
    formData.set("slug", values.slug);
    formData.set("description", values.description ?? "");

    const result = await createCategory(formData);
    if (!result.ok) {
      setServerError(result.error);
      return;
    }

    router.push(`/dashboard/categories/${result.slug}`);
    router.refresh();
  });

  return (
    <div className="mx-auto w-full max-w-2xl">
      <Link
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
        href="/dashboard/categories"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to categories
      </Link>

      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Catalog
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Add new category
        </h1>
        <p className="mt-2 text-muted-foreground">
          Create a category visitors can use to browse products.
        </p>
      </header>

      <form className="grid gap-6" onSubmit={onSubmit} noValidate>
        {serverError ? (
          <Alert variant="destructive">
            <AlertCircle aria-hidden="true" />
            <AlertDescription>{serverError}</AlertDescription>
          </Alert>
        ) : null}

        <div className="grid gap-2">
          <Label htmlFor="category-name">Name</Label>
          <Input
            id="category-name"
            type="text"
            required
            maxLength={80}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "category-name-error" : undefined}
            {...register("name", {
              onChange: (event) => {
                if (!slug) {
                  generateSlug(event.target.value);
                }
              },
            })}
          />
          {errors.name ? (
            <p id="category-name-error" className="text-sm text-destructive">
              {errors.name.message}
            </p>
          ) : null}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="category-slug">Slug</Label>
          <Input
            id="category-slug"
            type="text"
            required
            maxLength={80}
            aria-invalid={Boolean(errors.slug)}
            aria-describedby={
              errors.slug ? "category-slug-error" : "category-slug-help"
            }
            {...register("slug")}
          />
          <p id="category-slug-help" className="text-xs text-muted-foreground">
            Used in the public URL: /categories/{watch("slug") || "your-slug"}
          </p>
          {errors.slug ? (
            <p id="category-slug-error" className="text-sm text-destructive">
              {errors.slug.message}
            </p>
          ) : null}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="category-description">Description</Label>
          <textarea
            id="category-description"
            rows={5}
            maxLength={500}
            className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 min-h-32 w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:ring-[3px]"
            aria-invalid={Boolean(errors.description)}
            aria-describedby={
              errors.description
                ? "category-description-error"
                : "category-description-help"
            }
            {...register("description")}
          />
          <p
            id="category-description-help"
            className="text-xs text-muted-foreground"
          >
            Optional. Up to 500 characters.
          </p>
          {errors.description ? (
            <p
              id="category-description-error"
              className="text-sm text-destructive"
            >
              {errors.description.message}
            </p>
          ) : null}
        </div>

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md border bg-background px-4 py-2 text-sm font-medium shadow-xs hover:bg-accent hover:text-accent-foreground"
            href="/dashboard/categories"
          >
            Cancel
          </Link>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <LoaderCircle className="animate-spin" aria-hidden="true" />
                Creating category...
              </>
            ) : (
              "Create category"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
