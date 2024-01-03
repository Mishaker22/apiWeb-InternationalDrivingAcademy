import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors, getReviews, newReview } from '../../actions/review_actions';
import { NEW_REVIEW_RESET } from '../../constants/reviews_constant';

export const Comentarios = () => {
  const [comentario, setComentario] = useState('');

  const { loading, reviews, error } = useSelector(state => state.reviews)
  const { error: reviewError, success } = useSelector(state => state.newReview)
  const { user } = useSelector(state => state.auth)

  const alert = useAlert();
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      alert.error(error)
    }
    dispatch(getReviews())

    if (reviewError) {
      alert.error(reviewError)
      dispatch(clearErrors())
    }
    if (success) {
      alert.success("Se publico tu opinion")
      dispatch({ type: NEW_REVIEW_RESET })
      setComentario("")
    }
  }, [dispatch, error, reviewError, success])

  const handleComentarioChange = (event) => {
    const nuevoComentario = event.target.value;
    setComentario(nuevoComentario);
  };

  const reviewHandler = () => {
    const formData = new FormData();

    formData.set('comentario', comentario);

    dispatch(newReview(formData));
  }

  return (
    <Fragment>
      {loading ? <div className='d-flex justify-content-center align-items-center m-5'>
        <h2 className='quantify text-white'> Loading...</h2>
      </div> : (
        <Fragment>
          <div className='fondoReview'>
            <div className='about'>
              <div className='container'>
                <div className='reviews'>
                  <h2 className='heading' id='txtComentario'>Reviews</h2>
                  <div className='divComentar'>
                    {user ?
                      <div className='ContainerOpinion'>
                        <h3>Tu <span>opinion</span> es invaluable para nosotros</h3>
                        <div className='textarea'>
                          <textarea
                            name="mensaje"
                            cols="30"
                            placeholder="Califica tu experiencia"
                            id="comentario"
                            maxLength={170}
                            value={comentario}
                            onChange={handleComentarioChange}
                          ></textarea>
                        </div>
                        <button className="btn my-3 float-right review-btn px-4 text-white"
                          onClick={reviewHandler}
                          disabled={!comentario} >Enviar</button>
                      </div>
                      :
                      <a href="/login">
                        <div className='btn alert alert-danger'>
                          Inicia sesion para poder dejar una calificacion
                        </div>
                      </a>
                    }
                  </div>

                  <div className='reviewsBoxContainer'>
                    {reviews && reviews.map(item => (
                      <div key={item._id} className='reviewBox'>
                        <div className='boxTop'>
                          <div className='profile'>
                            <div className='profile-img'>
                              <img src={item.avatar.url} alt={item && item.nombreCliente} />
                            </div>
                            <div className='nameUser'>
                              <strong>{item.nombreCliente}</strong>

                            </div>

                          </div>
                          <div className='review'>
                            <div class="rating-outer">
                              <div class="rating-inner" style={{ width: `${(item.rating / 5) * 100}%` }}></div>
                            </div>
                          </div>
                        </div>
                        <div className='client-comment'>
                          <p>{item.comentario}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}