import "./DealsStripe.scss";
import info from './info.js'

const DealsStripe = () => {
    const inf = info();
    return (
        <div className="briefStrip">
            <div className="main-container">
                
                <div className="up">
                    <div className="up-left">
                        <h2 className="first-desc">
                        {inf.title}
                           </h2>
                        </div>
                    <div className="up-right">
                        <p className="second-desc">{inf.paragraph}</p></div>
                </div>
                <div className="down">
                    <div className="left">
                        <p className="footer-desc">{inf.tag}</p></div>
                </div>
            </div>
        </div>
    )
}
export default DealsStripe;