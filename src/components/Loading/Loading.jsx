import { LinearProgress } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Logo from '../Assets/Logo/verdeSinFondo.png'
import './Loading.scss'

const Loading = () => {
  return (
    <Container>
      <div className="loading">
        <aside className="loading__logo">
          <img src={Logo} alt="AgroHouse Logo" />
        </aside>
        <LinearProgress color="success" />
      </div>
    </Container>
  )
};

export default Loading;
