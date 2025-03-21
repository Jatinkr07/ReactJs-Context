import { useCart } from "../CartContext/context/CartContext";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div className="p-4">
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} className="border p-2 m-2">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
