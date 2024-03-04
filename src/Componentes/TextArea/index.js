import styles from "./Input.module.css"

const TextArea = (props) => {
    return (
        <textarea {...props} className={styles.link} />
    )
}

export default TextArea