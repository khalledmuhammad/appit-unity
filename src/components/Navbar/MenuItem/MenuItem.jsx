import React from "react";
import "./MenuItem.scss";
import {Link} from "react-router-dom";
import {Mylinks} from  "../info/MenuLinks"


const MenuItem = ({className}) => {
  return <div className={`menuItem ${className}`}>
    <div className="menuItemContent">
    
   {
      
      Mylinks.map((item, index) => {
        return  <div key={index} className={`${item.Head} submenu`}>
       
          <h3>{item.Head}</h3>
          <span className="title-line"></span>
          {
            item.menuLinks.map((subitem, index) => {
              return <Link key={index} to={subitem.path}>{subitem.name}</Link>
            })
          }
          
          </div>
          })
         
          
      
      }
      </div>

    </div>;
};

export default MenuItem;
