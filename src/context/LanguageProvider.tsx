import { createContext, ReactElement, useEffect, useState } from "react"


export interface LanguageContextType {
    isEnglish: boolean,
    langCode: string,
    dispatch: React.Dispatch<React.SetStateAction<boolean>>
}

const initialLangugeContext: LanguageContextType = {
    isEnglish: true,
    langCode: 'en',
    dispatch: () => true
}

const langugeContext = createContext<LanguageContextType>(initialLangugeContext)

interface PropType {
    children: ReactElement | ReactElement[]
}

const getIsEnglishStorage = (): boolean => {
    const isEnglishStorage: boolean | null = JSON.parse((localStorage.getItem('isEnglish') as string));
    return isEnglishStorage === null ? true : isEnglishStorage
}

export const LanguageProvider = ({ children }: PropType) => {
    const [isEnglish, setIsEnglish] = useState<boolean>(getIsEnglishStorage());

    useEffect(() => {
        localStorage.setItem('isEnglish', JSON.stringify(isEnglish))
        document.documentElement.dir =  isEnglish ? 'ltr' : 'rtl';
    }, [isEnglish])

    return (
        <langugeContext.Provider value={{
            isEnglish: isEnglish,
            langCode: isEnglish ? 'en' : 'fa',
            dispatch: setIsEnglish
        }}>
            {children}
        </langugeContext.Provider>
    )
}

export default langugeContext
