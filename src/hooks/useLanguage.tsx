import { useContext } from "react"
import langugeContext from "../context/LanguageProvider"
import { LanguageContextType } from "../context/LanguageProvider"


const useLanguge = (): LanguageContextType => {
  return useContext(langugeContext)
}

export default useLanguge
