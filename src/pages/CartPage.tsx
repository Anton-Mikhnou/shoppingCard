import style from './Page.module.scss';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { useAppSelector } from '../app/hooks';
import { selectCart } from '../modules/cartSlice';
import Card from '../components/card/Card';
import EmptyCart from '../components/empatyCart/EmptyCart';

export default function CartPage() {
    const cards = useAppSelector(selectCart);
    const total: number = cards.reduce(
        (sum, card) => sum + card.price * card.quality,
        0
    );

    return (
        <>
            <div className={style['page']}>
                <Header />
                <div className={style['total']}>{total.toFixed(2)}$</div>
                <main>
                    {cards.length !== 0 ? (
                        cards.map((card) => (
                            <Card
                                title={card.title}
                                url={card.url}
                                price={card.price}
                                key={card.id}
                                id={card.id}
                            />
                        ))
                    ) : (
                        <EmptyCart />
                    )}
                </main>
                <Footer />
            </div>
        </>
    );
}
