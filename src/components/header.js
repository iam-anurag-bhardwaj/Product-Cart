import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.warn("Redux data", result);
  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo">E-comm</h1>
      </Link>
      <Link to="/cart">
        <div className="cart-div">
          <span>{result.length}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt="Cart"
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;
