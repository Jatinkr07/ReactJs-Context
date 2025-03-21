// import Counter from "./components/Counter";

import Child from "./components/Example/Child";

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

// import Parent from "./components/PropSol/Parent";
// import UserContext from "./components/context/Context";

// const userData = {
//   name: "Jack Doe",
//   age: 28,
//   email: "john.doe@example.com",
// };

// function App() {
//   return (
//     <UserContext.Provider value={userData}>
//       <Parent />
//     </UserContext.Provider>
//   );
// }

// export default App;

// const App = () => {
//   const userInfo = { name: "Jatin", age: "23", address: "xyz", city: "fbd" };
//   return (
//     <div>
//       <Child user={userInfo} />
//     </div>
//   );
// };

// export default App;

// import { AuthProvider } from "./context/AuthContext";

import { CartProvider } from "./components/CartContext/context/CartContext";
import Navbar from "./components/CartHome/Navbar";
import ProductList from "./components/CartHome/ProductList";
import Cart from "./components/CartHome/Cart";

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <ProductList />
      <Cart />
    </CartProvider>
  );
};

export default App;
