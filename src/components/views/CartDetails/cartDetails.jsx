import style from "./cartDetails.module.css";
import empty from "../img/emptyTrolley.gif";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import MiniProduct from "../MiniProduct/miniProduct";
import { useDispatch } from "react-redux";
import * as actions from "../../../redux/actions";
import React, { useEffect, useState } from "react";

export default function CartDetails() {
  const trolley = useSelector((state) => state.itemCart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [total, setTotal] = useState("");

  // Registrar Salida del Stock.
  const exitStock = () => {
    trolley.forEach((product) => {
      const productId = product.id;
      const quantity = 1;
      dispatch(actions.registerStockExit(productId, quantity));
    });
  };

  const handleDelete = (id) => {
    dispatch(actions.removeFromCart(id));
  };

  const calculateTotal = () => {
    let suma = 0;
    trolley.forEach((product) => {
      suma = suma + product.price * product.quantity;
    });
    // En este código, usamos toFixed(2) para limitar "suma" a dos dígitos después de la coma decimal. Luego, utilizamos parseFloat() para convertir la cadena resultante nuevamente en un número de punto flotante con dos dígitos después de la coma.
    // Con esta modificación, "suma" tendrá siempre dos dígitos después de la coma decimal al calcular el total en la función calculateTotal().
    suma = parseFloat(suma.toFixed(2));
    return setTotal(suma);
  };

  useEffect(() => {
    try {
      calculateTotal();
    } catch (error) {
      console.log("Error al calcular el total", error);
    }
  });
  return (
    <div className={style.overallDetail}>
      {
        (trolley.length === 0) ? <div className={style.emptyTrolley}>
          <h3>Parece que aún no has colocado nada en la cesta</h3>
          <img src={empty} alt='The trolley is empty' className={style.emptyTrolleyImg} />
          <button className={style.goShopping} onClick={() => navigate('/home')}>Go Shopping</button>
        </div>

          : <div className={style.trolleyFull}>
            {trolley.map((product) => {
              return (
                <MiniProduct
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  model={product.model}
                  brand={product.brand}
                  price={product.price}
                  stock={product.stock}
                  quantity={product.quantity}
                  handleDelete={handleDelete}
                />
              );
            })}
          </div>
      }
      <div>
        <div className={style.summingTotal}>
          <div className={style.total}> Monto total ${total} </div>
          <div className={style.button}>
            <input
              type="submit"
              value="Elige tu Método de Pago"
              onClick={exitStock}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
