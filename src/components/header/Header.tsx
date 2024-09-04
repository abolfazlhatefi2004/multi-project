import { ReactElement } from "react"
import Title from "./Title"
import Navbar from "./Navbar"
import useLanguge from "../../hooks/useLanguage"


interface ContextText {
  title: string,
  nav: {
    navbar: string,
    navBox: {
      en: string,
      fa: string
    }
  }
}

const enMode: ContextText = {
  title: 'multi project',
  nav: {
    navbar: 'language',
    navBox: {
      en: 'english',
      fa: 'persian'
    }
  }
}

const faMode: ContextText = {
  title: 'مولتی پروژه',
  nav: {
    navbar: 'زبان برنامه',
    navBox: {
      en: 'انگلیسی',
      fa: 'فارسی'
    }
  }
}

const Header = (): ReactElement => {
   const {isEnglish} = useLanguge();

   const contextText = isEnglish ? enMode : faMode;

  return (
    <header className="sticky laft-0 top-0 w-full bg-gradient-to-r from-[#eab308] via-[#ffc210] to-[#fea718] p-2 text-white dark:text-black z-20">
        <div className="container flex justify-between items-center">
            <Title text={contextText.title}/>
            <Navbar ContextText={contextText.nav} />
        </div>
     
    </header>
  )
}

export default Header
