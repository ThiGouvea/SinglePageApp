import styles from "./ComboBox.module.css"

const ComboBox = ({children, tamanho}) => {
    return (
        <select className={`
            ${styles.ComboBox}
            ${styles[tamanho]}`}>
            {children}
        </select>
    )
}

export default ComboBox