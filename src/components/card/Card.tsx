import ButtonAdd from '../../UI/buttonAdd/ButtonAdd'
import ButtonBuy from '../../UI/buttonBuy/ButtonBuy'
import style from './Card.module.scss'

export default function Card() {
    return (
        <>
        <div className={style['wrapper']}>
            <div className={style['container']}>
                <img src="" alt="" />
                <div className={style['description']}>
                    <h2>name</h2>
                    <div className={style['description__buttons']}>
                        <div>
                            <ButtonAdd/>
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