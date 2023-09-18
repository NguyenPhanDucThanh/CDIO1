import { UserContext } from "../../../context/userContext";
import { useContext } from "react";
import axios from "axios";
export default function Dashboard() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Dashboard</h1>
      {user && <h1>Hello {user.name} !</h1>}
    </div>
  );
}
