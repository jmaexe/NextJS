import Link from "next/link";
function UserPage({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <h3> {user.username}</h3>
      <p>{user.email}</p>
      <Link href={"/users"}>Go back</Link>
    </div>
  );
}
export default UserPage;

export async function getStaticProps({ params }) {
  const { users } = await import("../../data/users.json");
  const user = users.find((user) => user.id.toString() === params.id);
  return { props: { user } };
}

export async function getStaticPaths() {
  const { users } = await import("../../data/users.json");
  const ids = users.map((user) => user.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return { paths, fallback: true };
}
