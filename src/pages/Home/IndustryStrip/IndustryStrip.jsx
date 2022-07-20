import "./IndustryStrip.scss";
import IndustryCards from "./IndustryCards/IndustryCards";
import info from './info/info'



const IndustryStrip = () => {
    const indust = info()
    return (
        <div className="industry-strip">
            <div className="industry-main-container">
                <div className="stripe-header">
                    <h2>Bespoke Software Industries</h2>
                </div>
                <div className="industry-flex-container">
                <div className="industry-flex">
                    {indust.map((item) => {
                        return (
                            <div className="industry-item" key={item.id}>
                                <IndustryCards item={item} />
                            </div>
                        )
                    })}
                </div>
                </div>
            </div>
        </div>
    )
}
export default IndustryStrip;