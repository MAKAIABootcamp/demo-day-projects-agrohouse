import React from "react";
import Logo from "../Assets/Logo/verdeSinFondo.png"
import './NoData.scss'

const NoData = ({ text }) => {
  return (
    <aside className="noData">
      <img className="noData__logo" src={Logo} alt="AgroHouse Logo" />
      <span>{text}</span>
    </aside>
  )
};

export default NoData;
