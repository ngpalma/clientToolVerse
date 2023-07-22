import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./Detail.module.css";
import { addToCart, getToolById } from "../../../redux/actions";

const Detail = () => {
  const products = useSelector((state) => state.toolsDetail);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    try {
      dispatch(getToolById(id));
    } catch (error) {
      console.log("Error al obtener los datos del producto:", error);
    }
  }, [dispatch, id]);

  if (!products) return <div>Esperando carga del producto...</div>;

  return (
    <div className={style.detailContainer}>
      <div className={style.imageContainer}>
        <img src={products.image} alt={products.name} />
      </div>
      <div className={style.infoContainer}>
        <h1>{products.name}</h1>
        <br></br>
        <h3>Marca: {products.brand}</h3>

        <p><b>Modelo:</b> {products.model}</p>

        <div><span className={style.block}><b>Características: </b></span> {products.feature}</div>
        <h4>Precio ${products.price}</h4>
        <br></br>
        <button className={style.addToCart} onClick={() => dispatch(addToCart(products))}><b>Añadir al carrito</b></button>
      </div>
    </div>
  );
};

export default Detail;
