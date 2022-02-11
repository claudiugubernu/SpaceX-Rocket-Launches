import {useEffect, useState} from "react";
import Header from "./components/Header";
//import Launches from "./components/Launches";
import Launch from "./components/Launch";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import FilterOptions from "./components/FilterOptions";
import {Container, Row, Col } from "react-bootstrap";
import HeroImage from "./components/HeroImage";

function App() {
  

  useEffect(() => { 
    launchList();
  }, []);

  const launchList = async () => {
    const requestUrl = "https://api.spacexdata.com/v3/launches";
    const response = await fetch(requestUrl);
    const launchesData = await response.json();
    
    setLaunches(launchesData);
  }

  const [launches, setLaunches] = useState([]);
  const [sortDescending, setSortDescending] = useState(launches);

  return (
    <>  
      <Header />
      <Container fluid className="app-body">
        <FilterOptions 
          setSortDescending={setSortDescending} 
          launchList={launches}/>
        <Container fluid className="launches-wrapper">  
          <Row>
            <Col xs={12} lg={5}>
                <HeroImage />
            </Col>
            <Col xs={12} lg={7}>
              <div className="launch-items">
                {sortDescending.map((launch) => {
                  return <Launch launch={launch} />
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default App;
