import ButtonAdd from "../../UI/buttonAdd/ButtonAdd";
import ButtonBuy from "../../UI/buttonBuy/ButtonBuy";
import ButtonDiminish from "../../UI/buttonDiminish/buttonDiminish";
import style from "./Card.module.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { increment, decrement } from "../../modules/counterSlice";
import { useState } from "react";
import {
    addToCart,
    deleteCart,
    incrementQuality,
    decrementQuality,
    settQuality,
    selectCart,
} from "../../modules/cartSlice";
import DeleteButton from "../../UI/deleteButton/DeleteButton";

interface CardProps {
    title: string;
    url: string;
    price: number;
    id: number;
}

export default function Card({ title, url, price, id }: CardProps) {
    const carts = useAppSelector(selectCart);
    const initialQuality = carts.find((cart) => cart.id === id)?.quality || 0;

    const [quality, setQuality] = useState<number>(initialQuality);
    const dispatch = useAppDispatch();

    const contains = carts.find((cart) => cart.id === id);

    const handelInputChange = (
        event: React.FormEvent<HTMLInputElement>
    ): void => {
        const value: number = Number(event.currentTarget.value);

        if (value < 0) return;

        if (contains) {
            dispatch(decrement(quality));
            dispatch(increment(value));
            dispatch(settQuality({ id, quality: value }));
        } else {
            dispatch(settQuality({ id, quality: value }));
        }

        setQuality(value);
    };

    function handleSabtractCount() {
        if (quality === 0) {
            return;
        }

        if (contains) {
            dispatch(decrement());
            dispatch(decrementQuality(id));
        }
        setQuality((quality) => quality - 1);
    }

    function handleAddCount() {
        if (contains) {
            dispatch(increment(1));
            dispatch(incrementQuality(id));
        }
        setQuality((quality) => quality + 1);
    }

    function handleBuy() {
        dispatch(increment(quality));
        dispatch(
            addToCart({
                id: id,
                title: title,
                url: url,
                price: price,
                quality: quality,
            })
        );
    }

    function handleDelete(id: number) {
        dispatch(deleteCart(id));
        dispatch(decrement(quality));
        setQuality(0);
    }

    return (
        <>
            <div className={style["wrapper"]}>
                <div className={style["container"]}>
                    <div className={style["container__img"]}>
                        <img src={url} alt="" />
                    </div>
                    <div className={style["description"]}>
                        <h2>{title}</h2>
                        <h3>${price}</h3>
                        <div className={style["description__buttons"]}>
                            <div>
                                <ButtonDiminish
                                    handleSabtractCount={handleSabtractCount}
                                />
                                <input
                                    type="number"
                                    value={quality}
                                    onChange={handelInputChange}
                                />
                                <ButtonAdd handleAddCount={handleAddCount} />
                            </div>
                            {contains ? (
                                <DeleteButton
                                    handleDelete={() => handleDelete(id)}
                                />
                            ) : (
                                <ButtonBuy handleBuy={handleBuy} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
