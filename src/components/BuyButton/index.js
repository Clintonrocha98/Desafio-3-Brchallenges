"use client";
import { useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { LocalStorageContext } from "@/hooks/useLocalStorage";

const BuyButton = ({ product, soldout, removeBuy }) => {
    const [isProductSaved, setIsProductSaved] = useState(false);
    const { productsForPurchaseOnLocalStorage, savePurchaseToLocalStorage } = useContext(LocalStorageContext);

    useEffect(() => {
        const isSaved = productsForPurchaseOnLocalStorage.some(
            (savedProduct) => savedProduct === product
        );

        setIsProductSaved(isSaved);
    }, [productsForPurchaseOnLocalStorage, product]);

    const handleSave = () => {
        if (typeof window === "undefined") {
            return;
        }

        savePurchaseToLocalStorage(product);
        setIsProductSaved(!isProductSaved);
    };
    return (
        removeBuy ? <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            version="1.1"
            viewBox="0 0 32 32"
            onClick={handleSave}
            className={styles.removeButton}
        >
            <g
                fill="#000"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="4.1"
                color="#000"
                transform="translate(-108 -244)"
            >
                <path
                    d="M112.629 255.006c-1.625 0-2.863 1.514-2.588 3.101l2.275 13.137c.279 1.608 1.7 2.762 3.313 2.762h16.767a3.379 3.379 0 003.311-2.748 1 1 0 00.002-.014l2.041-11.781a1 1 0 00-.814-1.154 1 1 0 00-1.155.814l-2.039 11.768a1.358 1.358 0 01-1.346 1.115H115.63c-.667 0-1.233-.463-1.344-1.102l-2.275-13.136c-.074-.426.201-.762.619-.762H128a1 1 0 001-1 1 1 0 00-1-1z"
                    style={{ InkscapeStroke: "none" }}
                ></path>
                <path
                    d="M119.305 246.072a1 1 0 00-.557.528l-4 9a1 1 0 00.508 1.32 1 1 0 001.32-.508l4-9a1 1 0 00-.508-1.32 1 1 0 00-.763-.02z"
                    style={{ InkscapeStroke: "none" }}
                ></path>
                <path
                    d="M127.955 246.092a1 1 0 00-.506 1.32l2.092 4.707a1 1 0 001.318.508 1 1 0 00.508-1.32l-2.092-4.707a1 1 0 00-1.32-.508z"
                    style={{ InkscapeStroke: "none" }}
                ></path>
                <path
                    d="M124 259.006a1 1 0 00-1 1v8a1 1 0 001 1 1 1 0 001-1v-8a1 1 0 00-1-1z"
                    style={{ InkscapeStroke: "none" }}
                ></path>
                <path
                    d="M120 259.006a1 1 0 00-1 1v8a1 1 0 001 1 1 1 0 001-1v-8a1 1 0 00-1-1z"
                    style={{ InkscapeStroke: "none" }}
                ></path>
                <path
                    d="M128 262.006a1 1 0 00-1 1v5a1 1 0 001 1 1 1 0 001-1v-5a1 1 0 00-1-1z"
                    style={{ InkscapeStroke: "none" }}
                ></path>
                <path
                    d="M133 250.006c-3.302 0-6 2.698-6 6s2.698 6 6 6 6-2.698 6-6-2.698-6-6-6zm0 2c2.221 0 4 1.779 4 4 0 2.22-1.779 4-4 4s-4-1.78-4-4c0-2.221 1.779-4 4-4z"
                    style={{ InkscapeStroke: "none" }}
                ></path>
                <path
                    d="M131.586 253.592a1 1 0 00-.707.293 1 1 0 000 1.414l.707.707-.707.707a1 1 0 000 1.414 1 1 0 001.414 0l.707-.707.707.707a1 1 0 001.414 0 1 1 0 000-1.414l-.707-.707.707-.707a1 1 0 000-1.414 1 1 0 00-.707-.293 1 1 0 00-.707.293l-.707.707-.707-.707a1 1 0 00-.707-.293z"
                    style={{ InkscapeStroke: "none" }}
                ></path>
            </g>
        </svg> : <button className={` 
        ${isProductSaved ? styles.inCart : null} 
        ${soldout ? styles.soldOutButton : null} 
        ${styles.buy}`}
            onClick={handleSave}>
            {soldout ? "ME AVISE QUANDO CHEGAR" : isProductSaved ? 'Produto no carrinho' : 'COMPRAR'}
        </button>
    );
};
export default BuyButton;
