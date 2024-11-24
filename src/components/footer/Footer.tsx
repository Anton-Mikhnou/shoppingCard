import style from './Footer.module.scss'

export default function Footer() {
    return (
        <>
            <footer>
                <div className={style['footer__info']}>
                    <h1>About Store</h1>
                    <div>+375(33) 685 67 86</div>
                    <div>From 9:00 to 22:00 around the clock</div>
                </div>
            </footer>
        </>
    )
}