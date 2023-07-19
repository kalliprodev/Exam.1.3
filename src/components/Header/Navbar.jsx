import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { MdFoodBank } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { useSidebarContext } from "../../context/sidebarContext";
// import { Button } from 'antd';
// import { UseSelector } from 'react-redux/es/hooks/useSelector';

const Navbar = () => {
  const { openSidebar } = useSidebarContext();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 60) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={`navbar bg-white flex   align-center ${
        scrolled ? "scrolled" : ""
      }`}>
      <div className="container w-100 ">
        <div className="navbar-content text-white">
          <div className="brand-and-toggler ">
            <Link to="/" className="navbar-brand fw-3 fs-22 flex align-center">
              <MdFoodBank />
              <span className="navbar-brand-text fw-7 text-black font-semibold flex align-center ">
                <i className="fas fa-shopping-basket text-orange"></i>Food
              </span>

              <nav className="navList text-gray  ">
                <ul className="nav_list flex align-center justify-between ">
                  <li className="nav_item  flex align-center justify-between ">
                    <Link to="/" className="nav_link">
                      Home
                    </Link>
                  </li>

                  <li className="nav_item">
                    <Link to="/filterArea/Italian" className="nav_link">
                      Italian
                    </Link>
                  </li>

                  <li className="nav_item">
                    <Link to="filterArea/French" className="nav_link">
                      French
                    </Link>
                  </li>

                  <li className="nav_item">
                    <Link to="filterArea/American" className="nav_link">
                      American
                    </Link>
                  </li>

                  <li className="nav_item">
                    <Link to="filterArea/Kenyan" className="nav_link">
                      Kenyan
                    </Link>
                  </li>

                  <li className="nav_item">
                    <Link to="filterArea/Turkish" className="nav_link">
                      Turkish
                    </Link>
                  </li>
                </ul>
              </nav>
            </Link>
            <div className="navbar-btns flex align-center justify-between">
              <Link to={"/search"}>
                <span className="fas fa-search text-orange"></span>
              </Link>

              <Link to={"/favourites"}>
                <div className="basket-btn text-orange">
                  <span className="fas fa-star"></span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
