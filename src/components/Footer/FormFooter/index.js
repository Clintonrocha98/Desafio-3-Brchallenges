import styles from "./styles.module.scss";

export const FormFooter = () => {
    return (
        <div className={styles.background}>
            <div className={styles.contentForm}>
                <h1>
                    SEJA O PRIMEIRO A RECEBER NOSSAS OFERTAS E NOVIDADES
                    EXCLUSIVAS!
                </h1>
                <div className={styles.containerSvg}>
                    <svg
                        className={styles.line}
                        xmlns="http://www.w3.org/2000/svg"
                        width="107"
                        height="89"
                        fill="none"
                        viewBox="0 0 107 89"
                    >
                        <path
                            stroke="#fff"
                            strokeDasharray="20 20"
                            strokeWidth="4"
                            d="M106.163 86.242l-42.718-5.325c-23.728-2.958-43.134-20.321-48.702-43.575L8.575 11.586A13.324 13.324 0 001 2.5v0"
                        ></path>
                    </svg>
                    <svg
                        className={styles.arrow}
                        xmlns="http://www.w3.org/2000/svg"
                        width="68"
                        height="66"
                        fill="none"
                        viewBox="0 0 68 66"
                    >
                        <path
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="4"
                            d="M65.44 44.951L29.62 31.998M65.44 44.949l-51.454 5.253 15.746-18.166-.485-24.035L65.44 44.95z"
                        ></path>
                    </svg>
                </div>
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
                            <input type="text" placeholder="Email" />
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
                            <input type="text" placeholder="Nome" />
                        </div>
                    </div>
                    <div className={styles.containerCheckbox}>
                        <h2>Tenho interesse na categoria:</h2>
                        <label>
                            <input type="checkbox" />
                            Masculino
                        </label>

                        <label>
                            <input type="checkbox" />
                            Feminino
                        </label>
                    </div>
                    <button>QUERO RECEBER</button>
                </div>
            </div>
        </div>
    );
};
