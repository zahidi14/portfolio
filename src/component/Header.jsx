import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
const Header = () => {
    const [isResp, setNav] = useState(true);



    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li className="nav-item"><Link to="/" ><FontAwesomeIcon icon="fa-solid fa-house" /><span>Home</span></Link></li>
                        <li className="nav-item"><Link to="/about" ><span>About</span></Link></li>
                        <li className="nav-item"><Link to="/project" ><span>Project</span></Link></li>
                        <li className="nav-item"><Link to="/contact" ><span>Contact</span></Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;