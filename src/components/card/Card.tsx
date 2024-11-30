import ButtonAdd from '../../UI/buttonAdd/ButtonAdd'
import ButtonBuy from '../../UI/buttonBuy/ButtonBuy'
import ButtonDiminish from '../../UI/buttonDiminish/buttonDiminish'
import style from './Card.module.scss'

interface CardProps {
    name: string;
    url: string;
    price: string
}

export default function Card({name, url, price }: CardProps) {
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
                            <ButtonDiminish/>
                            <input type="number" />
                            <ButtonAdd/>
                        </div>
                        <ButtonBuy/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}