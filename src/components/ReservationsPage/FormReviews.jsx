import { useForm } from "react-hook-form"
import useCrud from "../../hooks/useCrud"
import './Styles/FormReviews.css'
import { useEffect } from "react"

const FormReviews = ({ reserveSelected, setReserveSelected, reserveReviews, setReserveReviews }) => {

    const { handleSubmit, register, reset } = useForm()
    // console.log(reserveSelected?.hotel.name);
   
    const [, , createReview] = useCrud()

    const submit = data => {
        const obj = {
            ...data,
            hotelId: reserveSelected?.hotelId,
            rating: +data.rating
        }
        createReview('/reviews', obj)
        reset({
            rating: "5",
            comment: ''
        })
        setReserveSelected()
        setReserveReviews(true)
    };

    const handleClose = () => {
        setReserveReviews(true)
        reset({
            rating: "5",
            comment: ''
        })
    };
   
    const handleKeyPress = (event) => {
        if (event.key === 'Escape') {
          handleClose();
        }
      };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
          };
    }, []);
    
    return (
        <div className={`formReviews ${reserveReviews && 'formReviews--close'}`}>
            <div className="formReviews__container">
                <form className="formReviews__form" onSubmit={handleSubmit(submit)}>
                    <h2 className="formReviews__title">{reserveSelected?.hotel.name}</h2>
                    <span onClick={handleClose} className="formReviews__close">X</span>
                    <label className="formReviews__label">
                        <span className="formReviews__rating">Rating</span>
                        <select className="formReviews__select" {...register('rating')}>
                            <option className="formReviews__option" value="5">⭐⭐⭐⭐⭐</option>
                            <option className="formReviews__option" value="4">⭐⭐⭐⭐</option>
                            <option className="formReviews__option" value="3">⭐⭐⭐</option>
                            <option className="formReviews__option" value="2">⭐⭐</option>
                            <option className="formReviews__option" value="1">⭐</option>
                        </select>
                    </label>
                    <label className="formReviews__label">
                        <span className="formReviews__comments">Comments</span>
                        <textarea className="formReviews__textarea" {...register(('comment'))} />
                    </label>
                    <button className="formReviews__button">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default FormReviews