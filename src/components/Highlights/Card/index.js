import Image from "next/image";
import styles from "./styles.module.scss";

const heartIcon = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="22"
            fill="none"
            viewBox="0 0 23 22"
            className={className}
        >
            <path
                stroke="#CF5D00"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.291 3.414a5.498 5.498 0 00-3.89-1.621 5.474 5.474 0 00-3.89 1.62l-1.06 1.067-1.06-1.066a5.486 5.486 0 00-3.89-1.62 5.486 5.486 0 00-3.89 1.62A5.548 5.548 0 001 7.325c0 1.468.58 2.875 1.611 3.912l1.06 1.066 7.78 7.823 7.78-7.823 1.06-1.066a5.533 5.533 0 001.612-3.912 5.557 5.557 0 00-1.612-3.911v0z"
            ></path>
        </svg>
    );
};

export const Card = ({ img, description, value, soldOff, fav }) => {
    return (
        <div className={styles.containerCard}>
            {soldOff && (
                <div className={styles.soldOff}>
                    <h3>PRODUTO ESGOTADO</h3>
                </div>
            )}

            <heartIcon className={fav && styles.favoriteActive} />

            <Image
                src={img}
                height="auto"
                width="auto"
                quality={100}
                alt="coração de produto favorito/não favorito"
            />

            <h3 className={styles.description}>{description}</h3>
            <h3 className={styles.value}>{value}</h3>
            <small className={styles.divided}>ou 10X R${value / 10}</small>
            <button
                className={`${styles.buy} ${soldOff && styles.soldOffButton}`}
            >
                {soldOff ? "ME AVISE QUANDO CHEGAR" : "COMPRAR"}
            </button>
        </div>
    );
};
