import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import style from "./MPFeedback.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import loadingGear from "../views/img/Spin-1s-200px.gif"

const MPFeedback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.login.id);
  const shippingAddressId = useSelector((state) => state.addressSelected.id)

  const paymentMethodId = 1 // de momento queda en 1 porque este componente se renderiza desde MercadoPago -> al implementar PayPal tendremos que ver qué implementamos;
  const [loading, setLoading] = useState(true)

  const queryParams = new URLSearchParams(location.search);

  const [purchaseCartId, setPurchaseCartId] = useState('');
  const [trolley, setTrolley] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      try {
        let purchaseCartId = await dispatch(actions.getLastPuchasteCart(userId));
        let trolley = await dispatch(actions.getProductsInCart(purchaseCartId));

        setPurchaseCartId(purchaseCartId);
        setTrolley(trolley)

        if (shippingAddressId) setLoading(false);

      } catch (error) {
        console.log('Error buscando la información', error)
      }
    }

    getInfo()
  }, [dispatch, userId]);

  useEffect(() => {
    const exitStock = () => {
      trolley.forEach((product) => {
        const productId = product.id;
        const quantity = product.quantity;
        dispatch(actions.registerStockExit(productId, quantity)); // Registramos la salida del stock
        const newStock = product.stock - quantity; // Calculamos el nuevo stock después de la compra
        dispatch(actions.updateProductStock(productId, newStock)); // Actualizamos el stock en el estado global
      });
    };

    const calculateTotal = () => {
      let suma = 0;
      trolley.forEach((product) => {
        suma = suma + product.product.price * product.quantity;
      });
      suma = parseFloat(suma.toFixed(2));
      return suma;
    };

    // para que se eliminen los productos en el carrito que acaba de ser pagado, se modifique el stock y se cree la orden de compra en la base de datos
    const axnsFinales = () => {
      try {
        // calculo el total de la compra
        const total = calculateTotal();

        // se crea la orden de compra en la base de datos
        dispatch(actions.addPurchaseOrder(userId, purchaseCartId, shippingAddressId, paymentMethodId, total))

        // registra la salida del Stock -> esto sí ocurre exitosamente
        exitStock();

        // elimina el carrito del estado de redux 
        dispatch(actions.deleteTrolley())
      }
      catch (error) {
        console.log('Error al realizar las axnsFinales', error)
      }
    }

    if (!loading && trolley?.length > 0 && userId && purchaseCartId && shippingAddressId) {
      axnsFinales();
    }
  }, [dispatch, loading, purchaseCartId, shippingAddressId, trolley, userId]);

  return (
    <div className={style.containerFeedback}>
      {
        loading ? <div> <img src={loadingGear} alt='Loading resources' /> </div>

          : <div>
            <h1>Detalle del pago</h1>
            <ul>
              <li>ID de pago: {queryParams.get("payment_id")}</li>
              <li>Forma de pago: {queryParams.get("payment_type")}</li>
              <li>Estado: {queryParams.get("status")}</li>
              <li>Numero de orden: {queryParams.get("merchant_order_id")}</li>

            </ul>
            <button className={style.backHome} onClick={() => navigate("/home")}>Volver al Home</button>
          </div>
      }
    </div>
  );
};

export default MPFeedback;
