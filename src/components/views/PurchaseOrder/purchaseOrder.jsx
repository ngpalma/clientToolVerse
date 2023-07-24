import style from './purchaseOrder.module.css';
import { useSelector } from "react-redux/es/hooks/useSelector";
import mercadoPago from '../img/MercadoPago.jpeg';
import axios from "axios";
import { CheckoutButton } from "../Paypal/CheckoutButton";
import React, { useEffect, useState } from "react";

export default function PurchaseOrder() {
    const trolley = useSelector((state) => state.itemCart);
    const actualUser = useSelector((state) => state.actualUser)
    console.log('estos son los datos del actualUser', actualUser)
    const [total, setTotal] = useState("");

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

    const handleMP = () => {
        axios.post('http://localhost:3001/payment', trolley.map((e) => e)).then((res) => window.location.href = res.data.response.body.init_point)
    }

    return (
        <div className={style.overallCompra}>
            {trolley.length === 0 ? <div>Aún no has hecho ninguna compra </div>
                : <div>
                    <h1 className={style.titulo}>Confirmando Compra:</h1>
                    <div>
                        <div className={style.detallesTotal}>
                            <div className={style.userDetails}>
                                <h4>Envío a:</h4>
                                <div>Nombre: {actualUser.firstName}</div>
                                <div>Apellido: {actualUser.lastName}</div>
                                <div>Email: {actualUser.email}</div>
                                <div>Teléfono: {actualUser.phone}</div>
                                <div>Dirección: {actualUser.address}</div>
                            </div>
                            <div>

                                {
                                    trolley.map((product) => {
                                        return (
                                            <div className={style.prodDetails}>
                                                <div className={style.nameImgMini}>
                                                    <div className={style.nameMiniProd}>{product.name}</div>
                                                    <img src={product.image} alt="producto" className={style.imgProd} />
                                                </div>
                                                <div className={style.brandModelMini}>
                                                    <div className={style.brandMiniProd}>{product.brand}</div>
                                                    <div className={style.modelMiniProd}>{product.model}</div>
                                                </div>
                                                <div className={style.priceMiniProd}>${product.price}</div>
                                                <div>Cantidad: {product.quantity}</div>
                                            </div>
                                        )

                                    })
                                }
                                < h2 className={style.total}> Total: {total}</h2>
                            </div>
                        </div>

                        <h2 className={style.elige}>Elige tu Método de Pago</h2>
                        <div className={style.toPay}>
                            <button onClick={() => handleMP()} className={style.buttonPay}>
                                <img src={mercadoPago} alt="Mercado Pago" className={style.mercadoPago} />
                            </button>

                            <CheckoutButton className={style.buttonPay} />
                        </div>

                    </div>
                </div>
            }
        </div >
    )
}