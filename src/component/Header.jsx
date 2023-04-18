import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";
import {Home ,User, Archive, Smile} from "react-feather";

const Header = () => {


    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li className="nav-item"><Link to="/" ><FontAwesomeIcon icon={ faMugHot} /><span>Home</span></Link></li>
                        <li className="nav-item"><Link to="/about" ><Smile /><span>About</span></Link></li>
                        <li className="nav-item"><Link to="/project" ><Archive /><span>Project</span></Link></li>
                        <li className="nav-item"><Link to="/contact" ><User /><span>Contact</span></Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;