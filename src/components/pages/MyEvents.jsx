import { Container } from "@mui/material";
import React from "react";
import { GreenButton } from "../MaterialComponents/ButtonStyled";
import MyEventsCards from "../MyEvents/MyEventsCards";
import './MyEvents.scss'

const MyEvents = () => {
  return (
    <Container>
      <div className="myEvents">
        <header className="myEvents__head">
          <span className="myEvents__head__tittle">Mis Eventos</span>
          <GreenButton>Crear Evento</GreenButton>
        </header>
        <main className="myEvents__main">
          <MyEventsCards />
        </main>
      </div>
    </Container>
  )
};

export default MyEvents;
