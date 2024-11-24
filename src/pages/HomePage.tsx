import { Link } from "react-router-dom"
import style from './Page.module.scss'
import Header from "../components/header/Header"
import Slider from "../components/slider/Slider"
import Footer from "../components/footer/Footer"

export default function HomePage() {
    return (
        <>
            <div className={style['page']}>
                <Header/>
                <Slider/>
                <Footer/>
            </div>
        </>
    )
}