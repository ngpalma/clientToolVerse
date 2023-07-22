import style from './cartForm.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import React, { useState } from "react";

export default function CartForm() {
    const actualUser = useSelector(state => state.actualUser)
    const [user, setUser] = useState({
        id: actualUser.id,
        firstName: actualUser.firstName,
        lastName: actualUser.lastName,
        email: actualUser.email,
        phone: actualUser.phone,
        address: actualUser.address
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Información guardada con éxito')
    }

    const handleInputChange = (event) => {
        const { value, name } = event.target;
        setUser({
            ...user,
            [name]: value
        })
        // setErrors(
        //     validate({
        //         ...input,
        //         [name]: value
        //     }, allDogs)
        // )
    };

    return (
        <div className={style.cartForm}>
            <form onSubmit={handleSubmit} className={style.cartForm}>
                <label className={style.labelForm}>Nombre: </label>
                <input type="text" className={style.inputGral} name='firstName' placeholder='Nombre del receptor' onChange={handleInputChange} value={user.firstName} />
                <span>  </span>
                <hr />
                <label className={style.labelForm}>Apellido: </label>
                <input type="text" className={style.inputGral} name='lastName' placeholder='Apellido del receptor' onChange={handleInputChange} value={user.lastName} />
                <span>  </span>
                <hr />
                <label className={style.labelForm}>Dirección postal: </label>
                <input type="text" className={style.inputGral} name='address' placeholder='Dirección postal del receptor' onChange={handleInputChange} value={user.address} />
                <span>  </span>
                <hr />
                <label className={style.labelForm}>Email: </label>
                <input type="text" className={style.inputGral} name='email' placeholder='E-mail del receptor' onChange={handleInputChange} value={user.email} />
                <span>  </span>
                <hr />
                <label className={style.labelForm}>Teléfono: </label>
                <input type="text" className={style.inputGral} name='phone' placeholder='Teléfono del receptor' onChange={handleInputChange} value={user.phone} />
                <span>  </span>
                <hr />
                <div className={style.button}>
                    <input type="submit" value=" Todos los datos son correctos" />
                </div>
            </form>
        </div>
    )
}