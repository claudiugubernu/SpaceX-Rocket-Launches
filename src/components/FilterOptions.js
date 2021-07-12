import iconSelect from "../assets/icon/select.png";
import iconSort from "../assets/icon/sort.png"; 
import {Container} from "react-bootstrap";

function FilterOptions(launchList) {
    function filterBy() {
        console.log(launchList);
        launchList = [].concat(launchList).sort((a, b) => a.launch_year > b.launch_year ? 1 : -1);
        console.log(launchList);
    }
    
    function sortBy() {
        console.log(launchList);
        launchList = [].concat(launchList).sort((a,b) => b.launch_date_local - a.launch_date_local);
        //launchList = [launchList].sort((a,b) => a.launch_date_local > b.launch_date_local ? 1 : -1);
        console.log(launchList);
    }

    return (
        <Container fluid className="filter-bar">
            <button className="primary-btn" onClick={filterBy}>Filter by Year
            <img src={iconSelect} className="select-icon icon" alt="Select icon"/>
            </button>
            <button className="primary-btn" onClick={sortBy}>Sort Descending
            <img src={iconSort} className="sort-icon icon" alt="Sort icon"/>
            </button>
        </Container>
    )
}

export default FilterOptions
