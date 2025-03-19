/* eslint-disable react/prop-types */
import Child from "./Child";

function Parent({ user }) {
  return <Child user={user} />;
}

export default Parent;
