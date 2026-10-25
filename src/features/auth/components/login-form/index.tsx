import { createUser } from "@/src/features/auth/api/user.api";

export function LoginForm() {
  async function loginAction(formData: FormData) {
    "use server";

    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");
    const name = String(formData.get("name") ?? "").trim();

    // if (!email || !password || !name) {
    //   throw new Error("Email, password, and name are required.");
    // }

    await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    });
  }

  return (
    <div>
      <h1>Login</h1>
      <form action={loginAction} className="flex flex-col gap-4">
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
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border border-gray-300 rounded px-4 py-2"
          autoComplete="name"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
