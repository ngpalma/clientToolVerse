import style from './userDetails.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useNavigate } from 'react-router-dom';
import React from "react";
import CartForm from '../CartForm/cartForm';

export default function UserDetails() {
    // obtiene la información si el usuario ha iniciado sesión
    // si el usuario no ha iniciado sesión, permite que lo haga
    // si el usuario es nuevo permite que coloque sus datos y pueda crear un usuario nuevo

    const actualUser = useSelector(state => state.actualUser)
    const navigate = useNavigate()

    return (
        <div className={style.overallUser}>
            <div className={style.questions}>
                {
                    (!actualUser.hasOwnProperty('firstName')) ? <div className={style.noUser}>
                        <div className={style.msgLogIn}>
                            <div className={style.mje}>
                                Parece que no has iniciado sesión.
                            </div>
                            <button className={style.logOn} onClick={() => navigate('/login')}> Inicia Sesión </button>
                        </div>
                        <div className={style.msgRegister}>
                            <div className={style.mje}>
                                Si te registras, tus datos serán guardados para que la próxima ocasión todo sea más ágil
                            </div>
                            <button className={style.register} onClick={() => navigate('/form')}> Registro </button>
                        </div>
                    </div>

                        : <div className={style.userDetails}>
                            <CartForm />
                        </div>

                }
            </div>
        </div>

    )
}