"use client";
import { useContext, useEffect, useState } from "react";
import { LocalStorageContext } from "@/hooks/useLocalStorage";
import styles from "./styles.module.scss";
import Image from "next/image";
import FavoriteIcon from "../FavoriteIcon";
import Link from "next/link";

function WishList() {
    const [isOpen, setIsOpen] = useState(false);
    const [products, setProducts] = useState([]);

    const { favoriteProductsOnLocalStorage } = useContext(LocalStorageContext);

    const productCount = favoriteProductsOnLocalStorage.length;

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch(
                "https://api.brchallenges.com/api/paqueta/shoes"
            );
            const data = await res.json();

            let filteredProducts = data;

            if (favoriteProductsOnLocalStorage && favoriteProductsOnLocalStorage.length > 0) {
                filteredProducts = data.filter((product) => {
                    return favoriteProductsOnLocalStorage.some(
                        (filterItem) => filterItem === product.name
                    );
                });
                setProducts(filteredProducts);
            } else {
                setProducts([])
            }

        };

        fetchProducts();
    }, [favoriteProductsOnLocalStorage]);

    return (
        <div className={styles.wishList}>
            <button
                className={styles.favoriteButton}
                onClick={openModal}
                aria-label="Lista de desejos"
            >
                <div className={styles.icon}>
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
                    {productCount > 0 && (
                        <span className={styles.count}>{productCount}</span>
                    )}
                </div>
                <span className={styles.text}>Lista de desejos</span>
            </button>
            {isOpen && (
                <div className={styles.modalContainer}>
                    <div className={styles.modal}>
                        <div className={styles.headerModal}>
                            <h2>Lista de desejos: </h2>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 1024 1024"
                                onClick={closeModal}
                            >
                                <path d="M764.288 214.592L512 466.88 259.712 214.592a31.936 31.936 0 00-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1045.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0045.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 10-45.12-45.184z"></path>
                            </svg>
                        </div>
                        <div className={styles.containerContent}>
                            {products === [] || products.length === 0 ? <h2>Confira nossos produtos🤩</h2> : products.map((product) => (
                                <div className={styles.favoriteCard} key={product.id}>

                                    <span className={styles.icon}><FavoriteIcon product={product.name} /></span>
                                    <Image
                                        src={product.image}
                                        height={150}
                                        width={150}
                                        quality={100}
                                        alt={product.name}
                                    />
                                    <Link href={product.id}>
                                        <div className={styles.infoContent}>
                                            <h2 className={styles.title}>{product.name}</h2>
                                            <p className={styles.id}>{product.id}</p>
                                            <p className={styles.value}>R${product.price.value}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default WishList;
