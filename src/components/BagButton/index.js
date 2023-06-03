'use client'
import { LocalStorageContext } from "@/hooks/useLocalStorage";
import { useContext } from "react";
import styles from './styles.module.scss'
import Link from "next/link";

function ShoppingList() {
    const { productsForPurchaseOnLocalStorage } = useContext(LocalStorageContext);

    const productCount = productsForPurchaseOnLocalStorage.length;
    return (
        <Link href='/cart'>
            <button
                className={styles.favoriteButton}
                aria-label="Lista de compras"
            >
                <div className={styles.icon}>
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
                    {productCount > 0 && (
                        <span className={styles.count}>{productCount}</span>
                    )}
                </div>
                <span className={styles.text}>Lista de compras</span>
            </button>
        </Link>
    )
}
export default ShoppingList;