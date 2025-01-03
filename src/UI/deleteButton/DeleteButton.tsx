import style from './DeleteButton.module.scss'

interface ButtonProps {
    handleDelete: () => void;
}

export default function DeleteButton({handleDelete}: ButtonProps) {
    return (
        <>
            <button className={style['delete']} onClick={handleDelete}>Delete</button>
        </>
    )
}