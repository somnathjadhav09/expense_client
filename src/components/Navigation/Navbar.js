import React from "react";
import { Provider, useSelector } from "react-redux";
import PrivateNavbar from "./Private/PrivateNavbar";
import PublicNavbar from "./Public/PublicNavbar";
import store from './../../redux/store/store';

const Navbar = () => {
 
  const userLogin = useSelector(state => state?.users?.userAuth);
  console.log(userLogin);
  return <Provider>{userLogin ? <PrivateNavbar /> : <PublicNavbar />}</Provider>;

};

export default Navbar;