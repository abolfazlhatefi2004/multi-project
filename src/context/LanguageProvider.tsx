import { createContext, ReactElement, useState } from "react"


export interface LanguageContextType {
    english: boolean,
    dispatch: React.Dispatch<React.SetStateAction<boolean>>
}

const initialLangugeContext: LanguageContextType = {
    english: true,
    dispatch: () => true
}

const langugeContext = createContext<LanguageContextType>(initialLangugeContext)

interface PropType {
    children: ReactElement | ReactElement[]
}

export const LanguageProvider = ({ children }: PropType) => {
    const [isEnglish, setIsEnglish] = useState(true);

    return (
        <langugeContext.Provider value={{
    english: isEnglish,
    dispatch: setIsEnglish
}}>
            {children}
        </langugeContext.Provider>
    )
}

export default langugeContext
