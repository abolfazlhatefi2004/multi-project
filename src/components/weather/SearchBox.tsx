import { ReactElement } from "react"
import { CitisType } from "./types/weatherTypes"


interface PropsType {
    searchBoxText: {
        inpText: string,
        btnText: string,
    },
    langCode: string,
    city: string,
    setCities: React.Dispatch<React.SetStateAction<CitisType>>
    setUrl: React.Dispatch<React.SetStateAction<string>>
}

const SearchBox = ({ searchBoxText, langCode, city, setCities, setUrl }: PropsType): ReactElement => {
    const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;


    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const inp = e.target as HTMLInputElement;
        setCities(prev => {
            return {
                ...prev,
                searchedCity: inp.value.toLowerCase() === 'قم' ? 'qom' : inp.value.toLowerCase()
            }
        })
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => { 
        e.preventDefault()
        setUrl(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=${langCode}&appid=${WEATHER_API_KEY}&&units=metric`)
        setCities(prev => {
            return {
                ...prev,
                searchedCity: ''
            }
        })
    }

    return (
        <form className="w-full flex justify-center items-scratch gap-4" onSubmit={submitHandler}>
            <input type="text" className="w-[40%] lg:w-[25%] rounded-xl p-2 font-normal border border-gray-400 dark:border-gray-800 focus:outline-none focus:ring focus:ring-yellow-500 focus:border-yellow-500  bg-white dark:bg-gray-950 dark:text-white" required placeholder={searchBoxText.inpText} onChange={searchHandler} value={city} />
            <button type="submit" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-yellow-900">{searchBoxText.btnText}</button>
        </form>
    )
}

export default SearchBox
