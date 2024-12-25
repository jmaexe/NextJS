import Link from "next/link";

function UsersPage({ users }) {
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

export const getStaticProps = async () => {
  const { users } = await import("../../data/users.json");
  return { props: { users } };
};
