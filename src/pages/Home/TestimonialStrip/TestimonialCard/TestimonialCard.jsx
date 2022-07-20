import "./TestimonialCard.scss";
const TestimonialCard = ({ item }) => {

    return (
        <div className='TestimonialCard' >

            <div className="TestimonialCard-img-container">
                {item.icon && <img src={item.icon} alt={item.title} />}
            </div>
            <div className="TestimonialCard-info">
                <h2>{item.title}</h2>
                <p>{item.testimonial}</p>
            </div>


        </div>
    )
}
export default TestimonialCard;