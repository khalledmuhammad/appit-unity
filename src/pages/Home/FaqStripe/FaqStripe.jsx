import "./FaqStripe.scss";
import FaqPanel from "./FaqPanel/FaqPanel";
import info from './info/info'

const FaqStripe = () => {
    const faqs = info()
    return (
        <div className="faq-stripe">
            <div className="main-container">
                <div className="stripe-header">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className="faq-flex">
                    {faqs.map((item) => {
                        return (
                            <div className="faq-item" key={item.id}>
                                <FaqPanel item={item} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default FaqStripe;