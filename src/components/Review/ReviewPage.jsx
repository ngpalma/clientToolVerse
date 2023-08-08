import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addReview, updateReviewComments } from '../../redux/actions';
import ReviewForm from './ReviewForm';

const ReviewPage = ({ productId }) => {
  const reviews = useSelector((state) => state.reviews);
  const dispatch = useDispatch();

  // Acceder a la info del usuario
  const user = useSelector((state) => state.login);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  // Verificar que el usuario esté logueado
  if (!isAuthenticated) {
    return <div>Por favor, inicia sesión para realizar una reseña.</div>;
  }

  // Obtener el ID del usuario logueado
  const userId = user.id;

  // Obtener la reseña del usuario para este producto (si existe)
  const userReview = reviews.find((review) => review.productId === productId && review.userId === userId);

  // Verificaar si es la primera reseña del usuario para este producto
  const isFirstReview = !userReview;

  const handleSubmitReview = (newReview) => {
    dispatch(addReview({ ...newReview, userId, productId }));
  };

  const handleUpdateComments = (id, comments) => {
    dispatch(updateReviewComments(id, comments));
  };

  return (
    <div>
      {userReview ? ( // Mostramos la reseña del usuario si ya hizo una para este product
        <div>
          <p>Puntaje: {userReview.score}</p>
          <p>Comentarios: {userReview.comments}</p>
          {isFirstReview && ( // Mostrar botón de actualizar puntaje solo si es la primera reseña
            <button onClick={() => handleUpdateComments(userReview.id, 'Comentario actualizado')}>
              Actualizar comentarios
            </button>
          )}
        </div>
      ) : (
        // Mostrar el formulario para enviar reseñas, si aun no exister una reseña del usuario para este producto
        <ReviewForm productId={productId} onSubmitReview={handleSubmitReview} isFirstReview={isFirstReview} />
      )}
    </div>
  );
};

export default ReviewPage;
