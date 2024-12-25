import Link from "next/link";
import { getUsers } from "../../utils/User";

async function UsersPage() {
  const users = await getUsers();
  console.log(users);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <h1>UsersPage</h1>
      {users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          {user.name}
        </Link>
      ))}
    </div>
  );
}

export default UsersPage;
