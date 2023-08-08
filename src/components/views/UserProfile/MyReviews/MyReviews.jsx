import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import style from "./MyReviews.module.css";

const MyReviews = ({ user }) => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const products = useSelector((state) => state.allTools);
  const userReviews = user.reviews;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      // Si no está autenticado, redirige a la página de inicio de sesión
      navigate("/login");
      return;
    }
  }, [isAuthenticated, navigate]);

  return (
    <div>
      {userReviews.map((review) => {
        const product = products.find((p) => p.id === review.productId);
        if (!product) {
          return null; // Product details not available
        }
        return (
          <div className={style.divReview} key={review.id}>
            <div>
              <img
                src={product.image}
                alt={product.name}
                className={style.imgProd}
              />
              <div className={style.nameProd}>{product.name}</div>
            </div>
            <div>
              {[1, 2, 3, 4, 5].map((star) => (
                <FontAwesomeIcon
                  key={star}
                  icon={star <= review.score ? solidStar : regularStar}
                />
              ))}
            </div>
            <textarea value={review.comments} disabled />
          </div>
        );
      })}
    </div>
  );
};

export default MyReviews;
