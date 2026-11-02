import { AddUser, UsersList } from "@/src/features/users";

export default function UsersPage() {
  return (
    <div className="flex flex-col gap-2">
      <h1>Users</h1>
      <UsersList />
      <AddUser />
    </div>
  );
}