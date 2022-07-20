import "./How2startCard.scss";
import { truncate } from '../../../../shared/String';


const How2startCard = ({ item }) => {
   
    return (
        <div className='How2startCard' >
            <div className="How2startCard-img-container">
                {item.icon && <img src={item.icon} alt={item.title} />}
            </div>
            <div className="How2startCard-info">
                <h2> {    truncate(item.title , 125 ) }   </h2>
                <p className>{ truncate(item.testimonial, 170)   }</p>
                   
            </div>
        </div>
    )
}
export default How2startCard;




  
                  