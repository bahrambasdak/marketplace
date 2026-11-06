import { getUsers } from "../actions";

export async function UsersList() {
  const users = await getUsers();
  if (users.length === 0) {
    return <div>No account details found.</div>;
  }
  return (
    <div>
      <h1>Your account</h1>
      {users.map((user) => (
        <div key={user.id} className="flex p-2 border m-2 rounded">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}