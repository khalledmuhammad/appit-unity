import "./TestimonialStrip.scss";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import info from './info/info'
const TestimonialStrip = () => {
    const cardItems = info()
    return (
        <div className="Testimonial-strip">
            <div className="Testimonial-main-container">
                <div className="strip-header">
                    <h2>{cardItems.stripTitle}</h2>
                </div>
                <div className="cards-container">
                    <div className="bckgrd-color-container">
                        <div className="bckgrd-color"></div>
                    </div>
                    {cardItems.cards.map((item) => {
                        return (
                            <div className="TestimonialCard-item" key={item.id}>
                                <TestimonialCard item={item} />
                            </div>
                        )
                    })}
    
                </div>
            </div>
        </div>

    )
}
export default TestimonialStrip;