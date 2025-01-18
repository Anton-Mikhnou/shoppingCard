import style from './Header.module.scss';
import { Link } from 'react-router-dom';
import { selectCount } from '../../modules/counterSlice';
import { useAppSelector } from '../../app/hooks';
// @ts-expect-error: SVG imports might not have proper TypeScript typings
import Carts from '../../assets/carts.svg?react';
// @ts-expect-error: SVG imports might not have proper TypeScript typings
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
                        <Link to={'/cart'} id='shop-link'><Carts className={style['svg-header']} width='30'/></Link>
                        <div className={style['counter']} id='counter'>{count}</div>
                    </div>
                </div>
            </header>
        </>
    )
}