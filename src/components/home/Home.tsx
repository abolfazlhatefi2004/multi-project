import { ReactElement } from "react";
import { Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "./Card";
import SliderBtn from "./SliderBtn";
import weather from '../../images/weather-image.png';
import xoGame from '../../images/ox-game.png';
import RockSccissersPaper from '../../images/rock-scissers-paper.jpg';
import Calender from '../../images/calender.jpg';
import useLanguge from "../../hooks/useLanguage";




export interface CardData {
  linkAddress: string,
  imageSrc: string,
  title: string,
  btnText: string,
}
type CardIfoContainer = CardData[];

const enMode: CardIfoContainer = [
  {
    linkAddress: 'multi-project/Weather-forecaster',
    imageSrc: weather,
    title: 'Weather forecaster',
    btnText: "visit page",
  },
  {
    linkAddress: '',
    imageSrc: xoGame,
    title: "let's play ox game",
    btnText: "visit page",
  },
  {
    linkAddress: '',
    imageSrc: RockSccissersPaper,
    title: "let's play Rock,scissors,Paper game",
    btnText: "visit page",
  },
  {
    linkAddress: '',
    imageSrc: Calender,
    title: "let's see the analysis of your birth date and life",
    btnText: "visit page",
  },


]

const faMode: CardIfoContainer = [
  {
    linkAddress: '/Weather-forecaster',
    imageSrc: weather,
    title: 'پیش بینی کننده آب و هوا',
    btnText: "بازدید از صفحه",
  },
  {
    linkAddress: '',
    imageSrc: xoGame,
    title: "با هم دوز بازی کنیم!؟",
    btnText: "بازدید از صفحه",
  },
  {
    linkAddress: '',
    imageSrc: RockSccissersPaper,
    title: "باهم سنگ، کاغذ، قیچی بازی کنیم",
    btnText: "بازدید از صفحه",
  },
  {
    linkAddress: '',
    imageSrc: Calender,
    title: "بریم سن و تولدت رو بررسی کنیم",
    btnText: "بازدید از صفحه",
  },
]


const Home = (): ReactElement => {
  const { isEnglish } = useLanguge();

  const cardIfoContainer = isEnglish ? enMode : faMode;

  const generaitCards = cardIfoContainer.map((item, index) => <SwiperSlide key={index}><Card cardIfoContainer={item} /></SwiperSlide>)



  return (
    <div className="block container  lg:h-full md:h-[90%] sm:h-[50%] bg-gray-50 dark:bg-gray-800 relative py-10">
      <Swiper className="block w-full lg:h-[80%] md:h-[80%] sm:h-[60%]" dir="ltr"
        breakpoints={{
          1396: {
            slidesPerView: 2.5,
            spaceBetween: 28
          },
          1140: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          950: {
            slidesPerView: 1.5,
            spaceBetween: 20
          },
          728: {
            slidesPerView: 1.3,
            spaceBetween: 18
          },
          600: {
            slidesPerView: 1,
            spaceBetween: 0
          }
        }}
        modules={[Scrollbar]}
        navigation
        scrollbar={{ draggable: true }}
      >
        {generaitCards}
        <SliderBtn />
      </Swiper>
      
    </div>
  )
}


export default Home
