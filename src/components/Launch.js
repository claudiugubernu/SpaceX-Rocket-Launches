function Launch({launch}) {

    return (
        <>      
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
        </>
    )
}

export default Launch;