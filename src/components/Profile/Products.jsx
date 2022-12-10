//import { Card, CardContent, CardMedia } from "@mui/material";
import {Card} from 'react-bootstrap';
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { getOwnProductsAsync } from "../../redux/actions/allProductsAction";
import { deleteProductAsync } from "../../redux/actions/productAction";
import { DeleteChip, EditChip } from "../MaterialComponents/ChipsStyled";
import ModalEditProduct from "./ModalEditProduct";
import './Products.scss'
import NoData from "../noData/NoData";

const Products = () => {
  const { uid } = useSelector(store => store.user)
  const dispatch = useDispatch()
  const ownProducts = useSelector(store => store.allProducts)
  const [productToEdit, setProductToEdit] = useState()
  const [openEditProduct, setOpenEditProduct] = useState(false)

  useEffect(() => {
    dispatch(getOwnProductsAsync(uid))
  }, []);

  const handleEdit = (product) => {
    setProductToEdit(product)
    setOpenEditProduct(true)
  }

  const handleDelete = ({ id }) => {
    Swal.fire({
      title: '¿Desea eliminar este producto? ',
      text: "Esta acción no es revertible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProductAsync(id))
        Swal.fire(
          'Eliminado!',
          'Este producto ha sido eliminado.',
          'success'
        )
      }
      dispatch(getOwnProductsAsync(uid))
    })
  }

  const handleDetails=()=>{
    console.log('click');
  }

  return (
    <>
    <div className='container'>
    <h2 className='h2'>Mis Productos</h2>
    </div>

      <div className='container_cards'>
      {
        ownProducts.length !== 0
          ? ownProducts.map((product, index) =>
        <Card key={index} className="text-center" style={{ width: '15rem', height:'25rem' }} border="success">
        <Card.Img style={{width: '14rem', height:'12rem'}} variant="top" src={product.image} />
        <Card.Body>
          <Card.Title className="fs-4">{product.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">-{product.quantity}-</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{product.region}</Card.Subtitle>
          <Card.Text className={`text-center text-success fs-4 fw-bold`}>
            ${product.price}
          </Card.Text>
        <div className="card__buttons">
            <EditChip onClick={() => handleEdit(product)} label="Editar" />
            <DeleteChip onClick={() => handleDelete(product)} label="Eliminar" />
        </div>
        </Card.Body>
      </Card>

      )
          : <NoData text={'No tienes productos'} />
      }
      <ModalEditProduct open={openEditProduct} setOpen={setOpenEditProduct} product={productToEdit} />
      
      </div>

    </>
  )
};

export default Products;
