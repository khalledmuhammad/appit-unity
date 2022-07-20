import "./OutlineCard.scss";
const OutlineCard = ({ item, className }) => {

    return (
        <div className={`outline-card ${className}`}>
            <div className="outline-card-img">
                {item.icon && <img src={item.icon} alt={item.title} />}
            </div>
            <div className="outline-card-desc">
                <h2>{item.title}</h2>
            </div>

        </div>
    )
}
export default OutlineCard;