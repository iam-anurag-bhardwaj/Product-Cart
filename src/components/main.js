import { addToCart, clearCart, removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.warn("data in main component ", data);
  const product = {
    name: "Redmi Phone",
    type: "Mobile",
    price: 16000,
    color: "blue",
  };

  return (
    <div className="main">
      <h2>Wellcome Coders,</h2>
      <h3>Here we learn React + Redux + Saga</h3>
      <div>
        <button onClick={() => dispatch(clearCart(product))}>Clear Cart</button>
        <button onClick={() => dispatch(productList(product))}>
          Product List
        </button>
      </div>
      <div className="product-container">
        {data.map((item) => (
          <div className="product-items">
            <div>Id : {item.id}</div>
            <div>Name : {item.name}</div>
            <div>Color : {item.color}</div>
            <div>Price : ₹ {item.price}</div>
            <div>Category : {item.category}</div>
            <div>Brand : {item.brand}</div>
            <button onClick={() => dispatch(addToCart(item))}>
              Add To Cart
            </button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove from Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
