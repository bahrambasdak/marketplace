"use client";
import { useActionState } from "react";
import { loginAction } from "../../actions";

export function LoginForm() {
  const initialFormState = { email: "", password: "" };

  const [, formAction, isPending] = useActionState(
    async (currentState: typeof initialFormState, formData: FormData) => {
      const res = await loginAction(formData);
      console.log(res);
      return currentState;
    },
    initialFormState,
  );

  return (
    <div>
      <h1>Login</h1>
      <form action={formAction} className="flex flex-col gap-4">
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="border border-gray-300 rounded px-4 py-2"
          autoComplete="email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border border-gray-300 rounded px-4 py-2"
          autoComplete="current-password"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={isPending}
        >
          {isPending ? "loging......" : "Submit"}
        </button>
      </form>
    </div>
  );
}
