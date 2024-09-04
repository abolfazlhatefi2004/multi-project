import { ReactElement } from "react"
import {CardInfo} from './types/weatherTypes'
import clouds from '../../images/weather/hero/clouds.webp'
import clear from '../../images/weather/hero/clear.webp'
import fog from '../../images/weather/hero/fog.webp'
import drizzle from '../../images/weather/hero/drizzle.webp'
import rain from '../../images/weather/hero/rain.webp'
import sand from '../../images/weather/hero/sand.webp'
import smoke from '../../images/weather/hero/smoke.webp'
import snow from '../../images/weather/hero/snow.webp'
import squall from '../../images/weather/hero/squall.webp'
import sunny from '../../images/weather/hero/sunny.webp'
import thunderstorm from '../../images/weather/hero/thunderstorm.webp'
import imageNotFound from '../../images/weather/hero/imageNotFound.webp'
import WeatherBoxCard from "./WeatherBoxCard"
import useLanguge from "../../hooks/useLanguage"
import  translateWeather  from "./modules/translateWeather"



interface WeatherImageList {
    clear: string,
    clouds: string,
    drizzle: string,
    rain: string,
    fog: string,
    sand: string,
    smoke: string,
    snow: string,
    squall: string,
    sunny: string,
    thunderstorm: string,
    imageNotFound: string,
}
const WeatherImageList: WeatherImageList = {
    clear: clear,
    clouds: clouds,
    drizzle: drizzle,
    rain: rain,
    fog: fog,
    sand: sand,
    smoke: smoke,
    snow: snow,
    squall: squall,
    sunny: sunny,
    thunderstorm: thunderstorm,
    imageNotFound: imageNotFound,
}


interface PropsType {
    weatherBoxText: {
        currentTemp: number,
        currentWeather: string,
        currentDay: string,
        currentTime: string,
        city: string,
        contry: string,
    },
}

const WeatherBox = ({ weatherBoxText }: PropsType): ReactElement => {
    const { isEnglish } = useLanguge()

    const { currentTemp, city, contry, currentTime, currentWeather, currentDay } = weatherBoxText


    // because backend have some error about translating qom
    const translateQomCity = (city: string): string => (city.toLowerCase() === 'قم' && isEnglish) ? 'Qom' : city
    

    interface CardInfoList {
        locAnddegree: CardInfo,
        timeAndWeather: CardInfo
    }
    const CardInfoList: CardInfoList = {
        locAnddegree: {
            top: {
                content: `${currentTemp}°C`,
                classes: 'text-[4.5rem]'
            },
            bottom: {
                content: `${translateQomCity(city)} , ${contry}`,
                classes: 'text-3xl font-bold'
            }
        },
        timeAndWeather: {
            top: {
                content: currentTime,
                classes: 'text-xl'
            },
            bottom: {
                content: `${translateWeather(currentWeather, isEnglish)} , ${currentDay}`,
                classes: 'text-xl font-bold'
            }
        }
    }


    return (
        <section className="w-full h-[55vh] rounded-2xl bg-red-100 bg-cover bg-gray-200 bg-center flex justify-between items-end p-4 capitalize"
            style={{ backgroundImage: `url('${WeatherImageList[`${weatherBoxText.currentWeather.toLocaleLowerCase() as keyof typeof WeatherImageList}`]}')` }}>
            <WeatherBoxCard cardInfo={CardInfoList.locAnddegree} />
            <WeatherBoxCard cardInfo={CardInfoList.timeAndWeather} />
        </section>
    )
}

export default WeatherBox
