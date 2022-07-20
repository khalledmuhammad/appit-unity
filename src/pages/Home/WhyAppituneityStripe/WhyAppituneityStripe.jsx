import "./WhyAppituneityStripe.scss";
import FillCard from "./FillCard/FillCard";
import info from "./info/info"

const WhyAppituneityStripe = () => {
    const cardItems = info()
    return (
        <div className="why-appituneity-stripe">
            <div className="main-container">
                <div className="stripe-header">
                    <h2>Why Choose <span>APPITUNITY?</span></h2>
                </div>
                <div className="row row-cols-auto justify-content-center">
                    {cardItems.map((item) => {
                        return (
                            <div className="outline-card-item col" key={item.id}>
                                <FillCard item={item} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default WhyAppituneityStripe;