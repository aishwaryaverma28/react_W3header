import React, { Component } from "react";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";

class Header extends Component {
  
  render() {
    return (
      <>
        <header className="container">
          <LeftHeader />
          <RightHeader />
        </header>
      </>
    );
  }
}

export default Header;