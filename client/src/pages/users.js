import React, { useState, useEffect } from "react";
import { SectionNarrow, Heading1 } from "../styles";
import UserCard from "../components/userCard";
import UserCreateForm from "../components/userCreateForm";
import Login from "../components/login";
import Nav from "../components/nav";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch(
          "https://f41bmwcu05.execute-api.eu-central-1.amazonaws.com/test/users"
        );
        const fetchedUsers = await data.json();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  async function deleteUser(id) {
    const response = await fetch(
      "https://f41bmwcu05.execute-api.eu-central-1.amazonaws.com/test/user",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      }
    );
    const data = await response.json();

    console.log(data);
  }

  return (
    <SectionNarrow>
      <Nav />

      <Heading1>Register User:</Heading1>
      <UserCreateForm />

      <Heading1>Login User:</Heading1>
      <Login />

      <Heading1>Users</Heading1>
      {users.map((user) => {
        return <UserCard user={user} />;
      })}

      <Heading1>Delete User:</Heading1>
      <button onClick={() => deleteUser("user-1")}>Delete</button>
    </SectionNarrow>
  );
}
