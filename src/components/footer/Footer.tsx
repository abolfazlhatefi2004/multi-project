import { ReactElement } from 'react'
import Descriptions from './Descriptions'
import useLanguge from '../../hooks/useLanguage'
import Contact from './Contact'


type DescriptionType = {
    title: string,
    items: string[],
  }

interface ContextTextType {
  developer: DescriptionType,
  aboutProjct: DescriptionType,
  ContactTitle: string
}

const enMode: ContextTextType = {
  developer: {
    title: 'developers',
    items: ['abolfazl hatefi'],
  },
  aboutProjct:{
    title: 'about multi project',
    items: ["The multi project is a super app that contains some simple and practical projects.The purpose of this project is helping to juniors and beginners that who wants to create a sample project as a practice or for his/her resume, can use these project. good luck"],
  },
  ContactTitle: 'contact us'
}

const faMode: ContextTextType = {
  developer: {
    title: 'توسعه دهندگان',
    items: ['ابوالفضل هاتفی'],
  },
  aboutProjct:{
    title: 'درباره مولتی پروژه',
    items: [
      'مولتی پروژه یک سوپر اپلیکیشن است که شامل چند پروژه ساده می شود. هدف از ساخت این پروژه، کمک به تازه وارد های دنیای برنامه نویسی است. کسانی که به دنبال پروژه برای تمرین یا کامل کردن رزومه خود می گردند، می میتوانند از این پروژه ها استفاده کنند.'
    ],
  },
  ContactTitle: 'ارتباط با ما'

}




const Footer = (): ReactElement => {
  const { english } = useLanguge();

  const contextText: ContextTextType = english ? enMode : faMode;
  return (
    <footer className="w-full mt-8 bg-gradient-to-r from-[#eab308] via-[#ffc210] to-[#fea718] text-white dark:text-black">
      <div className='container p-[1rem] flex justify-around lg:justify-between gap-5 flex-wrap'>
        <Descriptions contextText={contextText.developer} />
        <Contact title={contextText.ContactTitle} />
        <Descriptions contextText={contextText.aboutProjct} />

      </div>
    </footer>
  )
}

export default Footer
