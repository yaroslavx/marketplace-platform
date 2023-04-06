import "src/components/Navbar/navbar.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [menu, setMenu] = useState(false);

  const { pathname } = useLocation();

  const currentUser = {
    id: 1,
    username: "NiceMan",
    isSeller: true,
  };

  useEffect(() => {
    const anchor = document.getElementById("anchor");
    const observer = new IntersectionObserver(([entry]) => {
      setActive(!entry.isIntersecting);
    });

    if (anchor) {
      observer.observe(anchor);
    }

    return () => {
      if (anchor) {
        observer.unobserve(anchor);
      }
    };
  }, []);

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            <span className="text">MarketPlace</span>
          </NavLink>
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
              <span onClick={() => setMenu(() => !menu)}>
                {currentUser?.username}
              </span>
              {menu && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <NavLink to="/gigs">Gigs</NavLink>
                      <NavLink to="/add">Add new Gig</NavLink>
                    </>
                  )}
                  <NavLink to="/orders">Orders</NavLink>
                  <NavLink to="/messages">Messages</NavLink>
                  <NavLink to="/messages/:id">Log Out</NavLink>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <NavLink className="menuLink" to="/">
              Graphics & Design
            </NavLink>
            <NavLink className="menuLink" to="/">
              Video & Animation
            </NavLink>
            <NavLink className="menuLink" to="/">
              Writing & Translation
            </NavLink>
            <NavLink className="menuLink" to="/">
              AI Services
            </NavLink>
            <NavLink className="menuLink" to="/">
              Digital Marketing
            </NavLink>
            <NavLink className="menuLink" to="/">
              Music & Audio
            </NavLink>
            <NavLink className="menuLink" to="/">
              Programming & Tech
            </NavLink>
            <NavLink className="menuLink" to="/">
              Business
            </NavLink>
            <NavLink className="menuLink" to="/">
              Lifestyle
            </NavLink>
          </div>
          <hr />
        </>
      )}
    </div>
  );
};
