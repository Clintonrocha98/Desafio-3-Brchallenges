import Image from "next/image";
import styles from "./styles.module.scss";
import logo from "public/assets/logo.png";
import { MenuMobile } from "./MenuMobile";

export const Header = () => {
    return (
        <>
            <header className={styles.Header}>
                <div className={styles.topHeader}>
                    <div className={styles.containerTop}>
                        <span>Loja de Calçados e Moda Online</span>
                        <div className={styles.infoHeader}>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="19"
                                    fill="none"
                                    viewBox="0 0 20 19"
                                >
                                    <path
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 15.027V9.51c0-2.195.948-4.3 2.636-5.852C5.324 2.106 7.613 1.234 10 1.234s4.676.872 6.364 2.424C18.052 5.21 19 7.315 19 9.51v5.517"
                                    ></path>
                                    <path
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 15.947c0 .488-.21.956-.586 1.3a2.093 2.093 0 01-1.414.54h-1c-.53 0-1.04-.195-1.414-.54a1.767 1.767 0 01-.586-1.3V13.19c0-.488.21-.956.586-1.3a2.093 2.093 0 011.414-.54h3v4.598zm-18 0c0 .488.21.956.586 1.3.375.345.884.54 1.414.54h1c.53 0 1.04-.195 1.414-.54.375-.344.586-.812.586-1.3V13.19c0-.488-.21-.956-.586-1.3A2.093 2.093 0 004 11.348H1v4.598z"
                                    ></path>
                                </svg>
                                Fale conosco
                            </span>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="23"
                                    fill="none"
                                    viewBox="0 0 20 23"
                                >
                                    <path
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9.275c0 6.437-9 11.954-9 11.954S1 15.712 1 9.275c0-2.194.948-4.3 2.636-5.851C5.324 1.872 7.613 1 10 1s4.676.872 6.364 2.424C18.052 4.976 19 7.08 19 9.275z"
                                    ></path>
                                    <path
                                        stroke="#fff"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10 12.035c1.657 0 3-1.236 3-2.759s-1.343-2.758-3-2.758-3 1.235-3 2.758c0 1.524 1.343 2.759 3 2.759z"
                                    ></path>
                                </svg>
                                Encontrar uma loja física
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.containerHeader}>
                    <div className={styles.firstPartHeader}>
                        <Image
                            src={logo}
                            width="auto"
                            height="auto"
                            alt="logo da loja"
                        />
                        <div className={styles.containerButtons}>
                            <button aria-label="Lista de desejos">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="29"
                                    fill="none"
                                    viewBox="0 0 30 29"
                                >
                                    <path
                                        stroke="#383838"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M26.84 3.387a7.365 7.365 0 00-2.39-1.767A6.762 6.762 0 0021.63 1c-.967 0-1.926.21-2.82.62a7.366 7.366 0 00-2.39 1.767L15 4.957l-1.42-1.57c-1.382-1.528-3.257-2.386-5.211-2.386-1.954 0-3.829.858-5.21 2.386C1.775 4.915 1 6.987 1 9.147c0 2.162.776 4.234 2.158 5.762l1.42 1.57L15 28 25.42 16.478l1.42-1.57a8.251 8.251 0 001.598-2.642c.37-.989.561-2.048.561-3.118 0-1.07-.19-2.13-.561-3.118a8.25 8.25 0 00-1.598-2.643v0z"
                                    ></path>
                                </svg>
                                Lista de desejos
                            </button>
                            <button aria-label="Sacola">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="29"
                                    height="30"
                                    fill="none"
                                    viewBox="0 0 29 30"
                                >
                                    <path
                                        stroke="#383838"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5.393 1.25L1 6.636v18.85c0 .713.309 1.398.858 1.903.549.505 1.294.79 2.07.79h20.5c.777 0 1.522-.285 2.071-.79.55-.505.858-1.19.858-1.904V6.635L22.964 1.25H5.393zM1 6.635h26.357"
                                    ></path>
                                    <path
                                        stroke="#383838"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M20.036 12.021c0 1.429-.617 2.799-1.716 3.809-1.098 1.01-2.588 1.577-4.141 1.577-1.554 0-3.044-.567-4.142-1.577-1.098-1.01-1.716-2.38-1.716-3.809"
                                    ></path>
                                </svg>
                                Sacola
                            </button>
                            <button aria-label="Entrar">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="31"
                                    fill="none"
                                    viewBox="0 0 30 31"
                                >
                                    <path
                                        stroke="#383838"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M29 29.963v-3.218c0-1.707-.738-3.344-2.05-4.551-1.313-1.207-3.093-1.885-4.95-1.885H8c-1.857 0-3.637.678-4.95 1.885C1.738 23.4 1 25.038 1 26.745v3.218M15 13.873c3.866 0 7-2.882 7-6.437C22 3.882 18.866 1 15 1S8 3.882 8 7.436c0 3.555 3.134 6.437 7 6.437z"
                                    ></path>
                                </svg>
                                Entrar
                            </button>
                        </div>
                        <MenuMobile />
                    </div>
                    <nav>
                        <ul>
                            <li>Novidades</li>
                            <li>Feminino</li>
                            <li>Masculino</li>
                            <li>Paquetá Esportes</li>
                            <li>Outlet</li>
                            <li>Cashback</li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};
