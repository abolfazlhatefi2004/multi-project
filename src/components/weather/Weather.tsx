import { ReactElement, useEffect, useState } from "react"
import { ThreeHourForecastData, OpenWeatherResponseType, DaysForecastListData, TextContainer , ConstantTextContainer , CitisType} from './types/weatherTypes'
import translateWeather from './modules/translateWeather'
import SearchBox from "./SearchBox"
import useLanguge from "../../hooks/useLanguage"
import WeatherBox from "./WeatherBox"
import WeatherInfo from "./WeatherInfo"
import DaysForecast from "./DaysForecast"
import useAxios from "../../hooks/useAxios"

const enConstatnMode: ConstantTextContainer = {
  searchBoxText: {
    inpText: 'search location',
    btnText: 'search',
  },
  weatherInfo: {
    sunriseName: 'sunrise',
    sunsetName: 'sunset',
    windName: 'wind',
    humidityName: 'humidity',
    feelsLikeName: 'feels Like',
    visibilityName: 'visibility',
  },
  daysForcast: {
    titile: '5 day forecast'
  },
}
const faConstatnMode: ConstantTextContainer = {
  searchBoxText: {
    inpText: 'شهر را جستجو کنید',
    btnText: 'جستجو',
  },
  weatherInfo: {
    sunriseName: 'طلوع آفتاب',
    sunsetName: 'غروب آفتاب',
    windName: 'سرعت باد',
    humidityName: 'رطوبت',
    feelsLikeName: 'احساس دما',
    visibilityName: 'وسعت دید',
  },
  daysForcast: {
    titile: 'پیش بینی 5 روز آینده'
  },
}


const initialcities: CitisType = {
  searchedCity: '',
  currentCity: 'tehran'
}


const Weather = (): ReactElement => {
  const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const { isEnglish, langCode } = useLanguge()
  const [textContainer, setTextContainer] = useState<TextContainer | {}>({})
  const [cities, setCities] = useState<CitisType>(initialcities)
  const [url, setUrl] = useState<string>(`https://api.openweathermap.org/data/2.5/forecast?q=${cities.currentCity}&lang=${langCode}&appid=${WEATHER_API_KEY}&units=metric`)
  const [data, isLoading, fetchError] = useAxios(`${url}`)

  const constantTextContainer: ConstantTextContainer = isEnglish ? enConstatnMode : faConstatnMode

  useEffect(() => {

    const success = (position: GeolocationPosition) => {
      const lat: number = position.coords.latitude
      const lon: number = position.coords.longitude
      setUrl(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=${langCode}&appid=${WEATHER_API_KEY}&units=metric`)
    }

    const reject = () => {
      setUrl(`https://api.openweathermap.org/data/2.5/forecast?q=${cities.currentCity}&lang=${langCode}&appid=${WEATHER_API_KEY}&units=metric`)
    }
    navigator.geolocation.getCurrentPosition(success, reject)

  }, [])

  useEffect(() => {
    setUrl(`https://api.openweathermap.org/data/2.5/forecast?q=${cities.currentCity}&lang=${langCode}&appid=${WEATHER_API_KEY}&units=metric`)
  }, [isEnglish])

  useEffect(() => {
    if (isLoading || fetchError) return


    function formatAMPM(date: Date): string {
      let hours: number | string = date.getHours();
      let minutes: number | string = date.getMinutes();
      let second: number | string = date.getSeconds();
      let ampm: string = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      second = second < 10 ? '0' + second : second;
      var strTime = `${hours}:${minutes}:${second}  ${ampm}`
      return strTime;
    }
    function setDayfullName(numOfDay: number): string {
      if (isEnglish) {
        switch (numOfDay) {
          case 1:
            return 'Monday'

          case 2:
            return 'Tuesday'

          case 3:
            return 'Wednesday'

          case 4:
            return 'Thursday'

          case 5:
            return 'Friday'
          case 6:
            return 'Saturday '

          default:
            return 'Sunday'
        }
      }

      switch (numOfDay) {
        case 1:
          return 'دوشنبه'

        case 2:
          return 'سه شنبه'

        case 3:
          return 'چهارشنبه'

        case 4:
          return 'پنجشنبه'

        case 5:
          return 'جمعه'
        case 6:
          return 'شنبه '

        default:
          return 'یکشنبه'
      }
    }
    function unixTimeCalculator(unixNum: number): Date {
      const date = new Date(unixNum * 1000)
      return date
    }

    const response = data as OpenWeatherResponseType



    const currentWeather: ThreeHourForecastData = response.list[0]

    const createdaysForcastList: DaysForecastListData[] = response.list.map(item => {
      return {
        date: item.dt_txt.slice(0, 9),
        time: item.dt_txt.slice(11, item.dt_txt.length),
        degree: `${item.main.temp}°C`,
        weather: translateWeather(item.weather[0].main, isEnglish),
      }
    })

    setTextContainer(() => {
      return {
        searchBoxText: {
          inpText: constantTextContainer.searchBoxText.inpText,
          btnText: constantTextContainer.searchBoxText.btnText,
        },
        weatherBox: {
          currentTemp: currentWeather.main.temp,
          currentWeather: currentWeather.weather[0].main,
          currentDay: `${setDayfullName(unixTimeCalculator(currentWeather.dt).getUTCDay())}`,
          currentTime: `${formatAMPM(unixTimeCalculator(currentWeather.dt - response.city.timezone / 2.49))}`,
          city: response.city.name,
          contry: response.city.country,
        },
        weatherInfo: {
          sunrise: {
            name: constantTextContainer.weatherInfo.sunriseName,
            value: unixTimeCalculator(response.city.sunrise + response.city.timezone).toUTCString().slice(17, 22)
          },
          sunset: {
            name: constantTextContainer.weatherInfo.sunsetName,
            value: unixTimeCalculator(response.city.sunset + response.city.timezone).toUTCString().slice(17, 22)
          },
          wind: {
            name: constantTextContainer.weatherInfo.windName,
            value: currentWeather.wind.speed
          },
          humidity: {
            name: constantTextContainer.weatherInfo.humidityName,
            value: currentWeather.main.humidity
          },
          feelsLike: {
            name: constantTextContainer.weatherInfo.feelsLikeName,
            value: currentWeather.main.feels_like
          },
          visibility: {
            name: constantTextContainer.weatherInfo.visibilityName,
            value: currentWeather.visibility
          },
        },
        daysForcast: {
          titile: constantTextContainer.daysForcast.titile,
          daysForcastList: createdaysForcastList
        }
      }
    })
    setCities(prev => {
      return {
        ...prev,
        currentCity: response.city.name
      }
    })

  }, [data, url, isEnglish])



  const errorContent = (
    <main className="container h-screen dark:text-white py-6">
      <h3 className="font-bold text-3xl capitalize">{fetchError}</h3>
    </main>
  )

  const content = Object.keys(textContainer).length === 0 ? errorContent : (
    <main className="container lg:h-[110vh] dark:text-white py-6 flex flex-col gap-7">
      <SearchBox searchBoxText={(textContainer as TextContainer).searchBoxText} langCode={langCode} city={cities.searchedCity} setCities={setCities} setUrl={setUrl} />
      <WeatherBox weatherBoxText={(textContainer as TextContainer).weatherBox} />
      <div className="w-full h-[90vh] lg:h-[50%] flex flex-col lg:flex-row gap-4 lg:gap-0  justify-around lg:justify-between flex-wrap">
        <WeatherInfo weatherInfoText={(textContainer as TextContainer).weatherInfo} />
        <DaysForecast daysForecastText={(textContainer as TextContainer).daysForcast} />
      </div>
    </main>
  )



  return content
}

export default Weather

