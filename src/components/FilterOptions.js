//import iconSelect from "../assets/icon/select.png";
import iconSort from "../assets/icon/sort.png"; 
import {Container} from "react-bootstrap";

function FilterOptions({launchList, setSortDescending}) {

    const sortByDescending = () => {
        const sortedDescending = launchList.reverse();
        setSortDescending(sortedDescending);
        console.log(sortedDescending);
    }

    return (
        <Container fluid className="filter-bar">
            <button className="primary-btn" onClick={sortByDescending}>Sort Descending
                <img src={iconSort} className="sort-icon icon" alt="Sort icon"/>
            </button>
        </Container>
    )
}

export default FilterOptions
