import style from './EmptyCart.module.scss'

export default function EmptyCart() {
    return (
        <>
            <div className={style['empty']}>
                <p>Your cart is empty</p>
            </div>
        </>
    )
}