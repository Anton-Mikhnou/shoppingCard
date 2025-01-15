import style from './Slider.module.scss'
import ButtonNext from '../../UI/buttonNext/ButtonNext'
import ButtonPrev from '../../UI/buttonPrev/ButtonPrev'
import { useState } from 'react'

interface SliderArray {
    id: number,
    img: string,
    title: string
}

export default function Slider() {
    const [index, setIndex] = useState<number>(0);

    const sliderArray: Array<SliderArray> = [
        {
            id: 0,
            img: 'img/iphone1-fotor-bg-remover-20241109162034.png',
            title: 'The new phones are here take a look.'
        },
        {
            id: 1,
            img: 'img/iPhone-14-Plus.jpg',
            title: 'Think different, everything different.'
        },
        {
            id: 2,
            img: 'img/970743.webp',
            title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        }
    ]

    const hasPrev = index > 0;
    const hasNext = index < sliderArray.length - 1;

    function HandleClickNext(): void {
        if(hasNext) {
            setIndex((index) => (index + 1) % sliderArray.length);
        } else {
            setIndex(0);
        }
    }
    
    function HandleClickPrev(): void {
        if(hasPrev) {
            setIndex((index) => (index - 1) % sliderArray.length);
        } else {
            setIndex(2);
        }
    }

    function backgroundColor(): string {
        if(index === 0) {
            return '#dce5e2';
        } else if (index === 1) {
            return '#e1e9fc';
        } else {
            return '#eee6fd';
        }
    }

    function buttonColor(key:number): string {
        if(key === index) {
            return 'white';
        } else {
            return 'black';
        }
    }

    return (
        <>
            <div className={style['container-Slider']}>
                <div className={style['container__inner']}>
                    {sliderArray.map((slider) => {
                        return (
                            <div key={slider.id} className={style['slider-content']} style={{ transform: `translateX(-${index * 100}%)`}}>
                                <div className={style['description']} style={{backgroundColor: backgroundColor()}}>
                                    <h1>
                                        {slider.title}
                                    </h1>
                                </div>
                                <div className={style['picture']}>
                                    <img src={slider.img}/>
                                </div>
                            </div>
                        )
                    })}
                    <div className={style['slider__control']}>
                        <ButtonPrev handlePrev={HandleClickPrev}/>
                        <ButtonNext handleNext={HandleClickNext}/>
                    </div>
                    <div className={style['button-container']}>
                        <button key={0} onClick={() => setIndex(0)} style={{backgroundColor: buttonColor(0)}}></button>
                        <button key={1} onClick={() => setIndex(1)} style={{backgroundColor: buttonColor(1)}} ></button>
                        <button key={2} onClick={() => setIndex(2)} style={{backgroundColor: buttonColor(2)}}></button>
                    </div>
                </div>
            </div>
        </>
    )
}