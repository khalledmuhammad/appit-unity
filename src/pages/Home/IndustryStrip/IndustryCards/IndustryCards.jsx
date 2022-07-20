import { useState ,useEffect} from 'react';
import "./IndustryCards.scss";
import iconRightArrow from './right-arrow.svg';
import iconMore from './more.svg';

const IndustryCards = ({ item }) => {
    
    const [expand, setExpand] = useState(false);
    useEffect(() => {
        // Update the document title using the browser API
        // Optimizing Performance by Skipping Effects
        // https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
      });
    
    return (
        <div  onClick={() => setExpand(!expand)} className={`industryCard-out ${expand ? 'openInd' : 'closeInd'}`}>
            <div className='envelopFlex'>
            <div className='envelopFlex-right'>
                    <div className='circleCont'>

                    </div>
                </div>
                <div className='envelopFlex-left'>
                        <h3 className="circleshape">{item.question} </h3>
                    <div className='indust-downContain'>
                        <p className="indust-answer">{item.answer}</p>
                    </div>
                </div>

            </div>
            <div className='overlay-layer'>
                <div className='overlayFlex'>
                    <div className='overlayFlex-down'>
                        
                        <div className='contact-us-container icon-word-container'>
                                <a> Contact Us
                                    <div className='contact-us'>
                                    <img src={iconRightArrow} alt='arrow icon'/>
                                    </div>
                                </a>
                        </div>
                        
                        <div className='readMore-container icon-word-container'>
                                <a> Read more
                                <div className='readMore'>
                                <img src={iconMore} alt='more icon'/>
                                </div>
                            </a>
                        </div>

                    </div>
                
                </div>
            </div>
         </div>
        
    )
}
export default IndustryCards;