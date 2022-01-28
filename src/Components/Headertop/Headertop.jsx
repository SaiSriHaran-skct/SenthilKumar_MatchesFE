import React from "react";
import "./Headertop.scss";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

function Headertop() {
  return (
    <div className="header_top">
      <div className="details">
        <div className="items">
          <FiPhoneCall /> +91 9443373558
        </div>
        <div className="items">
          <MdOutlineMail /> senthilkumarmw@gmail.com
        </div>
      </div>
    </div>
  );
}

export default Headertop;
