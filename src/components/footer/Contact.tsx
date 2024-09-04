import { ReactElement } from "react"



interface AddresAndClasses {
    address: string,
    class: string
}


const AddresAndClassesList: AddresAndClasses[] = [
    {
        address: 'https://www.instagram.com/abolfazl_hatef_/',
        class: 'bxl-instagram-alt hover:text-fuchsia-700'
    },
    {
        address: 'https://web.telegram.org/k/#@abolfazlhatefi1',
        class: 'bxl-telegram hover:text-blue-700'
    },
    {
        address: 'mailto:abolfazlhatefi2004@gmail.com',
        class: 'bxl-gmail hover:text-emerald-700'
    }
];

interface PropsType {
    title: string
}

const Contact = ({ title }: PropsType): ReactElement => {

    const content: ReactElement[] = AddresAndClassesList.map((item, index) => {
        return (
            <a href={item.address} className="block w-full text-center" key={index}>
                <i className={`bx ${item.class} text-5xl text-gray-400 hover:text-blue-700 transition duration-500`}></i>
            </a>
        )
    });

    return (
        <section className="lg:w-[25%] flex flex-col">
            <h3 className="text-2xl font-bold capitalize mb-5 italic text-black dark:text-white">{title}</h3>
            <div className="w-[50%] lg:w-[35%] flex gap-5 lg:flex-col">
                {content}
            </div>
        </section>
    )
}

export default Contact
