import {useState} from "react"
import "./AppCard.scss";
import { truncate } from '../../../../shared/String';
const AppCard = ({ item, mode, className , limit }) => {

    const [isReadMore , setIsReadMore] = useState(true)
    const handleReadMore = () => {
        
        setIsReadMore(!isReadMore)
    }

    return (
        <div className={` new-app-card ${mode}-card ${className}`}>
            <div className="innerWhite">
            <div className="app-card-icon">
                {item.icon && <img src={item.icon} alt={item.title} />}
            </div>
            <div className="app-card-desc">
                <p>

                <span className="Service-title" itemScope={item.titleSch_itemscope} >{item.title},</span>

                    <span className="">{truncate(item.description, 125)}</span>
                    <span className>{isReadMore ?  truncate(item.description, limit) :item.description   }</span>
                    <span onClick={handleReadMore} >{
                        isReadMore ? " ...Read More" : " Read Less"  
                        }</span>
                </p>
            </div>
        
            
            </div>
        </div>
    )
}
export default AppCard;