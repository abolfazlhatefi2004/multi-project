// weather file
export interface ThreeHourForecastData {
    dt: number,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        sea_level: number,
        grnd_level: number,
        humidity: number,
        temp_kf: number
    },
    weather: [
        {
            id: number,
            main: string,
            description: string,
            icon: string
        }
    ],
    clouds: {
        all: number
    },
    wind: {
        speed: number,
        deg: number,
        gust: number
    },
    visibility: number,
    pop: number,
    sys: {
        pod: string
    },
    dt_txt: string
}

export interface OpenWeatherResponseType {
    cod: string,
    message: number | string,
    cnt: number,
    list: ThreeHourForecastData[],
    city: {
        id: number,
        name: string,
        coord: {
            lat: number,
            lon: number,
        },
        country: string,
        population: number,
        timezone: number,
        sunrise: number,
        sunset: number,
    }
}

export interface DaysForecastListData {
    date: string,
    time: string,
    degree: string,
    weather: string,
}

export interface TextContainer {
    searchBoxText: {
        inpText: string,
        btnText: string,
    },
    weatherBox: {
        currentTemp: number,
        currentWeather: string,
        currentDay: string,
        currentTime: string,
        city: string,
        contry: string,
    },
    weatherInfo: {
        sunrise: { name: string, value: string },
        sunset: { name: string, value: string },
        wind: { name: string, value: number },
        humidity: { name: string, value: number },
        feelsLike: { name: string, value: number },
        visibility: { name: string, value: number },
    },
    daysForcast: {
        titile: string
        daysForcastList: DaysForecastListData[]
    },
}

export interface ConstantTextContainer {
    searchBoxText: {
        inpText: string,
        btnText: string,
    },
    weatherInfo: {
        sunriseName: string,
        sunsetName: string,
        windName: string,
        humidityName: string,
        feelsLikeName: string,
        visibilityName: string,
    },
    daysForcast: {
        titile: string
    },
}

export interface CitisType {
    currentCity: string,
    searchedCity: string,
  }


//  weatherBox
export type CardInfo = {
    top: {
        content: string,
        classes: string
    },
    bottom: {
        content: string,
        classes: string
    }
}

// weatherInfo
export interface InfoCardData {
    imageSrc: string,
    title: string,
    data: string,
}