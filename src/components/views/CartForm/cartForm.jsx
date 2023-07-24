import style from './cartForm.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import React, { useState } from "react";
import * as actions from "../../../redux/actions";
import { useDispatch } from "react-redux";

export default function CartForm() {
    const dispatch = useDispatch();
    const login = useSelector(state => state.login)
    const [user, setUser] = useState({
        id: login.id,
        firstName: login.firstName,
        lastName: login.lastName,
        email: login.email,
        phone: login.phone,
        address: login.address
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(actions.actualUser(user))
        alert('Información guardada con éxito')
    }

    const handleInputChange = (event) => {
        const { value, name } = event.target;
        setUser({
            ...user,
            [name]: value
        })
    };

    return (
        <div className={style.cartForm}>
            <form onSubmit={handleSubmit} className={style.cartForm}>
                <label className={style.labelForm}>Nombre: </label>
                <input type="text" className={style.inputGral} name='firstName' placeholder='Nombre del receptor' onChange={handleInputChange} value={user.firstName} />
                <span>  </span>

                <label className={style.labelForm}>Apellido: </label>
                <input type="text" className={style.inputGral} name='lastName' placeholder='Apellido del receptor' onChange={handleInputChange} value={user.lastName} />
                <span>  </span>

                <label className={style.labelForm}>Dirección postal: </label>
                <input type="text" className={style.inputGral} name='address' placeholder='Dirección postal del receptor' onChange={handleInputChange} value={user.address} />
                <span>  </span>

                <label className={style.labelForm}>Email: </label>
                <input type="text" className={style.inputGral} name='email' placeholder='E-mail del receptor' onChange={handleInputChange} value={user.email} />
                <span>  </span>

                <label className={style.labelForm}>Teléfono: </label>
                <input type="text" className={style.inputGral} name='phone' placeholder='Teléfono del receptor' onChange={handleInputChange} value={user.phone} />
                <span>  </span>

                <div className={style.button}>
                    <input type="submit" value=" Todos los datos son correctos" onClick={handleSubmit} />
                </div>
            </form>
        </div>
    )
}