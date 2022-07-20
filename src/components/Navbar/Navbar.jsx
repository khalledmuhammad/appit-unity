
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import "./Navbar.scss";

import logoImage from "../../assets/images/logo-white-01.svg"
const Navbar = () => {
    const [menuIsOpened, setMenuIsOpened] = useState(undefined);
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
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light main-container" ref={navbarRef}>
            <div className="navbar-content">
                <a className="navbar-brand" href="/">
                    <img src={logoImage} alt="Appituneity Logo" />
                </a>
                <div className="toggler-container d-lg-none">
                    <button onClick={() => setMenuIsOpened(!menuIsOpened)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={menuIsOpened ? faXmark : faBars} />
                    </button>
                </div>
                <div className={`collapse navbar-collapse ${menuIsOpened ? 'menu-is-opened' : menuIsOpened === false ? 'menu-is-closed' : ''}`} id="navbarSupportedContent" >
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Industries</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">We Are Hiring</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}
export default Navbar;