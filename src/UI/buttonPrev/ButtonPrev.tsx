import style from './ButtonPrev.module.scss'

interface ButtonProp {
    handlePrev: () => void
}

export default function ButtonPrev({handlePrev}: ButtonProp) {
    return (
        <>
            <button className={style['buttonPrev']} onClick={handlePrev}></button>
        </>
    )
}