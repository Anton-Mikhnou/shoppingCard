import style from './Header.module.scss';
import { Link } from 'react-router-dom';
// @ts-ignore
import Carts from '../../assets/carts.svg?react';
// @ts-ignore
import Magnify from '../../assets/magnify.svg?react';

export default function Header() {
    return (
        <>
            <header className={style['header']}>
                <Link to={'/'} className={style['logoStyle']}>CALIFORNIA</Link>
                <Link to={'/shop'} className={style['linkStyle']}>Shop</Link>
                <div className={style['containerl-icon']}>
                    <Magnify className={style['svg-header']} width='30'/>
                    <Carts className={style['svg-header']} width='30'/>
                </div>
            </header>
        </>
    )
}