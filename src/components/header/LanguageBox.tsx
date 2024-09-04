import { ReactElement } from "react"
import useLanguge from "../../hooks/useLanguage";


type BtnclassesType = {
    active: string,
    passive: string
}
const btnClasses: BtnclassesType = {
    active: "block w-full text-yellow-500 text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-yellow-500 capitalize",
    passive: "block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white capitalize",
}

type PropType = {
    setlanguageNavShow: React.Dispatch<React.SetStateAction<boolean>>
    contextText: {
        en: string,
        fa: string
      }
}

const LanguageBox = ({ setlanguageNavShow, contextText }: PropType): ReactElement => {
    const { isEnglish, dispatch } = useLanguge();

    const languageHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault();
        const btn = e.target as HTMLButtonElement;
        document.documentElement.dir = btn.dataset.lang === 'english' ? 'ltr' : 'rtl';
        dispatch(() => btn.dataset.lang === 'english' ? true : false)
        setlanguageNavShow(false)
    }

    return (
        <div className="w-full h-[95vh] absolute ltr:right-0 rtl:left-0 top-0" onClick={() => setlanguageNavShow(false)}>
            <div id="doubleDropdown" className="z-10 fixed ltr:right-12 rtl:left-48 top-20 border border-gray-300 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                        <button type="button" className={isEnglish ? btnClasses.active : btnClasses.passive} onClick={languageHandler} data-lang="english">
                            {contextText.en}</button>
                    </li>
                    <li>
                        <button type="button" className={isEnglish ? btnClasses.passive : btnClasses.active} onClick={languageHandler} data-lang="persion">
                            {contextText.fa}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LanguageBox
