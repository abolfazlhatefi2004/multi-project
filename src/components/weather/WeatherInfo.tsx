import { ReactElement } from "react"
import {InfoCardData} from './types/weatherTypes'
import WeatherInfoCard from "./WeatherInfoCard"
import sunriseImg from '../../images/weather/weather/sunrise.svg'
import sunsetImg from '../../images/weather/weather/sunset.svg'
import windImg from '../../images/weather/weather/wind.svg'
import humidityImg from '../../images/weather/weather/humidity.svg'
import feelsLikeImg from '../../images/weather/weather/feels.svg'
import visibilityImg from '../../images/weather/weather/visibility.svg'


interface PropsType {
    weatherInfoText: {
        sunrise: { name: string, value: string },
        sunset: { name: string, value: string },
        wind: { name: string, value: number },
        humidity: { name: string, value: number },
        feelsLike: { name: string, value: number },
        visibility: { name: string, value: number },
    }
}
 
const WeatherInfo = ({ weatherInfoText }: PropsType): ReactElement => {
    const { sunrise, sunset, wind, humidity, feelsLike, visibility } = weatherInfoText


    const infoCardDataList: InfoCardData[] = [
        {
            imageSrc: sunriseImg,
            title: sunrise.name,
            data: `${sunrise.value} AM`,
        },
        {
            imageSrc: sunsetImg,
            title: sunset.name,
            data: `${sunset.value} PM`,
        }, {
            imageSrc: windImg,
            title: wind.name,
            data: `${wind.value} km/h`,
        }, {
            imageSrc: humidityImg,
            title: humidity.name,
            data: `${humidity.value} %`,
        }, {
            imageSrc: feelsLikeImg,
            title: feelsLike.name,
            data: `${feelsLike.value}°C`,
        }, {
            imageSrc: visibilityImg,
            title: visibility.name,
            data: `${visibility.value} km`,
        },
    ]

    const content = infoCardDataList.map((item, index) => {
        return <WeatherInfoCard infoCardData={item} key={index} />

    })

    return (
        <section className="w-full lg:w-[38%]  h-[30vh] lg:h-full grid grid-cols-2 grid-row-3 gap-2">
            {content}
        </section>
    )
}

export default WeatherInfo
