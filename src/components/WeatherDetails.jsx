const WeatherDetails = () => {
    return (
        <div className="weather">
            <div className="weatherLeft">
                <h2>22<sup>0</sup></h2>
                <div className="place">
                    <h2>London</h2>
                    <p>sunday, 11:12</p>
                </div>
                <div className="icon">
                    <img src="" alt="" />
                    <p>Sunny</p>
                </div>
            </div>
            <div className="weatherRight">
                <div className="weatherContent">
                    <span>Humidity</span>
                    <span>20%</span>
                </div>
                <div className="weatherContent">
                    <span>Wind</span>
                    <span>20%</span>
                </div>
                <div className="weatherContent">
                    <span>Moisture</span>
                    <span>20%</span>
                </div>
            </div>
        </div>
    )
}

export default WeatherDetails;