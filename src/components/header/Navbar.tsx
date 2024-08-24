import { ReactElement, useState } from "react"
import light from '../../images/light-mode.png'
import dark from '../../images/dark-mode.png'
import LanguageBox from "./LanguageBox";

interface PropType {
    ContextText: {
        navbar: string,
        navBox: {
            en: string,
            fa: string
        }
    }
}

const Navbar = ({ ContextText }: PropType): ReactElement => {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [languageNavShow, setlanguageNavShow] = useState<boolean>(false);


    const darkModeHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault();
        setDarkMode(prev => !prev);
        document.documentElement.classList.toggle('dark')
    }

    return (
        <nav className="flex items-cneter gap-10">
            <button className="font-bold capitalize text-xl" onClick={() => setlanguageNavShow(prev => !prev)}>
                {ContextText.navbar} &#8744;
            </button>
            {languageNavShow && <LanguageBox setlanguageNavShow={setlanguageNavShow} contextText={ContextText.navBox} />}
            <div className="bg-white dark:bg-black rounded p-1 w-12 h-12">
                <button className="w-full h-full border border-yellow-500 rounded flex  items-center justify-center"
                    onClick={darkModeHandler}>
                    <img className="w-[80%] select-none" src={darkMode ? dark : light} alt="mode" />
                </button>
            </div>
        </nav>
    )
}

export default Navbar
