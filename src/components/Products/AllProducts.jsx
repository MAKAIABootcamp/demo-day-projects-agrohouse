import React from 'react'
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Card, Button } from 'react-bootstrap';
import './styleProducts.scss'
import imgPrueba from '../Assets/Images/papaya.jpg'
import { height } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAsync } from '../../redux/actions/allProductsAction';
import { useEffect } from 'react';
import { Container } from '@mui/material';

const AllProducts = () => {

  const products = useSelector(store => store.allProducts)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, [])


  return (
    <Container>
      <div className='allProducts'>
        <div className='container'>
          <h2>¡Del campo para todos!</h2>
          <Row className="g-2">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Buscar productos">
                <Form.Control type="text" placeholder="Nombre del producto" />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Selecciona una region"
              >
                <Form.Select aria-label="Selecciona una region">
                  <option>Regiones de Antioquia</option>
                  <option value="1">Suroeste</option>
                  <option value="2">Occidente</option>
                  <option value="3">Norte</option>
                  <option value="4">Valle de Aburrá</option>
                  <option value="5">Bajo Cauca</option>
                  <option value="6">Magdalena Medio</option>
                  <option value="7">Nordeste</option>
                  <option value="8">Oriente</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
        </div>

        <div className='container_cards1'>
          {
            products.map((product, index) =>
              <Card key={index} className="text-center" style={{ width: '15rem' }} border="success">
                <Card.Img style={{ width: '14rem', height: '12rem' }} variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title className="fs-4">{product.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">-{product.quantity}-</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">{product.type}</Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">{product.region}</Card.Subtitle>
                  <Card.Text className={`text-center text-success fs-4 fw-bold`}>
                    ${product.price}
                  </Card.Text>
                  <Button variant="outline-success"
                  >Detalles
                  </Button>
                </Card.Body>
              </Card>
            )
          }
        </div>
      </div>
    </Container>
  )
}

export default AllProducts;