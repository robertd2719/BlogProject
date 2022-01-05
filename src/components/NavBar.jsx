import {Link} from "react-router-dom";

export default function NavBar(){

    return(
        <>
            <nav>
                <div className="nav__logo">
                    BlogMaker
                </div>
                <div className="nav__links">
                    <Link to="/">BlogList</Link>
                    <Link to="/about">About</Link>
                </div>
            </nav>
        </>
    )
}