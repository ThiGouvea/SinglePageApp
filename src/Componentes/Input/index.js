import styles from "./Input.module.css"

const Input = (props) => {
    return (
        <input {...props} className={styles.link} />
    )
}

export default Input