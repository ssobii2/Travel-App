/* eslint-disable */

import logoImg from "./images/nav-icon.png"

const Navbar = () => {
    return ( 
        <div className="nav-container">
            <img className="nav-logo" src={require=(logoImg)} alt="alt"/>
            <h3>my travel journal.</h3>
        </div>
    );
}
 
export default Navbar;