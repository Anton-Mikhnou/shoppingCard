import { Link } from "react-router-dom"
import style from './Page.module.scss'
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import Card from "../components/card/Card"
import { useEffect, useState } from "react"

export default function ShopePage() {
    const [card, setCard] = useState([])

    useEffect(() =>{
        const fetchUrls = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setCard(data)
            console.log('s',data);
        }
        fetchUrls()
    },[])

    return (
        <> 
            <div className={style['page']}>
                <Header/>
                <main>
                    {card.map(car => (
                        <Card name={car.title} url={car.image} price={car.price} key={car.id}/>
                    ))}
                </main>
                <Footer/>
            </div>
        </>
    )
}