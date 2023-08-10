import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./MyShopping.module.css"; 

const MyShopping = () => {
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  useEffect(() => {
    axios
      .get("/purchaseOrder")
      .then((response) => {
        setPurchaseHistory(response.data);
      })
      .catch((error) => {
        console.log("Error al obtener el historial de compras:", error);
      });
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <div className={styles.title}>
      <h1>Historial de Compras</h1>
      </div>
      <div className={styles.purchaseContainer}>
        {purchaseHistory.length > 0 ? (
          purchaseHistory.map((purchase) => (
            <div className={styles.purchaseItem} key={purchase.id}>
              <p><b>Compra ID: </b> {purchase.id}</p>
              <p><b>Fecha: </b> {formatDate(purchase.createdAt)}</p>
              <p><b>Total: </b> {purchase.total}</p>
            </div>
          ))
        ) : (
          <p>No hay compras registradas</p>
        )}
      </div>
    </div>
  );
};

export default MyShopping;
