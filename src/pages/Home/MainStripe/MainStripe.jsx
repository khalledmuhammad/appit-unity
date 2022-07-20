import "./MainStripe.scss";
import AppCard from "./AppCard/AppCard";
import logoImage from "../../../assets/images/logo-colorful.svg"
import info from "./info/MainStripInfo.jsx"; 
import logoWhite from "../../../assets/images/logo-white.svg"
import APPITUNITYwriten from "../../../assets/images/APPITUITY.svg"
import { act } from "@testing-library/react";
import './wordsStyle.scss'
// import video1 from "../../../assets/vid/APPITUNEITY SOFTWARE DEVELOPMENT COMPANY.mp4"

const MainStripe = () => {
    const cardItems = info()

    return (
        <div className="main-stripe">

            <div className="main-container">
                <div className="main-container_flex">
                    <div className="info-item">

                        <h1 className="main-header">We Know what you are looking for!!</h1>
                        <p className="brief">We have +10 years experience working in Europe</p>
                        <button className="mainintro-button" type="button">Click Me!</button>
                    </div>
                    <div className="app-card-container ">
                        <div className="app-card-left">
                            <div className="card-shape-top">
                            <img src={logoWhite} alt="Appituneity Logo" />
                            <img src={APPITUNITYwriten} alt="Appituneity Logo" />

                            </div>

                            <div className="card-shape-bottom">
                                <span>Contact Us</span>
                            </div>
                        </div>
                        <div className="app-card-right">
                            {cardItems.map((item) => {
                                return <AppCard className={'card-theme-' + item.id} item={item} key={item.id} mode="vertical" />
                            })}

                        </div>

                    </div>
                </div>
            </div>
   
            <div className="main-container2">
                <div className=" main-stripe-footer">
  
                    <div className="brief-highlight">

                        <h2>
                            We have a <span className="mainstrip-talented">
                                talented
                                </span> team of professional web <span className="mainstrip-designers">
                                designers,
                                    </span> frontend and backend 
                                    <span className="mainstrip-developers">
                                    developers,
                                        </span> and project managers worked in a harmonious manner To achieve the 
                                        <span className="mainstrip-best">
                                        best results
                                        </span> 
                                          on your bussiness at a resonable cost.
                        </h2>
                    </div>
                    <div className="brief-para">
                        <p>
                            Our team works in an agile/Scrum methodolgy, so every detail of your requirements is recorded in the user story, and implementation priorities are determined according to the priorities of your work, and this is discussed at each product cycle, which means we will achieve everything you looking forward to it with the highest quality standards.
                        </p>
                    </div>
                </div>
                                        


            </div>
            
            <div className="London-photo-logo-container">
    
            <div className="London-photo">
            </div>
            <div className="logo-flex"> 
                <div className="imgholder">
                 <img src={logoImage} alt="Appituneity Logo" />
                 </div>
                </div>
            </div>

        </div>
    )
}

export default MainStripe;