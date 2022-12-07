import { yupResolver } from "@hookform/resolvers/yup";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React from "react";
import { useForm } from "react-hook-form";
import { GreenButton } from "../MaterialComponents/ButtonStyled";
import { CssTextField } from "../MaterialComponents/TextFieldStyled";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import './CreateEventForm.scss'
import { useState } from "react";
import AutocompleteMaterial from "@mui/material/Autocomplete";
import { Autocomplete, useJsApiLoader, useGoogleMap, useLoadScript } from '@react-google-maps/api'
import { useDispatch, useSelector } from "react-redux";
import { addEventAsync } from "../../redux/actions/eventsAction";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useEffect } from "react";


const CreateEventForm = ({ directionRef, setCenter }) => {
  const user = useSelector(store => store.user)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [value, setValue] = useState(dayjs());
  const subRegions = ['Bajo Cauca', 'Magdalena Medio', 'Nordeste', 'Norte', 'Occidente', 'Oriente', 'Suroeste', 'Urabá', 'Valle de Aburrá']


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDZtYLrKeDz6WyW__vTxaVTEaSeusb-hsI',
    libraries: ["places"]
  })

  const onSubmit = (data) => {
    const newDate = `${value.get('month') + 1}/${value.get('date')}/${value.get('year')}`
    const newEvent = {
      name: data.name,
      region: data.region,
      date: newDate,
      ubication: directionRef.current.value,
      organizerName: user.name,
      organizerUid: user.uid,
      organizerPhoto: user.photoURL
    }
    dispatch(addEventAsync(newEvent))
    Swal.fire({
      position: 'bottom-end',
      icon: 'success',
      title: 'Evento creado exitosamente!',
      showConfirmButton: false,
      timer: 1500
    }).finally(
      navigate('/myevents')
    )
  }

  const handleSeeUbication = async () => {
    if (directionRef.current.value === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const geocoder = new google.maps.Geocoder()
    geocoder.geocode({ 'address': directionRef.current.value }, (results, status) => {
      if (status === 'OK') {
        setCenter(results[0].geometry.location)
      }
    })
  }

  return (
    <form className="newEvent" onSubmit={handleSubmit(onSubmit)}>
      <CssTextField
        ref={directionRef}
        label="Nombre del evento"
        type='text'
        placeholder="Nombre del evento"
        variant="standard"
        {...register('name')}
        error={!!errors?.name}
        helperText={errors?.name ? errors.name.message : null}
      />
      <AutocompleteMaterial
        disablePortal
        id="combo-box-demo"
        options={subRegions}
        fullWidth
        renderInput={(params) =>
          <CssTextField
            type='text'
            variant="standard"
            {...register('region')}
            error={!!errors?.region}
            helperText={errors?.region ? errors.region.message : null}
            {...params}
            label="Region"
          />}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          disablePast
          label="Fecha del evento"
          openTo="year"
          value={value}
          minDate={dayjs()}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <CssTextField  {...params} />}
        />
      </LocalizationProvider>
      {
        isLoaded
        && (
          <Autocomplete>
            <input {...register('ubication')} className="newEvent__direction" type="text" ref={directionRef} />
          </Autocomplete>
        )
      }
      <GreenButton onClick={handleSeeUbication} sx={{ width: 'fit-content' }}>Ver Ubicación</GreenButton>
      <GreenButton type="submit">Crear Evento</GreenButton>
    </form>
  )
};

export default CreateEventForm;
