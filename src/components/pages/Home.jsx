import { Container } from "@mui/material";
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'; //
import './Home.scss'
import image1 from '../Assets/Images/c1.png';
import image2 from '../Assets/Images/c2.png';
import image3 from '../Assets/Images/c3.png';
import image5 from '../Assets/Images/c5.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/Home.css'
import info1 from '../Assets/Images/info1.png'
import info2 from '../Assets/Images/info2.png'
import info3 from '../Assets/Images/info3.png'
import fav1 from '../Assets/Images/coco.jpg'
import fav2 from '../Assets/Images/coliflor.jpg'
import fav3 from '../Assets/Images/maracuyá.jpg'
import fav4 from '../Assets/Images/papaya.jpg'
import fav5 from '../Assets/Images/arveja.jpg'





const Home = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container maxWidth='fixed'>
      <section className="home">
        <span>
          <Carousel activeIndex={index} onSelect={handleSelect} className='carousel1'>
            <Carousel.Item>
              <img
                className="image "
                src={image5}
                alt="First slide"
              />

              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="image"
                src={image1}
                alt="Second slide"
              />

              <Carousel.Caption className="carousel_title">

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="image"
                src={image2}
                alt="Third slide"
              />


              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="image"
                src={image3}
                alt="Third slide"
              />


              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

        </span>
      </section>


      <section className="container">

        <div className="info">

          <div className="info_cards">
            <img src={info1} alt="info1" />
            <h3 className="text-success">Los intermediarios</h3>
            <p>La distribución de los intermediarios</p>

          </div>

          <div className="info_cards">
            <img src={info2} alt="info2" />
            <h3 className="text-success">La tecnología</h3>
            <p>El papel de la tecnología es fundamental</p>

          </div>

          <div className="info_cards">
            <img src={info3} alt="info3" />
            <h3 className="text-success">El consumidor final </h3>
            <p>El consumidor final es aquel que obtiene el beneficio del producto que adquirió</p>

          </div>

        </div>

      </section>

      <section className="home_cards">
        <h2 className="text-success" >FAVORITOS DEL CAMPO</h2>
        <span>
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-18 m-auto"
                src={fav1}
                alt="Imagen coco"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-18 m-auto"
                src={fav5}
                alt="Imagen arveja"
              />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-18 m-auto"
                src={fav2}
                alt="Imagen Coliflor"
              />

            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-18 m-auto"
                src={fav3}
                alt="Imagen maracuya"
              />

            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-18 m-auto"
                src={fav4}
                alt="Imagen papaya"
              />

            </Carousel.Item>
          </Carousel>
        </span>
      </section>
      <div className='col-sm'>

        <hr />
        <p>
          AGRO<span className='text-success'>HOUSE </span>| Todos los derechos reservados | terminos del servicio | Privado
        </p>

      </div>

    </Container>
  )
};


export default Home;
