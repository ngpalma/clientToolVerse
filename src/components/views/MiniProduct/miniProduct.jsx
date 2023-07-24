import style from './miniProduct.module.css';
import bin from '../img/bin.png';
import mas from '../img/mas.png';
import menos from '../img/menos.png';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import * as actions from "../../../redux/actions";


const MiniProduct = ({ id, image, name, model, brand, price, quantity, feature }) => {
    const tools = useSelector((state) => state.allTools)
    const product = tools.find((item) => item.id === id)
    const stock = product.stock
    const dispatch = useDispatch();

    // Estado local para ver el stock moverse en vivo
    const [localStock, setLocalStock] = useState(stock - quantity);

    // Borra el Producto por completo
    const handleDelete = (id) => {
        dispatch(actions.removeFromCart(id));
    };

    // Quantity del Producto - 1 -> Stock + 1
    const handleLess = (id) => {
        dispatch(actions.lessFromCart(id));
        setLocalStock(localStock + 1)
    }

    // Quantity del Producto + 1 -> Stock - 1 / SOLO SI LA QUANTITY ES 5 O MENOS
    const handleAdd = (id, image, name, model, brand, feature, price, quantity) => {
        if (quantity < 5) {
            let product = {
                id, image, name, model, brand, feature, price, quantity
            }
            dispatch(actions.addToCart(product));
            setLocalStock(localStock - 1)
        }
        else return
    }

    return (
        <div className={style.divMiniProd} key={id} >
            <div className={style.nameImgMini}>
                <div className={style.nameMiniProd}>{name}</div>
                <img src={image} alt="producto en el carrito" className={style.imgMiniProd} />
            </div>
            <div className={style.brandModelMini}>
                <div className={style.brandMiniProd}>{brand}</div>
                <div className={style.modelMiniProd}>{model}</div>
            </div>
            <div className={style.priceMiniProd}>${price}</div>
            <div className={style.stockMiniProd}>Stock {localStock}</div>
            {
                localStock <= 5 && <p className={style.warning}> Este producto está bajo en stock! Es posible que el envío se retrase</p>
            }
            <div className={style.todoQtity}>
                <div className={style.quantMiniProd}>Quantity {quantity}</div>
                <button className={style.lessQtity} onClick={() => handleLess(id)}>
                    <img src={menos} alt="menos" className={style.menos} />
                </button>
                <button className={style.addQtity} onClick={() => handleAdd(id, image, name, model, brand, feature, price, quantity)}>
                    <img src={mas} alt="mas" className={style.mas} />
                </button>
                <button className={style.deleteProd} onClick={() => handleDelete(id)}>
                    <img src={bin} alt="bin" className={style.bin} />
                </button>
                {
                    quantity >= 5 && <p className={style.warning}> Máx 5 productos por cliente</p>
                }
            </div>
        </div>
    )
};

export default MiniProduct;