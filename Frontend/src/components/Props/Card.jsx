const Card = ({ name, address, phno }) => {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{address}</h1>
      <h1>{phno}</h1>
    </div>
  );
};

export default Card;
