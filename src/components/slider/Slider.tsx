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
    const [index, setIndex] = useState<number>(0)

    const sliderArray: Array<SliderArray> = [
        {
            id: 0,
            img: 'img/iphone1-fotor-bg-remover-20241109162034.png',
            title: 'The new phones are here take a look.'
        },
        {
            id: 0,
            img: 'img/iPhone-14-Plus.jpg',
            title: 'Think different, everything different.'
        },
        {
            id: 0,
            img: 'img/970743.webp',
            title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        }
    ]


    let advertisement = sliderArray[index];

    let hasPrev = index > 0;
    let hasNext = index < sliderArray.length - 1;

    function HandleClickNext(): void {
        if(hasNext) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }
    
    function HandleClickPrev(): void {
        if(hasPrev) {
            setIndex(index - 1);
        } else {
            setIndex(2);
        }
    }

    function backgroundColor(): string {
        if(index === 0) {
            return '#dce5e2'
        } else if (index === 1) {
            return '#e1e9fc'
        } else {
            return '#eee6fd'
        }
    }

    return (
        <>
            <div className={style['container-Slider']}>
                <div className={style['container__inner']}>
                    <ButtonNext func={HandleClickNext}/>
                    <div className={style['description']} style={{backgroundColor:backgroundColor()}}>
                        <h1>
                            {advertisement.title}
                        </h1>
                    </div>
                    <div className={style['picture']}>
                        <img src={advertisement.img}/>
                    </div>
                    <ButtonPrev func={HandleClickPrev}/>
                </div>
            </div>
        </>
    )
}