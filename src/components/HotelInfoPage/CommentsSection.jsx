import { useEffect } from "react"
import useCrud from "../../hooks/useCrud"
import './Styles/CommentsSection.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"

const CommentsSection = ({ hotelId }) => {

  const [reviews, getReviews] = useCrud()

  useEffect(() => {
    if (hotelId) {
      getReviews(`/reviews?hotelId=${hotelId}`)
    }
  }, [hotelId])

  console.log(reviews);

  return (
    <div className="commentsSection">
      <div className="commentsSection__containerTitle">
        <h3 className="commentsSection__title">{reviews?.total} Comments</h3>
      </div>
      <div className="commentsSection__container">
        {
          reviews?.results.map(reviewInfo => (
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
        }
      </div>
    </div>
  )
}

export default CommentsSection
