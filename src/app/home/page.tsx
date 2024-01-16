/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import React from "react";
import { db } from "~/server/db";
import { User, users } from "~/server/db/schema";
import Calendar from "../_components/Calendar";
import "src/styles/calendar.css";

export default async function page() {
  // const data = await db.select().from(users);
  // const data: User[] = await db.select().from(users);
  const allUsers = await db.select().from(users);

  return (
    <>
      <UserView allUsers={allUsers} />
      <CreateUser />
      <UpdateUser />
      <Calendar />
    </>
  );
}

function Delete({ name }: { name: string }) {
  async function deleteUser() {
    "use server";

    await db.delete(users).where(eq(users.name, name)); // Delete post from DB
    revalidatePath("/home"); // Revalidate page to see changed content

    console.log("Deleted user: ", name);
  }

  return (
    // <button formAction={deleteUser()}>X</button>
    <form action={deleteUser}>
      <button>X</button>
    </form>
  );
}

function UserView({ allUsers }: { allUsers: User[] }) {
  return (
    <>
      <h1>Users</h1>
      <ul>
        {allUsers.map((user) => (
          <li key={user.id}>
            Username: {user.name} {user.email} <Delete name={user.name!} />
          </li>
        ))}
      </ul>
    </>
  );
}

function CreateUser() {
  async function createPostAction(formData: FormData) {
    "use server";

    const name = formData.get("post-name") as string; // Get name from formData
    const email = "abc";
    await db.insert(users).values({ name, email }); // Insert into DB
    revalidatePath("/home"); // Revalidate page to see new content
  }

  return (
    <form action={createPostAction}>
      <h1>Create User</h1>
      <input
        type="text"
        name="post-name"
        className="border-2 border-black p-4 text-xl text-black"
        required
      />
      <button
        type="submit"
        className="ml-4 rounded-xl border bg-white p-4 text-black"
      >
        Submit
      </button>
    </form>
  );
}
function UpdateUser() {
  async function createPostAction(formData: FormData) {
    "use server";

    const oldname = formData.get("old-name") as string; // Get name from formData
    const newName = formData.get("new-name") as string;
    await db
      .update(users)
      .set({ name: newName })
      .where(eq(users.name, oldname));
    revalidatePath("/home");
  }

  return (
    <form action={createPostAction}>
      <h1>Update User</h1>
      <input
        type="text"
        name="old-name"
        className="border-2 border-black p-4 text-xl text-black"
        placeholder="Old Name"
        required
      />
      <input
        type="text"
        name="new-name"
        className="border-2 border-black p-4 text-xl text-black"
        placeholder="New Name"
        required
      />
      <button
        type="submit"
        className="ml-4 rounded-xl border bg-white p-4 text-black"
      >
        Submit
      </button>
    </form>
  );
}
