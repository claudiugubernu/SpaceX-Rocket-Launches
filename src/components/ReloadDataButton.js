import icon from "../assets/icon/refresh.png";

const ReloadDataButton = () => {
    function reloadData() {
        window.location.reload()
    }

    return (
            <button className="primary-btn reload-btn" onClick={reloadData}>Reload Data
            <img src={icon} className="refresh-icon icon" alt="Refresh icon"/>
            </button>
        )
}

export default ReloadDataButton
