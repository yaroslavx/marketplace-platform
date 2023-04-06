import "./navbar.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [menu, setMenu] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => window.removeEventListener("scroll", isActive);
  }, []);

  const currentUser = {
    id: 1,
    username: "NiceMan",
    isSeller: true,
  };
  return (
    <div className={active ? "navbar active" : "navbar"}>
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
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser ? (
            <button>Join</button>
          ) : (
            <div className="user">
              <img
                src="https://images.pexels.com/photos/15636474/pexels-photo-15636474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <span onClick={() => setMenu(() => !open)}>
                {currentUser?.username}
              </span>
              {menu && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <span>Gigs</span>
                      <span>Add new Gig</span>
                    </>
                  )}
                  <span>Orders</span>
                  <span>Messages</span>
                  <span>Log Out</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            <span>Test</span>
            <span>Test1</span>
          </div>
        </>
      )}
    </div>
  );
};
