import { Card, CardContent, CardMedia } from "@mui/material";
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

  const handleDetails = () => {
    console.log('click');
  }

  return (
    <>
      {/* <div className='container'>
    <h2 className='h2'>Mis Productos</h2>
    </div> */}

      {
        ownProducts.length !== 0
          ? ownProducts.map((product, index) =>
            <Card key={index} sx={{ width: 250, height: 'fit-content', border: '1px solid #006837' }}>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <div className="card__info">
                  <span>{product.name}</span>
                  <span>Tipo: {product.type}</span>
                  <span>Cantidad: {product.quantity}</span>
                  <span>Region: {product.region}</span>
                  <span>${product.price}</span>
                  <div className="card__buttons">
                    <EditChip onClick={() => handleEdit(product)} label="Editar" />
                    <DeleteChip onClick={() => handleDelete(product)} label="Eliminar" />
                  </div>
                </div>
              </CardContent>
            </Card>

          )
          : <NoData text={'No tienes productos'} />
      }
      <ModalEditProduct open={openEditProduct} setOpen={setOpenEditProduct} product={productToEdit} />


    </>
  )
};

export default Products;
