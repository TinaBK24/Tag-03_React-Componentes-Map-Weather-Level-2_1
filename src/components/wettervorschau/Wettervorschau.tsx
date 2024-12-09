import "./Wettervorschau.css"
import WeatherData from "../../../weatherData.json"
import WeatherDay from "../weatherDay/WeatherDay";

const Wettervorschau = () => {
    return ( 
        <section>
            <h1>Wettervorschau</h1>
            <div className="flex">
                {WeatherData.map((item, index) => (
                    <WeatherDay key={index} weather={item} />
                ))}
            </div>
        </section>
     );
}
 
export default Wettervorschau;