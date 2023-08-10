import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "./Detail.module.css";
import { addToCart, getToolById } from "../../../redux/actions";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import ReviewPage from "../../Review/ReviewPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Detail = () => {
  const products = useSelector((state) => state.toolsDetail);
  const user = useSelector((state) => state.user);
  const reviews = user?.reviews;
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("reviews del user", reviews);

  useEffect(() => {
    try {
      dispatch(getToolById(id));
    } catch (error) {
      console.log("Error al obtener los datos del producto:", error);
    }
  }, [dispatch, id]);

  if (!products) return <div>Esperando carga del producto...</div>;

  const findReview = reviews.find(
    (review) => review.productId === parseInt(id)
  );
  console.log("review encontrada", findReview);

  return (
    <div className={style.detailContainer}>
      <div className={style.imageContainer}>
        <img src={products.image} alt={products.name} />
      </div>
      <div className={style.infoContainer}>
        <h1>{products.name}</h1>
        <br></br>
        <h3>Marca: {products.brand}</h3>

        <p>
          <b>Modelo:</b> {products.model}
        </p>

        <div>
          <span className={style.block}>
            <b>Características: </b>
          </span>{" "}
          {products.feature}
        </div>
        <h4>Precio ${products.price}</h4>
        <br></br>
        <button
          className={style.addToCart}
          onClick={() => dispatch(addToCart(products))}
        >
          <b>Añadir al carrito</b>
        </button>
      </div>

      <div>
        {findReview ? (
          <div>
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <FontAwesomeIcon
                  key={star}
                  icon={star <= findReview.score ? solidStar : regularStar}
                />
              ))}
            </div>
            <textarea value={findReview.comments} disabled />
          </div>
        ) : (
          <ReviewPage productId={id} />
        )}
      </div>
    </div>
  );
};

export default Detail;
