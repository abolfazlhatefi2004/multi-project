import { ReactElement } from "react"
import {DaysForecastListData} from "./types/weatherTypes"


interface PropsType {
    daysForecastCardData: DaysForecastListData
}

const DaysForecastCard = ({ daysForecastCardData }: PropsType): ReactElement => {
    return (
        <>
            <div className="w-full h-[45%] rounded-xl border border-gray-400 dark:border-gray-800 shadow dark:bg-gray-950 py-6 px-10 flex justify-between capitalize" dir="ltr">
                <div className="text-lg text-gray-700 dark:text-gray-100">
                    <p>{daysForecastCardData.date}</p>
                    <p>{daysForecastCardData.time}</p>
                </div>
                <div className="text-gray-500 dark:text-gray-400 flex flex-col gap-2 text-md">
                    <p>{daysForecastCardData.degree}</p>
                    <p>{daysForecastCardData.weather}</p>
                </div>
            </div>
            <hr className="w-full my-3 border border-gray-300 dark:border-gray-700" />
        </>
    )
}

export default DaysForecastCard
