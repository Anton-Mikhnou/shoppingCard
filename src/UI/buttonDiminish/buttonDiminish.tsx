import style from './ButtonDiminish.module.scss';

interface ButtonProps {
    handleSabtractCount: () => void;
}

export default function buttonDiminish({handleSabtractCount}: ButtonProps) {

    return(
        <>
            <button className={style['buttonDiminish']} onClick={handleSabtractCount}>-</button>
        </>
    )
}