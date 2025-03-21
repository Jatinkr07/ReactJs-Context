/* eslint-disable react/prop-types */
const GrandChild = ({ user }) => {
  return (
    <div>
      <p>grand child</p>
      <p>{user.name}</p>
      <p>{user.age}</p>
    </div>
  );
};

export default GrandChild;
