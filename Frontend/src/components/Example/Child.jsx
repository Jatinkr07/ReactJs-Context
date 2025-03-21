import GrandChild from "./GrandChild";

/* eslint-disable react/prop-types */
const Child = ({ user }) => {
  return (
    <div>
      <GrandChild user={user} />
    </div>
  );
};

export default Child;
