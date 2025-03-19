// import Counter from "./components/Counter";

// import Card from "./components/Props/Card";

// import Wheather from "./components/Wheather";

// import Fetcher from "./components/Fetcher";
// import Toggler from "./components/Toggler";

// const App = () => {
//   return (
//     <div>
//       {/* <Counter /> */}
//       {/* <Toggler /> */}
//       {/* <Wheather /> */}
//       <Card name="jatin" address="xyz" phno="1234567898" />
//       <Card name="jatin" address="xyz" phno="1234567898" />
//     </div>
//   );
// };

// export default App;

// import Parent from "./components/PropDrilling/Parent";

// const userData = { name: "John Doe", age: 28, email: "john.doe@example.com" };

// function App() {
//   return <Parent user={userData} />;
// }

// export default App;

import Parent from "./components/PropSol/Parent";
import UserContext from "./components/context/Context";

const userData = {
  name: "Jack Doe",
  age: 28,
  email: "john.doe@example.com",
};

function App() {
  return (
    <UserContext.Provider value={userData}>
      <Parent />
    </UserContext.Provider>
  );
}

export default App;
