import React from 'react';
import styles from "./PpFeedback.module.css";
import { useNavigate } from "react-router-dom";

const PpFeedback = () => {
  const navigate = useNavigate();
  const paypalResponse = JSON.parse(localStorage.getItem('paypal_response'));
 
  return (
    <div className={styles.containerFeedback}>
      <h1>Detalle de pago</h1>
      <ul>
        <li>ID de pago: {paypalResponse.id}</li>
        <li>Forma de pago: PayPal</li>
        <li>Estado: {paypalResponse.status}</li>
        <li>Numero de orden: {paypalResponse.payer.payer_id}</li>
      </ul>
      <button className={styles.backHome} onClick={() => navigate("/userprofile")}>Ir a tu Cuenta</button>
    </div>
  );
}

export default PpFeedback;



