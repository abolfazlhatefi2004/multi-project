import { ReactElement } from "react"
import logo from '../../images/logo-project.svg'

interface PropType {
    text: string
}

const Title = ({ text }: PropType): ReactElement => {
    return (
        <h1 className="font-bold text-3xl capitalize flex">
            <img src={logo} alt="the title" />
            <span className="py-2">{text}</span>
        </h1>
    )
}

export default Title
