import React from "react";
import { useSelector } from "react-redux";
import PrivateNavbar from "./Private/PrivateNavbar";
import PublicNavbar from "./Public/PublicNavbar";
import { Store } from "@reduxjs/toolkit";
const Navbar = () => {
  const users = useSelector(state => state?.users);

  const { userAuth } = users;
  return <Provider>{userAuth ? <PrivateNavbar /> : <PublicNavbar />}</Provider>;
};

export default Navbar;