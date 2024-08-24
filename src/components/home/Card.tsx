import { Link } from 'react-router-dom'
import { CardData } from './Home'
import { ReactElement } from 'react'
import useLanguge from '../../hooks/useLanguage'



interface PropsType {
    cardIfoContainer: CardData,
}

const Card = ({ cardIfoContainer }: PropsType): ReactElement => {
    const {english} = useLanguge()
    return (
        <Link to='/' className='md:w-[500px] w-[300px] h-[95%]  p-10 border border-gray-100 dark:border-black rounded-2xl shadow-xl dark:shadow-dxl bg-white dark:bg-gray-900 dark:text-white group relative flex flex-col justify-between' 
        dir={english ? 'ltr' : 'rtl'}>
            <div className='w-full h-full scale-0 bg-gradient-to-r from-[#eab308] via-[#ffc210] to-[#fea718] group-hover:scale-100 transition duration-300 origin-bottom-left absolute right-0 top-0 rounded-2xl'></div>
            <div className='z-10'>
                <img src={cardIfoContainer.imageSrc} alt="weather predicting picture" className='block w-[95%] rounded-xl' />
                <h3 className='font-bold text-3xl capitalize py-5'>{cardIfoContainer.title}</h3>
            </div>
            <button className='text-left z-10'>{cardIfoContainer.btnText} ...</button>
        </Link>
    )
}

export default Card
