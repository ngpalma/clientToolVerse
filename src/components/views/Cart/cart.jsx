import style from './cart.module.css';
import CartDetails from '../CartDetails/cartDetails';
import UserDetails from '../UserDetails/userDetails';

// este componente debería tener:
// un área donde poner ver/poner los datos del usuario
// un área donde ver la info obtenida del carrito de compras 
// un botón para confirmar la compra y habilitar el pago

export default function Cart() {
    return (
        <div>
            <div className={style.userDetails}>
                <UserDetails />
                <CartDetails />
            </div>
        </div>
    )
}
