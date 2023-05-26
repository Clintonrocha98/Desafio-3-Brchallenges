import Image from "next/image";
import styles from "./styles.module.scss";

export const Card = ({ image, name, value, soldout }) => {
    return (
        <div className={styles.containerCard}>
            {soldout && (
                <div className={styles.soldOut}>
                    <h3>PRODUTO ESGOTADO</h3>
                </div>
            )}

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="22"
                fill="none"
                viewBox="0 0 23 22"
                // className={fav ? styles.favoriteActive : null}
            >
                <path
                    stroke="#CF5D00"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.291 3.414a5.498 5.498 0 00-3.89-1.621 5.474 5.474 0 00-3.89 1.62l-1.06 1.067-1.06-1.066a5.486 5.486 0 00-3.89-1.62 5.486 5.486 0 00-3.89 1.62A5.548 5.548 0 001 7.325c0 1.468.58 2.875 1.611 3.912l1.06 1.066 7.78 7.823 7.78-7.823 1.06-1.066a5.533 5.533 0 001.612-3.912 5.557 5.557 0 00-1.612-3.911v0z"
                ></path>
            </svg>
            <Image
                src={image}
                height={150}
                width={210}
                quality={100}
                alt={name}
            />

            <h3 className={styles.name}>{name}</h3>
            <div>
                <h3 className={styles.value}>R${value}</h3>
                <p className={styles.divided}>
                    ou 10X R${(value / 10).toFixed(2)}
                </p>
            </div>
            <button
                className={`${styles.buy} ${
                    soldout ? styles.soldOutButton : null
                }`}
            >
                {soldout ? "ME AVISE QUANDO CHEGAR" : "COMPRAR"}
            </button>
        </div>
    );
};
