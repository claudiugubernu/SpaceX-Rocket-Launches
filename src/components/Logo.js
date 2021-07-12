import logo from "../assets/img/spacex-logo.png";

const Logo = () => {
    return (
        <div className="logo-wrapper">
            <img src={logo} className="logo" alt="SpaceX Launches Logo"/> 
            <h4>Launches</h4>
        </div>
    )
}

export default Logo
