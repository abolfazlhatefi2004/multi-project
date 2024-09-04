import { ReactElement } from "react"
import { InfoCardData } from './types/weatherTypes'


interface PropsType {
    infoCardData: InfoCardData
}

const WeatherInfoCard = ({ infoCardData }: PropsType): ReactElement => {
    return (
        <div className="rounded-xl border border-gray-400 shadow dark:bg-gray-950 dark:border-gray-800 flex gap-2">
            <div className="w-[35%] flex justify-center items-center">
             <img src={infoCardData.imageSrc} alt={infoCardData.title} className="w-[55%]"/>   
            </div>
            <div className="w-[50%] capitalize flex flex-col justify-center">
                <h3 className="font-bold text-2xl mb-0.5">{infoCardData.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 rtl:text-right ltr:text-left" dir="ltr">{infoCardData.data}</p>
            </div>
        </div>
    )
}

export default WeatherInfoCard
