import styles from "./styles.module.scss";

const ShowNumber = ({ number }) => {
    return (
        <div className={styles.checkbox}>
            <input type="checkbox" id={number} className={styles.input} />
            <label className={styles.label} htmlFor={number}>
                {number}
            </label>
        </div>
    );
};
export default ShowNumber;
