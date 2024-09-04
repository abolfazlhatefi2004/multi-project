import { ReactElement } from "react"
import { CardInfo } from './types/weatherTypes'

interface PropsType {
    cardInfo: CardInfo
}

const WeatherBoxCard = ({ cardInfo }: PropsType): ReactElement => {
    return (
        <div className="rounded-2xl p-4 backdrop-blur bg-[rgba(0,0,0,0.17)] font-sembold" dir="ltr">
            <p className={cardInfo.top.classes}>{cardInfo.top.content}</p>
            <p className={cardInfo.bottom.classes}>{cardInfo.bottom.content}</p>
        </div>
    )
}

export default WeatherBoxCard
