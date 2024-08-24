import { ReactElement } from "react"

interface PropsType {
    contextText: {
        title: string,
        items: string[],
    }
}

const Descriptions = ({ contextText }: PropsType): ReactElement => {
    return (
        <section className="lg:w-[25%] flex flex-col gap-5 items-start">
            <h3 className="text-2xl font-bold capitalize italic text-gray-200 dark:text-gray-700">{contextText.title}</h3>
            {contextText.items.map((item, index) => {
                return <p className="text-xl font-normal capitalize" key={index}>{item}</p>
            })}
        </section>
    )
}

export default Descriptions
