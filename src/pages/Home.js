import React from "react";
import "./Home.css";
import { Avatar } from "@material-ui/core";
import { Apps } from "@material-ui/icons";
import GoogleLogo from "../assets/logo.png";
import Search from "./Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          <p>About</p>
          <p>Store</p>
        </div>

        <div className="home_headerRight">
          <p>Gmail</p>
          <p>Images</p>
          <Apps />
          <Avatar />
        </div>
      </div>

      <div className="home_body">
        <img src={GoogleLogo} alt="Google Logo" />

        <div className="home_inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
