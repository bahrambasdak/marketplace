import { AddUser, UsersList } from "@/src/features/users";

export default function UsersPage() {
  return (
    <div>
      <h1>Users</h1>
      <UsersList />
      <AddUser />
    </div>
  );
}