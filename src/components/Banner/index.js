import styles from "./styles.module.scss";
import Image from "next/image";
import banner from "public/assets/banner-hero.png";

export const Banner = () => {
    return (
        <main className={styles.Banner}>
            <div className={styles.contentBanner}>
                <Image
                    src={banner}
                    priority={true}
                    width="auto"
                    height="auto"
                    alt="logo da Loja"
                    quality={100}
                />
                <div className={styles.infoBanner}>
                    <h1>Tênis Casual</h1>
                    <h2>Masculino</h2>
                    <p>A partir de</p>

                    <span>R$79,99</span>
                    <br />
                    <button aria-label="Aproveite / Comprar">Aproveite</button>
                </div>
            </div>
            <div className={styles.containerCards}>
                <div className={styles.Cards}>
                    <div className={styles.card}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="56"
                            height="42"
                            fill="none"
                            viewBox="0 0 56 42"
                        >
                            <path
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M49.75 1.244H5.875A4.875 4.875 0 001 6.12v29.25a4.875 4.875 0 004.875 4.875H49.75a4.875 4.875 0 004.875-4.875V6.12a4.875 4.875 0 00-4.875-4.875zM1 15.87h53.625"
                            ></path>
                        </svg>
                        <p>
                            PAGUE EM ATÉ 10X <span>SEM JUROS*</span>
                        </p>
                    </div>
                    <div className={styles.card}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="37"
                            height="45"
                            fill="none"
                            viewBox="0 0 37 45"
                        >
                            <path
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M35.625 18.87c0 13.32-17 24.738-17 24.738s-17-11.417-17-24.738c0-4.542 1.791-8.898 4.98-12.11a16.937 16.937 0 0112.02-5.016c4.509 0 8.833 1.805 12.02 5.016a17.191 17.191 0 014.98 12.11z"
                            ></path>
                            <path
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M18.971 24.77c3.066 0 5.552-2.656 5.552-5.931s-2.486-5.93-5.552-5.93c-3.065 0-5.55 2.654-5.55 5.93 0 3.275 2.485 5.93 5.55 5.93z"
                            ></path>
                        </svg>
                        <p>
                            <span>RETIRE GRÁTIS</span> EM NOSSAS LOJAS
                        </p>
                    </div>
                    <div className={styles.card}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="42"
                            height="45"
                            fill="none"
                            viewBox="0 0 42 45"
                        >
                            <path
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="2.019"
                                d="M18.568 18.474c0 2.705-1.489 4.898-3.326 4.898s-3.326-2.193-3.326-4.898c0-2.705 1.49-4.898 3.326-4.898 1.837 0 3.326 2.193 3.326 4.898zM30.329 27.245c0 2.705-1.49 4.898-3.327 4.898-1.836 0-3.326-2.193-3.326-4.898 0-2.704 1.49-4.897 3.326-4.897 1.837 0 3.327 2.193 3.327 4.897M15.096 31.34l11.82-16.895"
                            ></path>
                            <path
                                stroke="#fff"
                                strokeMiterlimit="10"
                                strokeWidth="2.019"
                                d="M21.122 2.244l3.725 2.72a6.31 6.31 0 003.725 1.219h4.603l1.423 4.4A6.367 6.367 0 0036.9 13.77l3.725 2.72-1.424 4.4h0a6.399 6.399 0 000 3.94l1.424 4.4-3.725 2.72h0a6.367 6.367 0 00-2.302 3.187l-1.423 4.4h-4.608a6.308 6.308 0 00-3.725 1.219l-3.72 2.72-3.724-2.72a6.31 6.31 0 00-3.725-1.219H9.075l-1.424-4.4A6.366 6.366 0 005.35 31.95l-3.725-2.72 1.423-4.4v0a6.404 6.404 0 000-3.94l-1.423-4.4 3.725-2.72v0a6.365 6.365 0 002.301-3.187l1.424-4.4h4.603a6.308 6.308 0 003.724-1.219l3.72-2.72z"
                            ></path>
                        </svg>
                        <p>
                            <span>GANHE 20% DE</span>
                            <span> DESCONTO*</span>
                        </p>
                    </div>
                    <div className={styles.card}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            fill="none"
                            viewBox="0 0 48 48"
                        >
                            <path
                                fill="#fff"
                                d="M47.598 36.233a.8.8 0 00.027-.134V11.392a.93.93 0 00-.105-.412.913.913 0 00-.137-.206c-.018-.02-.033-.043-.053-.062a.937.937 0 00-.249-.175L24.516.088a.924.924 0 00-.782 0L1.169 10.537a.937.937 0 00-.25.176c-.019.019-.034.041-.052.061a.91.91 0 00-.137.206.93.93 0 00-.105.412V36.1c.005.045.014.09.027.134a.93.93 0 00.042.21.885.885 0 00.094.154.923.923 0 00.1.15c.053.048.11.091.173.127.034.029.07.056.109.08l22.564 10.45h.014c.24.11.516.11.756 0h.013l22.565-10.45a.967.967 0 00.109-.08.955.955 0 00.173-.127.907.907 0 00.1-.15.914.914 0 00.094-.153.954.954 0 00.04-.211zM2.499 12.863l7.179 3.325v7.474c0 .368.213.701.545.855l4.681 2.166c.29.134.628.11.897-.063a.941.941 0 00.43-.793v-6.6l6.96 3.217v22.632l-20.692-9.58V12.863zm32.938-5.636l-20.171 9.458-2.426-1.123 20.172-9.458 2.425 1.123zm-23.884 9.828l2.809 1.3v6.003l-2.81-1.3v-6.003zm13.51 5.389l20.692-9.58v22.632l-20.692 9.58V22.444zm-.936-1.64l-6.648-3.078 20.195-9.47 6.777 3.137-20.324 9.41zm0-18.821l6.663 3.085-20.195 9.47-6.792-3.145 20.324-9.41zm-9.112 32.903a.933.933 0 011.243-.462l4.703 2.178a.948.948 0 01.476 1.257.932.932 0 01-1.26.453l-4.704-2.177a.944.944 0 01-.458-1.249zm6.403 6.503a.934.934 0 01-1.241.461l-4.704-2.177a.945.945 0 01-.456-1.252.935.935 0 011.245-.459l4.703 2.178c.468.22.67.778.453 1.25zm23.038-10.276a.933.933 0 01-1.324.01l-.227-.223v3.438c0 .52-.419.942-.936.942a.939.939 0 01-.936-.942v-2.73l-.304.43a.933.933 0 01-1.294.21.945.945 0 01-.235-1.296l2.004-2.844c.016-.021.039-.032.055-.051.017-.02.024-.046.042-.064a1.13 1.13 0 01.093-.067.888.888 0 01.145-.094c.023-.012.04-.031.064-.042.024-.01.069-.011.102-.022a.972.972 0 01.18-.036c.025 0 .048-.013.074-.014h.004a.766.766 0 01.094.02.86.86 0 01.176.032.742.742 0 01.082.02.818.818 0 01.1.062c.029.016.062.02.089.04.027.018.032.039.052.056a.62.62 0 01.063.041l.005.005 1.82 1.788c.369.364.374.96.012 1.33z"
                            ></path>
                        </svg>
                        <p>
                            <span>FRETE GRÁTIS PARA</span> REGIÕES SUL E
                            SUDESTE*
                        </p>
                    </div>
                    <div className={styles.card}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="57"
                            height="40"
                            fill="none"
                            viewBox="0 0 57 40"
                        >
                            <path
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M37.085 21.518l9.27 9.321 9.27-9.321"
                            ></path>
                            <path
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M25.961 1.01H38.94c1.967 0 3.853.785 5.244 2.184a7.478 7.478 0 012.172 5.273V30.84M20.165 17.968l-9.27-9.322-9.27 9.322"
                            ></path>
                            <path
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M31.29 38.476H18.31a7.395 7.395 0 01-5.244-2.184 7.479 7.479 0 01-2.172-5.274V8.646"
                            ></path>
                        </svg>
                        <p>PRIMEIRA TROCA GRÁTIS</p>
                    </div>
                </div>
            </div>
        </main>
    );
};
