import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
import FavoriteIcon from "../FavoriteIcon";
import BuyButton from "../BuyButton";

export const Card = ({ image, name, value, soldout, href }) => {

    return (
        <div className={styles.containerCard}>
            {soldout && (
                <div className={styles.soldOut}>
                    <h3>PRODUTO ESGOTADO</h3>
                </div>
            )}
            <span className={styles.icon}>
                <FavoriteIcon product={name} />
            </span>
            <Link href={href}>
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
            </Link>
            <BuyButton product={name} soldout={soldout} removeBuy={false} />
        </div>
    );
};
