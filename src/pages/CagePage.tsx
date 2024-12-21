import style from './Page.module.scss'
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

export default function HomePage() {
    return (
        <>
            <div className={style['page']}>
                <Header/>
                
                <Footer/>
            </div>
        </>
    )
}