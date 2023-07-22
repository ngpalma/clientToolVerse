import React, { useEffect } from "react";
import styles from "./EditProducts.module.css";
import { getTools } from "../../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const EditProducts = () => {
  const allProducts = useSelector((state) => state.toolsShown);
  console.log(allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getTools());
    } catch (error) {
      console.log("Error al obtener los productos:", error);
    }
  }, [dispatch]);

  return (
    <div>
      <h1 className={styles.title}>EDITAR PRODUCTOS</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Modelo</th>
            <th>Marca</th>
            <th>Precio</th>
            <th>Detalles</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {allProducts.length === 0 ? (
            <tr>
              <td>No hay productos para mostrar</td>
            </tr>
          ) : (
            allProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.model}</td>
                <td>{product.brand}</td>
                <td>{product.price}</td>
                <td>{product.detail}</td>
                <th className={styles.actionsHeader}>
                  <button className={styles.button}>Edit</button>
                  <button className={styles.button}>Cancelar</button>
                  <button className={styles.button}>Aceptar</button>
                </th>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EditProducts;
