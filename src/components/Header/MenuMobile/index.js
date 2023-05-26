'use client'
import { useState } from "react";
import styles from "./styles.module.scss";

export const MenuMobile = () => {
    const [favoriteOpen, setFavoriteOpen] = useState(false);
    const [sacolaOpen, setSacolaOpen] = useState(false);

    function handleFavoriteMenu() {
        setFavoriteOpen(!favoriteOpen);
        setSacolaOpen(false);
    }

    function handleSacolaMenu() {
        setSacolaOpen(!sacolaOpen);
        setFavoriteOpen(false);
    }

    return (
        <section className={styles.menuMobile}>
            <button className={styles.favorite} onClick={handleFavoriteMenu}>
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
            </button>
            <button className={styles.sacola} onClick={handleSacolaMenu}>
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
            </button>
            <aside
                className={`${styles.favoriteMenu} ${
                    !favoriteOpen && styles.close
                }`}
            >
                <h3>teste</h3>
                <h3>teste</h3>
                <h3>teste</h3>
                <h3>teste</h3>
            </aside>
            <aside
                className={`${styles.sacolaMenu} ${
                    !sacolaOpen && styles.close
                }`}
            >
                <h3>aaaaa</h3>
                <h3>aaaaa</h3>
                <h3>aaaaa</h3>
                <h3>aaaaa</h3>
                <h3>aaaaa</h3>
            </aside>
        </section>
    );
};
