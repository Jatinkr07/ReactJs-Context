import { useContext } from "react";
import UserContext from "../context/Context";

function TragetData() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>

      <p>Phno: {user.phno}</p>
    </div>
  );
}

export default TragetData;
