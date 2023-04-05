import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <span className="text">MarketPlace</span>
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
    </div>
  );
};
