import Image from "next/image";
import styles from "./styles.module.scss";
import logoAdidas from "public/assets/logos/adidas.png";
import logoViamarte from "public/assets/logos/via-marte.png";
import logoBebece from "public/assets/logos/bebece.png";
import logoDumond from "public/assets/logos/dumond.png";

export const Footer = () => {
    return (
        <>
            <section className={styles.brands}>
                <h1>AS MELHORES MARCAS ESTÃO AQUI!</h1>
                <div className={styles.containerBrands}>
                    <Image
                        src={logoAdidas}
                        width={127.46}
                        height={86.53}
                        alt="logo de marca"
                        quality={100}
                    />
                    <Image
                        src={logoViamarte}
                        width={275.51}
                        height={35}
                        alt="logo de marca"
                        quality={100}
                    />
                    <Image
                        src={logoBebece}
                        width={212}
                        height={57}
                        alt="logo de marca"
                        quality={100}
                    />
                    <Image
                        src={logoDumond}
                        width={231.02}
                        height={46}
                        alt="logo de marca"
                        quality={100}
                    />
                </div>
            </section>
            <footer className={styles.footer}>
                <div className={styles.contentFooter}>
                    <h1>
                        SEJA O PRIMEIRO A RECEBER NOSSAS OFERTAS E NOVIDADES
                        EXCLUSIVAS!
                    </h1>
                    <div className={styles.contentInput}>
                        <h2>
                            Nos informe o seu e-mail e nome para o melhor
                            atendimento!
                        </h2>
                        <div className={styles.warrapInput}>
                            <div className={styles.input}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="18"
                                    fill="none"
                                    viewBox="0 0 22 18"
                                >
                                    <path
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 1h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2z"
                                    ></path>
                                    <path
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 3l-10 7L1 3"
                                    ></path>
                                </svg>
                                <input placeholder="Email" />
                            </div>
                            <div className={styles.input}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="20"
                                    fill="none"
                                    viewBox="0 0 18 20"
                                >
                                    <path
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 19v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 9a4 4 0 100-8 4 4 0 000 8z"
                                    ></path>
                                </svg>
                                <input placeholder="Nome" />
                            </div>
                        </div>
                        <div>
                            <h2>Tenho interesse na categoria:</h2>

                            <input
                                type="checkbox"
                                id="Masculino"
                                name="Masculino"
                            />
                            <label for="Masculino"> Masculino</label>

                            <label>
                                <input type="checkbox" />
                                Feminino
                            </label>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
