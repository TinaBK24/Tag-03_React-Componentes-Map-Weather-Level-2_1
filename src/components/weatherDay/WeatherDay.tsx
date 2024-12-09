import "./WeatherDay.css"
import { IWeatherData } from '../../../interfaces/IWeatherData';

interface IWeatherDayProps {
    weather: IWeatherData
}

const WeatherDay: React.FC<IWeatherDayProps> = (props) => {
    return ( 
        <article className="weatherDay">
            <h2>{props.weather.day}</h2>
            <p>🌡️{props.weather.temperature}°C</p>
            <p>{props.weather.condition}</p>
        </article>
     );
}
 
export default WeatherDay;