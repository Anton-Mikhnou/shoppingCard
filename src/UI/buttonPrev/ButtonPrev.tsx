import style from './ButtonPrev.module.scss'

interface ButtonProp {
    func: () => void
}

export default function ButtonNext({func}: ButtonProp) {
    return (
        <>
            <button className={style['buttonPrev']} onClick={func}></button>
        </>
    )
}