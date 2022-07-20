import "./FooterList.scss";
import { useState } from 'react';


const FooterList = ({item}) => {
    const [expand, setExpand] = useState(false);

    return (
        <li id={item.listTitle} onClick={() => setExpand(!expand)} className={`menu-section ${expand ? 'open-footer': 'close-footer'}`} >
                <a href={`#${item.listTitle}`} className="List-header">
                <i className="icon-expand-footer"></i>
                {item.listTitle}
                </a>
                <div className={`menu-section__sub ${expand ? 'open-footer': 'close-footer'}`} >
                    {item.list.map((ele)=>{return(
                        <a id={`list${ele.id}`} href="#">{ele.title}</a>

                    )})}
                </div>
            </li>
    )
}
export default FooterList;

// <div className="Social-media-container">
// <div className="social-icon-container">

// </div>
// <div className="social-icon-container">

// </div>
// <div className="social-icon-container">

// </div>
// </div>