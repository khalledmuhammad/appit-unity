import "./Footer.scss";
import "./FooterCopyrights.scss"
import info from './info/info'
import { useState } from 'react';
import FooterList from "./FooterList/FooterList";


const Footer = () => {
    const indust = info()
    return (
        <footer  className="footer-menuStrip">
            <div className="footer-menu">
              {indust.map((item) => {
                        return (                        
                           <FooterList item={item} id={item.listTitle}/>
                    )})}
            </div>
            <div className="footerSocialStrip">
                <div className="address-social-container">
                        <div className="address-container">
                            <address>
                                UK, London, RM10 7EJ.
                            </address>
                            <p>
                                info@appitunity.co.uk
                            </p>
                        </div>
                        <div className="address-container">
                        </div>  
                </div>
                <div className="copyrights">
                            <p>
                                &copy; all rights are preserved. rutaul is a registered limited company in the UK 
                            </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;