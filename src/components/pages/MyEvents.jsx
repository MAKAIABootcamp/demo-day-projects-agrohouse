import { Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { GreenButton } from "../MaterialComponents/ButtonStyled";
import MyEventsCards from "../MyEvents/MyEventsCards";
import './MyEvents.scss'

const MyEvents = () => {
  const navigate = useNavigate()
  const handleCreateEvent = () => {
    navigate('/createevent')
  }
  return (
    <Container>
      <div className="myEvents">
        <header className="myEvents__head">
          <span className="myEvents__head__tittle">Mis Eventos</span>
          <GreenButton onClick={handleCreateEvent}>Crear Evento</GreenButton>
        </header>
        <main className="myEvents__main">
          <MyEventsCards />
        </main>
      </div>
    </Container>
  )
};

export default MyEvents;
