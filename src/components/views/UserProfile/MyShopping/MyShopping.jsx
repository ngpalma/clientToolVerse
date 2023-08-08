import React, { useEffect, useState } from "react";
import axios from "axios";

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

  return (
    <div>
      <h1>Historial de Compras</h1>
      {purchaseHistory.length > 0 ? (
        <ul>
          {purchaseHistory.map((purchase) => (
            <li key={purchase.id}>
              <p>Compra ID: {purchase.id}</p>
              <p>Fecha: {purchase.createdAt}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay compras registradas</p>
      )}
    </div>
  );
};

export default MyShopping;

