import { useState ,useEffect} from 'react';
import "./FaqPanel.scss";

const FaqPanel = ({ item }) => {
    
    const [expand, setExpand] = useState(false);
    useEffect(() => {
        // Update the document title using the browser API
        // Optimizing Performance by Skipping Effects
        // https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
      });
    
    return (
        <div  onClick={() => setExpand(!expand)} className={`faq-panel ${expand ? 'open' : 'close'}`}>
            <div className='faq-qus-container'>
                <h3 className="faq-panel-question">{item.question} </h3>
                    <div className="toggler-icon">{expand ? '-' : '+'}</div>
                </div>
            <div className='faq-answer'>
                <p className="faq-panel-answer">{item.answer}</p>
            </div>
         </div>
    )
}
export default FaqPanel;