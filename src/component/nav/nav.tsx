import React from "react";
import style from "./nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = (): JSX.Element => {
  return (
    <div className={style.nav}>
      <NavLink to="/">홈으로</NavLink>
      <NavLink to="/1">둘으로</NavLink>
      <NavLink to="/2">삼으로</NavLink>
    </div>
  );
};

export default Nav;
