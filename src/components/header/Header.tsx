import style from './Header.module.scss';
import { Link } from 'react-router-dom';
import { selectCount } from '../../modules/counterSlice';
import { useAppSelector } from '../../app/hooks';
// @ts-ignore
import Carts from '../../assets/carts.svg?react';
// @ts-ignore
import Magnify from '../../assets/magnify.svg?react';

export default function Header() {

    const count = useAppSelector(selectCount)

    return (
        <>
            <header className={style['header']}>
                <Link to={'/'} className={style['logoStyle']}>CALIFORNIA</Link>
                <Link to={'/shop'} className={style['linkStyle']}>Shop</Link>
                <div className={style['containerl-icon']}>
                    <Magnify className={style['svg-header']} width='30'/>
                    <div className={style['card']}>
                        <Link to={'/cage'}><Carts className={style['svg-header']} width='30'/></Link>
                        <div className={style['counter']}>{count}</div>
                    </div>
                </div>
            </header>
        </>
    )
}