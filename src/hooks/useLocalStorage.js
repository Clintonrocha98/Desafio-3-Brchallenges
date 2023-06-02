"use client";
import { createContext, useEffect, useState } from "react";

export const LocalStorageContext = createContext();

export const LocalStorageProvider = ({ children }) => {
    const [savedProducts, setSavedProducts] = useState([]);

    useEffect(() => {
        const storedProducts =
            JSON.parse(localStorage.getItem("products")) || [];
        setSavedProducts(storedProducts);
    }, []);

    const saveProduct = (product) => {
        const updatedProducts = [...savedProducts];
        const existingProductIndex = updatedProducts.findIndex(
            (savedProduct) => savedProduct.product === product.product
        );

        if (existingProductIndex > -1) {
            updatedProducts.splice(existingProductIndex, 1);
        } else {
            updatedProducts.push(product);
        }

        localStorage.setItem("products", JSON.stringify(updatedProducts));
        setSavedProducts(updatedProducts);
    };

    return (
        <LocalStorageContext.Provider value={{ savedProducts, saveProduct }}>
            {children}
        </LocalStorageContext.Provider>
    );
};
