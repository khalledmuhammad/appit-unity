import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import {IndustryMenu} from "./info/MenuLinks"
import {Link} from "react-router-dom"
import "./Navbar.scss";

import logoImage from "../../assets/images/logo-white-01.svg";
import MenuItem from "./MenuItem/MenuItem";
const Navbar = () => {
  const [menuIsOpened, setMenuIsOpened] = useState(undefined);
  const [SkillsMenu, setSkillsMenu] = useState(false);
  const [industryMenu, setIndustryMenu] = useState(false);

  const navbarRef = useRef(null);
  useEffect(() => {
    document.addEventListener("click", onClickNavbarOutside, false);
    return () => {
      document.removeEventListener("click", onClickNavbarOutside, false);
    };
  }, []);

  const onClickNavbarOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setMenuIsOpened(undefined);
      setSkillsMenu(false);
      setIndustryMenu(false);
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light main-container" 
      ref={navbarRef}
    >
      <div className="navbar-content">
        <a className="navbar-brand" to="/">
          <img src={logoImage} alt="Appituneity Logo" />
        </a>
        <div className="toggler-container d-lg-none ">
          <button
            onClick={() => setMenuIsOpened(!menuIsOpened)}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={menuIsOpened ? faXmark : faBars} />
          </button>
        </div>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="#"
                onClick={() => {
                  setSkillsMenu(!SkillsMenu);
                  setIndustryMenu(false);
                }}
              >
                Skills
              </Link>
              {<MenuItem className={SkillsMenu ? "open" : "close"}  /> }
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="#"
                onClick={() => {
                  setIndustryMenu(!industryMenu);
                  setSkillsMenu(false);
                }}
                
              >
                Industries
              </Link>
              {
               
                <div className={industryMenu ? "industryMenu openIndMenu" : " industryMenu closeIndMenu"}>  
              {
                IndustryMenu.map((item, index) =>{
                    return <div key={index} className="industryMenuItem">
                       <Link key={index} to={item.path}>{item.name}</Link>
                        <hr />
                    </div>
                })
              }
                </div>
              }
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                We Are Hiring
              </Link>
            </li>
          </ul>
        </div>
      </div>
      { 
      menuIsOpened && <div className="mobileNav">
        hi
      </div>
         
      }
    </nav>
  );
};
export default Navbar;
