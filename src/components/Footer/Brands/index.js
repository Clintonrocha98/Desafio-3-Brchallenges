import styles from "./styles.module.scss";

import logoAdidas from "public/assets/logos/adidas.png";
import logoViamarte from "public/assets/logos/via-marte.png";
import logoBebece from "public/assets/logos/bebece.png";
import logoDumond from "public/assets/logos/dumond.png";

import Image from "next/image";

export const Brands = () => {
    return (
        <section className={styles.brands}>
            <h1>AS MELHORES MARCAS ESTÃO AQUI!</h1>
            <div className={styles.containerBrands}>
                <Image
                    src={logoAdidas}
                    width="auto"
                    height="auto"
                    alt="logo de marca"
                    quality={100}
                />
                <Image
                    src={logoViamarte}
                    width="auto"
                    height="auto"
                    alt="logo de marca"
                    quality={100}
                />
                <Image
                    src={logoBebece}
                    width="auto"
                    height="auto"
                    alt="logo de marca"
                    quality={100}
                />
                <Image
                    src={logoDumond}
                    width="auto"
                    height="auto"
                    alt="logo de marca"
                    quality={100}
                />
            </div>
        </section>
    );
};
