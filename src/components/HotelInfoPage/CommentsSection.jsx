import { useEffect, useState } from "react"
import useCrud from "../../hooks/useCrud"
import './Styles/CommentsSection.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"

const CommentsSection = ({ hotelId }) => {

  const [reviews, getReviews] = useCrud()

  const [showComment, setShowComment] = useState(false)
  useEffect(() => {
    if (hotelId) {
      getReviews(`/reviews?hotelId=${hotelId}`)
    }
  }, [hotelId])

  const handleComment = () => {
    setShowComment(!showComment)
  }
  // console.log(reviews?.results.length);
  // console.log(reviews?.results[4].user.firstName.slice(0,1).toUpperCase());
  return (
    <div className="commentsSection">
      <div className="commentsSection__containerTitle">
        <h3 className="commentsSection__title">{reviews?.total} {reviews?.total > 1? 'comments':'comment'}</h3>
      </div>
      <div className="commentsSection__container">
        {
          showComment ? reviews.results.map(reviewInfo => (
            <div className="commentsSection__data" key={reviewInfo.id}>

              <div className="commentsSection__containerFirstNameIcon">
                < FontAwesomeIcon icon={faCircleUser} className="commentsSection__icon" />
                <div className="commentsSection__firstNameRating">
                  <div className="commentsSection__firstName">{reviewInfo.user.firstName}</div>
                  <div className="commentsSection__rating">{reviewInfo.rating} ⭐</div>
                </div>
              </div>
              <p className="commentsSection__comment">{reviewInfo.comment}</p>
            </div>
          )) : (
            reviews?.results.slice(0, 4).map(reviewInfo => (
              <div className="commentsSection__data" key={reviewInfo.id}>

                <div className="commentsSection__containerFirstNameIcon">
                  < FontAwesomeIcon icon={faCircleUser} className="commentsSection__icon" />
                  <div className="commentsSection__firstNameRating">
                    <div className="commentsSection__firstName">{reviewInfo.user.firstName}</div>
                    <div className="commentsSection__rating">{reviewInfo.rating} ⭐</div>
                  </div>
                </div>
                <p className="commentsSection__comment">{reviewInfo.comment}</p>
              </div>
            ))
          )

        }
      </div>
      {
        reviews?.results.length > 4 && 
        (
          <div onClick={handleComment} className="commentsSection__button">{showComment ? 'ver menos' : '...ver más'}</div>
        )

      }
    </div>
  )
}

export default CommentsSection
