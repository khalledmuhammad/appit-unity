import "./OurServicesStripe.scss";
import info from './info/info'
import AppCard from "./AppCardServices/AppCard";
import { useState  } from "react";


const OurServicesStripe = () => {
    const [ShowMore, setShowMore] = useState(true);
   
    const handleShowMore = () => {

        setShowMore(!ShowMore)
    }
    let contentNo = ShowMore ? 4 : 8
    const cardItems = info()
    return (
        <div className="our-services-stripe">
            <div className="main-container">
                <div className="stripe-header">
                    <h2>Offshore Software Development & IT Outsourcing Services</h2>
                </div>
                <div className="app-card-container">
                    {cardItems.slice(0, contentNo).map((item) => {
                        return (
                            <div className="app-card-item ">
                                <AppCard className="card-theme"  item={item} key={item.id} limit={175} mode="horizontal" />
                            </div>
                        )

                    })}
                    <span className={`view-more-button ${ShowMore ? 'click-more' : 'click-less'}`}  > 
                    <span className="btn-text-container" onClick={handleShowMore} > 
                    <span className="btn-text"  >{ShowMore ? "More" : "Less"}</span>

                    </span>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default OurServicesStripe;