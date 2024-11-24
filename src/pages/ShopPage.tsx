import { Link } from "react-router-dom"
import style from './Page.module.scss'
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import Card from "../components/card/Card"

export default function ShopePage() {
    return (
        <> 
            <div className={style['page']}>
                <Header/>
                <main>
                    <Card/>
                </main>
                <Footer/>
            </div>
        </>
    )
}