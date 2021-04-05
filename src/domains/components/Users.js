import React from "react";

import { useUsers } from "../Services/usersApi";
import { CardUser } from "./CardUser";

export const Users = () => {
  const { loading, data: users, error } = useUsers();

  if (loading) return <div>Loading</div>;
  if (error) return <div>{error?.message || "Failed to fetch users..."}</div>;

  return (
    <div className="users-container">
      {users.map((user) => (
        <CardUser {...user}  key={user.id}/>
      ))}
    </div>
  );
};