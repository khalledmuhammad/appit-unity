import "./How2startStrip.scss";
import How2startCard from "./How2startCard/How2startCard";
import info from './info/info'
const How2startStrip = () => {
    const cardItems = info()
    return (
        <div className="How2start-strip">
            <div className="How2start-main-container">
                <div className="strip-header">
                    <h2>{cardItems.stripTitle}</h2>
                </div>
                <div className="cards-container">
                    <div className="bckrd-color-container">
                        <div className="bckgrd-color"></div>
                    </div>
                    {cardItems.cards.map((item) => {
                        return (
                            <div className="How2startCard-item" key={item.id}>
                                <How2startCard item={item} />
                            </div>
                        )
                    })}
    
                </div>
            </div>
        </div>

    )
}
export default How2startStrip;