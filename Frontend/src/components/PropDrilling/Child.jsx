/* eslint-disable react/prop-types */
import Grandchild from "./Grandchild";

function Child({ user }) {
  return <Grandchild user={user} />;
}

export default Child;
