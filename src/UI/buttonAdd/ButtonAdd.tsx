import style from './ButtonAdd.module.scss';

interface ButtonProps {
    handleAddCount: () => void;
}

export default function ButtonAdd({handleAddCount}: ButtonProps) {
    
    return(
        <>
            <button className={style['buttonAdd']}  onClick={handleAddCount}>+</button>
        </>
    )
}