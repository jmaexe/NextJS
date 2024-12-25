export async function getUsers() {
  const { users } = await import("../data/users.json");
  return users;
}

export async function getUser(id) {
  const users = await getUsers();
  const user = users.find((user) => user.id.toString() === id);
  return user;
}
