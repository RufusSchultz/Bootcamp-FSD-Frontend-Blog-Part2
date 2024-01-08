import "./HomePage.css";
import logo from "../../assets/logo-white.png";

function HomePage() {
    return (
        <div className="page-container">
            <img src={logo} alt="Company logo"/>
            <h2>Bij BlOgventure geloven we in de kracht van woorden!</h2>
        </div>
    )
}

export default HomePage;