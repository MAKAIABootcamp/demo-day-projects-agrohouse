import { Container } from "@mui/system";
import { useJsApiLoader } from "@react-google-maps/api";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import CreateEventForm from "../CreateEvent/CreateEventForm";
import Map from "../GoogleMap/Map";
import './CreateEvent.scss'
const CreateEvent = () => {
  const directionRef = useRef()
  const [center, setCenter] = useState({ lat: 6.247501890838772, lng: -75.61209090218722 })

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDZtYLrKeDz6WyW__vTxaVTEaSeusb-hsI',
    libraries: ["places"]
  })

  return (
    <Container>
      <div className="addEvent">
        <header className="addEvent__head">
          <span className="addEvent__head__tittle">Crear Evento</span>
        </header>
        <main className="addEvent__main">
          <aside className="addEvent__main__left">
            <CreateEventForm directionRef={directionRef} setCenter={setCenter} />
          </aside>
          <aside className="addEvent__main__rigth">
            {
              isLoaded &&
              <Map center={center} />
            }
          </aside>
        </main>
      </div>
    </Container>
  )
};

export default CreateEvent;
