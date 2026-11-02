import { getUsers } from "../actions";

export async function UsersList() {

    const users =  await getUsers();
    if (!users) {
        return <div>No users found</div>;
    }
  return (
    <div>
      <h1>Users List</h1>
      {users && users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
}