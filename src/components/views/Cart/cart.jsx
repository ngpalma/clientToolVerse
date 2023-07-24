import style from './cart.module.css';
import CartDetails from '../CartDetails/cartDetails';
import UserDetails from '../UserDetails/userDetails';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useNavigate } from 'react-router-dom';
import React from "react";

// este componente debería tener:
// un área donde poner ver/poner los datos del usuario
// un área donde ver la info obtenida del carrito de compras 
// un botón para confirmar la compra y habilitar el pago

export default function Cart() {
    const actualUser = useSelector(state => state.login);
    const navigate = useNavigate()

    return (
        <div>
            <div className={style.questions}>
                {
                    (!actualUser.hasOwnProperty('email')) ? <div className={style.noUser}>
                        <div className={style.msgLogIn}>
                            <div className={style.mje}>
                                Parece que no has iniciado sesión.
                            </div>
                            <button className={style.logOn} onClick={() => navigate('/login')}> Inicia Sesión </button>
                        </div>
                        <div className={style.msgRegister}>
                            <div className={style.mje}>
                                No estás registrado aún?
                            </div>
                            <button className={style.register} onClick={() => navigate('/form')}> Registro </button>
                        </div>
                    </div>
                        : <div className={style.userDetails}>
                            <UserDetails />
                            <CartDetails />
                        </div>
                }
            </div>
        </div>
    )
}
