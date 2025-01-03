import style from './Page.module.scss'
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import Card from "../components/card/Card"
import { useEffect } from "react"
import { setCards } from "../modules/cardSlice"
import { useAppDispatch } from "../app/hooks"
import { selectCard } from "../modules/cardSlice"
import { useAppSelector } from "../app/hooks"


export default function ShopePage() {

    const dispatch = useAppDispatch();
    const card = useAppSelector(selectCard);

    useEffect(() =>{
        const fetchUrls = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            dispatch(setCards(data))          
        }
        fetchUrls()
    },[])
    
    return (
        <> 
            <div className={style['page']}>
                <Header/>
                <main>
                    {card.map(car => (
                        <Card title={car.title} url={car.image} price={car.price} key={car.id} id={car.id}/>
                    ))}
                </main>
                <Footer/>
            </div>
        </>
    )
}