import ButtonAdd from '../../UI/buttonAdd/ButtonAdd'
import ButtonBuy from '../../UI/buttonBuy/ButtonBuy'
import ButtonDiminish from '../../UI/buttonDiminish/buttonDiminish'
import style from './Card.module.scss'
import { useAppDispatch } from '../../app/hooks'
import { increment } from '../../modules/counterSlice' 
import { useState } from 'react'
// import { selectCart } from '../modules/cartSlice'
import { addToCart } from '../../modules/cartSlice'

interface CardProps {
    name: string;
    url: string;
    price: number;
    id: number;
}

export default function Card({name, url, price, id }: CardProps) {
    const [quality, setQuality] = useState<number>(0);
    const dispatch = useAppDispatch();

    const handelInputChange = (event: React.FormEvent<HTMLInputElement>): void => {
        const value: number = parseInt(event.currentTarget.value, 10) || quality;

        setQuality(value);
    }

    function handleSabtractCount() {
        if(quality === 0) {
            return
        }
        setQuality(quality => quality - 1);        
    }

    function handleAddCount() {
        setQuality(quality => quality + 1);        
    }
    
    function handleBuy() {
        dispatch(increment(quality));
        dispatch(addToCart({id: id, quality:quality}))
    }
    
    return (
        <>
            <div className={style['wrapper']}>
                <div className={style['container']}>
                    <div className={style['container__img']}>
                        <img src={url} alt="" />
                    </div>
                    <div className={style['description']}>
                        <h2>{name}</h2>
                        <h3>${price}</h3>
                        <div className={style['description__buttons']}>
                            <div>
                                <ButtonDiminish handleSabtractCount={handleSabtractCount}/>
                                <input type="number"  value={quality} onChange={handelInputChange}/>
                                <ButtonAdd handleAddCount={handleAddCount}/>
                            </div>
                            <ButtonBuy handleBuy={handleBuy}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}