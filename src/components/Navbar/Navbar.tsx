import "./navbar.scss";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          {/*<Link to="/">*/}
          <span className="text">MarketPlace</span>
          {/*</Link>*/}
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sing in</span>
          <span>Become a Seller</span>
          <button>Join</button>
        </div>
      </div>
      <hr />
      <div className="menu">
        <span>Test</span>
        <span>Test1</span>
      </div>
    </div>
  );
};
