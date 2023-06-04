"use client";
import { useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { LocalStorageContext } from "@/hooks/useLocalStorage";
import toast from 'react-hot-toast';

const FavoriteIcon = (product) => {
    const [isProductSaved, setIsProductSaved] = useState(false);
    const { favoriteProductsOnLocalStorage, saveProductToLocalStorage } = useContext(LocalStorageContext);

    useEffect(() => {
        const isSaved = favoriteProductsOnLocalStorage.some(
            (savedProduct) => savedProduct === product.product
        );
        setIsProductSaved(isSaved);
    }, [favoriteProductsOnLocalStorage, product]);

    const handleSave = () => {
        if (typeof window === "undefined") {
            return;
        }
        setIsProductSaved(!isProductSaved);
        saveProductToLocalStorage(product.product);

        if (!isProductSaved) {
            toast('Produto adicionado aos favoritos!.', {
                icon: '💖',
            })
        }
        else {
            toast('Produto removido dos favoritos!', {
                icon: '💔',
            })
        }
    };
    return (
        <div className={styles.FavoriteIcon}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="22"
                fill="none"
                viewBox="0 0 23 22"
                className={isProductSaved ? styles.favoriteActive : null}
                onClick={handleSave}
            >
                <path
                    stroke="#CF5D00"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.291 3.414a5.498 5.498 0 00-3.89-1.621 5.474 5.474 0 00-3.89 1.62l-1.06 1.067-1.06-1.066a5.486 5.486 0 00-3.89-1.62 5.486 5.486 0 00-3.89 1.62A5.548 5.548 0 001 7.325c0 1.468.58 2.875 1.611 3.912l1.06 1.066 7.78 7.823 7.78-7.823 1.06-1.066a5.533 5.533 0 001.612-3.912 5.557 5.557 0 00-1.612-3.911v0z"
                ></path>
            </svg>

        </div>
    );
};
export default FavoriteIcon;
