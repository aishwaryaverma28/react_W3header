import React, { Component } from "react";

class RightComp extends Component {
  render() {
    return (
      <>
        <div className="right_side">
          <i class="fa-solid fa-circle-half-stroke"></i>
          <i class="fa-solid fa-earth-americas"></i>
          <i class="fa-solid fa-magnifying-glass"></i>
          <button className="pro right_btn">Pro</button>
          <button className="certified right_btn">Get Certified</button>
          <button className="Website right_btn">Create Website</button>
          <button className="log_in right_btn">Log in</button>
        </div>
      </>
    );
  }
}

export default RightComp;