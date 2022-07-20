import "./DedicatedTeamsStripe.scss";
import OutlineCard from "./OutlineCard/OutlineCard";
import info from './info/info'
const DedicatedTeamsStripe = () => {
    const cardItems = info()
    return (
        <div className="dedicated-teams-stripe">
            <div className="main-container">
                <div className="stripe-header">
                    <h2>{cardItems.stripTitle}</h2>
                </div>
                <div className="row row-cols-auto justify-content-center">
                    {cardItems.cards.map((item) => {
                        return (
                            <div className="outline-card-item col" key={item.id}>
                                <OutlineCard item={item} />
                            </div>
                        )
                    })}
                </div>
                <div className="row row-cols-auto justify-content-center">
                    <div className="col">
                        <p className="footer-desc">{cardItems.footerDescription} </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default DedicatedTeamsStripe;