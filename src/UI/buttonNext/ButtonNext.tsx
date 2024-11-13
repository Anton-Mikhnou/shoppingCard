import style from './ButtonNext.module.scss'

interface ButtonProp {
    func: () => void
}

export default function ButtonNext({func}: ButtonProp) {
    return (
        <>
            <button className={style['buttonNext']} onClick={func}></button>
        </>
    )
}