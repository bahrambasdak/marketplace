import { addUser } from "../actions";
import type { FormEvent } from "react";

export function AddUser() {
  const handleAddUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    await addUser(name, email, password );
  };

  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={handleAddUser}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
