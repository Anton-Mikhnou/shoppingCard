import style from './ButtonBuy.module.scss';


interface ButtonProps {
    handleBuy: () => void;
}

export default function ButtonBuy({handleBuy}: ButtonProps) {
    
    return(
        <>
            <button className={style['addToCart']} onClick={handleBuy}>Add to Cart</button>
        </>
    )
}