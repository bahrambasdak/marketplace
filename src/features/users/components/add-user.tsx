"use client";
import { addUser } from "../actions";

export function AddUser() {
  return (
    <div>
      <h1>Add User</h1>
      <form action={addUser} className="flex flex-col gap-2 border p-2">
        <div className="flex gap-2 p-2 border">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>

        <div className="flex gap-2 p-2 border">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="flex gap-2 p-2 border">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        </div>

        <button type="submit" className="border bg-amber-200 cursor-pointer p-2">Add User</button>
      </form>
    </div>
  );
}
