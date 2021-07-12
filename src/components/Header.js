import Logo from "./Logo";
import ReloadDataButton from "./ReloadDataButton";

const Header = () => {
    return (
        <header>
            <div className="navbar">
                <Logo />
                <ReloadDataButton />
            </div>
        </header>
    )
}

export default Header
