import React from "react";

import { Link } from "react-router-dom";
//import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "60px",
        justifyContent: "space-around",
      }}
      className={"text-bg-dark p-3"}
    >
      <Link to={"/"} style={{ textDecoration: "none", color: "pink" }}>
        Home
      </Link>
      <Link to={"/About"} style={{ textDecoration: "none", color: "pink" }}>
        About
      </Link>
      <Link to={"/Login"} style={{ textDecoration: "none", color: "pink" }}>
        Login
      </Link>
      <Link to={"/"} style={{ textDecoration: "none", color: "pink" }}>
        Users
      </Link>
    </div>
  );
};

export default Header;
