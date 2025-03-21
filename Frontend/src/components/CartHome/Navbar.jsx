// import { useAuth } from "../context/AuthContext";
import { useCart } from "../CartContext/context/CartContext";

const Navbar = () => {
  // const { user, login, logout } = useAuth();
  const { cart } = useCart();

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h1>ShopEasy</h1>
      <div>
        {/* {user ? (
          <>
            <span>Welcome, {user.name} | </span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <button onClick={() => login({ name: "John Doe", role: "admin" })}>
            Login
          </button>
        )} */}
        <span className="ml-4">Cart: {cart.length}</span>
      </div>
    </nav>
  );
};

export default Navbar;
