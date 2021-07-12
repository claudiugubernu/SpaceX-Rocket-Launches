import {useEffect, useState} from "react";
import Header from "./components/Header";
import Launches from "./components/Launches";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import {Container} from "react-bootstrap";

function App() {

  const [launchesList, setLaunchList] = useState([]);

  useEffect(()=> {
    async function fetchLaunchList(){
      const requestUrl = "https://api.spacexdata.com/v3/launches";
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      setLaunchList(responseJSON);
    }
    fetchLaunchList();
  }, []);

  return (
    <>  
        <Header />
        <Container fluid className="app-body">
          <Launches launchesList={launchesList} />
      </Container>
    </>
  );
}

export default App;
