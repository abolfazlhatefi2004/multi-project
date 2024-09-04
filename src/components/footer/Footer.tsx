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
    items: ["The Multi Project is a super app that includes several simple and practical projects. The purpose of this project is to help juniors and beginners who want to create sample projects for practice or to add to their resumes. Good luck!"],
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
  const { isEnglish } = useLanguge();

  const contextText: ContextTextType = isEnglish ? enMode : faMode;
  return (
    <footer className="w-full mt-8 dark:bg-gradient-to-r dark:from-[#64748b] dark:via-[#475569] dark:to-[#334155] bg-gradient-to-r from-[#f1f5f9]  via-[#f3f4f6] to-[#f4f4f5] text-gray-800 dark:text-gray-200">
      <div className='container p-[0.7rem] flex justify-around lg:justify-between gap-5 flex-wrap'>
        <Descriptions contextText={contextText.developer} />
        <Contact title={contextText.ContactTitle} />
        <Descriptions contextText={contextText.aboutProjct} />

      </div>
    </footer>
  )
}

export default Footer
