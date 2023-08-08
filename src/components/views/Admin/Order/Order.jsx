import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../redux/actions";
import Swal from "sweetalert2";
import styles from "./Order.module.css"

const Order = () => {
  const dispatch = useDispatch()
  const trolley = useSelector((state) => state.itemCart);
  const [EditTotal, setEditTotal] = useState({});
console.log(trolley);

  useEffect(()=> {
    try {
      dispatch(addToCart())
    } catch (error) {
      console.log("Error al obetener la Orden", error);
    }
  }, [dispatch])

  const handleEdit = (id, name, brand, model, price, quantity) => {
    setEditTotal ((prev)=> ({
      ...prev, [id]: {
        id,
        name,
        brand,
        model,
        price,
        quantity
      } 
    }))
  }
  const handleSave = async (id) => {
    try {
      const editOrder = EditTotal[id]
      if (editOrder) {
        const {name, brand, model, price, quantity} = editOrder
      }
      await dispatch(addToCart(id))

      setEditTotal((prev)=> {
        const update = {...prev}
        delete update[id]
        return update
      })
      console.log("Edicion OK")
      return new Swal({
        title: "Success",
        text: "Edicion exitosa",
        icon: "success",
        showConfirmButton: false,
        timer: 2000
      });
    } catch (error) {
      console.log("Error to Update", error);
    }
  }
 const handleCancel = (id) => {
  setEditTotal((prev)=> {
    const update = {...prev}
    delete update[id]
    return update
  })
 }
  return (
    <div>
     <table className={styles.table}>
        <thead>
          <tr>
            <th>N° Orden</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Order;