"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const FavoriteIcon = (product) => {
    const [isProductSaved, setIsProductSaved] = useState(false);

    useEffect(() => {
        const savedProducts =
            JSON.parse(localStorage.getItem("products")) || [];

        const isSaved = savedProducts.some(
            (savedProduct) => savedProduct.product === product.product
        );

        setIsProductSaved(isSaved);
    }, [product]);

    const handleSave = () => {
        if (typeof window === "undefined") {
            return;
        }

        const savedProducts =
            JSON.parse(localStorage.getItem("products")) || [];

        const existingProductIndex = savedProducts.findIndex(
            (savedProduct) => savedProduct.product === product.product
        );

        if (existingProductIndex > -1) {
            savedProducts.splice(existingProductIndex, 1);
        } else {
            savedProducts.push(product);
        }

        localStorage.setItem("products", JSON.stringify(savedProducts));
        setIsProductSaved(!isProductSaved);
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
