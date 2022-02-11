import {Container, Row, Col } from "react-bootstrap";
import HeroImage from "./HeroImage";


function Launches({sortedList}) {

    return (
        <>
        <Container fluid className="launches-wrapper">       
            <Row>
                <Col xs={12} lg={5}>
                    <HeroImage />
                </Col>
                <Col xs={12} lg={7}>
                    <div className="launch-items">
                        {sortedList.map(launch=>(
                            <div className="launch-item" key={launch.flight_number}>
                                <div className="item-name">
                                    <h1>#{launch.flight_number}</h1>
                                    <h2>{launch.mission_name}</h2>
                                </div>
                                <div className="item-date-container">
                                    <p>{new Date(launch.launch_date_local).toLocaleDateString("en-GB", {
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric'
                                    })}</p> 
                                    <h3>{launch.rocket.rocket_name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Launches;