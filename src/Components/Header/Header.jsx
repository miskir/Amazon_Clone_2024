import React from "react";
import { FaSearch } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { RiArrowDropDownLine } from "react-icons/ri";
import LowerHeader from "./LowerHeader";
import { BiCart } from "react-icons/bi";
const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          <div className={classes.logo__container}>
            {/* logo*/}
            <a href="#">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon logo"
              />
            </a>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Deliverd to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div className={classes.search}>
            {/* Search */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" name="" id="" placeholder="Search product" />
            {/* icon */}
            <FaSearch size={25} />
          </div>
          <div className={classes.order__container}>
            <a className={classes.language}>
              <img
                src="https://pngimg.com/uploads/flags/small/flags_PNG14592.png"
                alt=""
              />
              <select>
                <option value="">EN</option>
              </select>
              {/* <RiArrowDropDownLine /> */}
            </a>
            {/* three components  */}
            <a href="">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </a>
            {/* orders  */}
            <a href="">
              <p>returns</p>
              <span>& Orders</span>
            </a>
            {/* cart  */}
            <a className={classes.cart}>
              {/* icon  */}
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
