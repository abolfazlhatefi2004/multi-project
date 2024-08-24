import { ReactElement, useState } from "react"
import { useSwiper } from 'swiper/react';


interface BtnClasses {
    active: string,
    disabled: string
}
const btnClasses: BtnClasses = {
    active: ' text-gray-900 dark:text-white',
    disabled: ' text-gray-300 dark:text-gray-500',
}

const SliderBtn = (): ReactElement => {
    const [render, setRender] = useState<boolean>(true);
    const swiper = useSwiper();
 

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        const btn = e.target as HTMLButtonElement;
        btn.dataset.btn === 'left' ? swiper.slidePrev() : swiper.slideNext();
        setRender(prev => !prev);
        console.log(render);
    } 

    return (
        <div className="lg:block hidden absolute left-0 bottom-0 text-5xl flex ltr:flex-row rtl:flex-row-reverse z-50">
            <button onClick={clickHandler} disabled={swiper.isBeginning} data-btn="left">
                <i className={`bx bx-left-arrow-circle pointer-events-none transiton duration-500 
            ${swiper.isBeginning ? btnClasses.disabled : btnClasses.active}`}></i>
            </button>
            <button onClick={clickHandler} disabled={swiper.isEnd} data-btn="right">
                <i className={`bx bx-right-arrow-circle pointer-events-none transiton duration-500 
            ${swiper.isEnd ? btnClasses.disabled : btnClasses.active}`} ></i>
            </button>
        </div>
    )
}

export default SliderBtn
