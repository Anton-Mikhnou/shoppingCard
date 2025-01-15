import style from './ButtonNext.module.scss'

interface ButtonProp {
    handleNext: () => void
}

export default function ButtonNext({handleNext}: ButtonProp) {
    return (
        <>
            <button className={style['buttonNext']} onClick={handleNext}></button>
        </>
    )
}