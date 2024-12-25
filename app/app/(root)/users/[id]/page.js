import { getUser } from "@/app/utils/User";
import Link from "next/link";
function UserPage({ params }) {
  const { id } = params;
  return (
    <div>
      {/* <h2>{user.name}</h2>
      <h3> {user.username}</h3>
      <p>{user.email}</p> */}
      <p>user : {id} </p>
      <Link href={"/users"}>Go back</Link>
    </div>
  );
}
export default UserPage;
