import { ReactElement } from "react"
import DaysForecastCard from "./DaysForecastCard"
import {DaysForecastListData} from "./types/weatherTypes"


interface PropsType {
    daysForecastText: {
        titile: string
        daysForcastList: DaysForecastListData[]
      }
}

const DaysForecast = ({daysForecastText}: PropsType): ReactElement => {


    const content = daysForecastText.daysForcastList.map((item, index) => {
        return <DaysForecastCard daysForecastCardData={item} key={index} />
    })


    return (
        <section className="w-full lg:w-[50%] h-[40vh] lg:h-full lg:mt-6">
            <h3 className="font-bold text-3xl mb-1 px-1">{daysForecastText.titile}</h3>
            <div className="w-full h-[84%] border border-gray-400 dark:border-gray-700 rounded-xl dark:border-gray-700  p-[3px] group">
                <div className="w-full h-full p-4 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-w-[8px] scrollbar-thumb-gray-50 dark:scrollbar-thumb-gray-800 scrollbar-track-gray-50 dark:scrollbar-track-gray-800 group-hover:scrollbar-thumb-yellow-500 action:scrollbar-thumb-yellow-600">
                    {content}
                </div>
            </div>
        </section>
    )
}

export default DaysForecast
