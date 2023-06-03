'use client'
import { useContext, useEffect, useState } from "react";
import { LocalStorageContext } from "@/hooks/useLocalStorage";
import Image from "next/image";
import Link from "next/link";
import styles from './styles.module.scss'
import BuyButton from "@/components/BuyButton";
import FavoriteIcon from "@/components/FavoriteIcon";

function Cart() {
    const [products, setProducts] = useState([]);

    const { productsForPurchaseOnLocalStorage } = useContext(LocalStorageContext);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch(
                "https://api.brchallenges.com/api/paqueta/shoes"
            );
            const data = await res.json();

            let filteredProducts = data;

            if (productsForPurchaseOnLocalStorage && productsForPurchaseOnLocalStorage.length > 0) {
                filteredProducts = data.filter((product) => {
                    return productsForPurchaseOnLocalStorage.some(
                        (filterItem) => filterItem === product.name
                    );
                });
                setProducts(filteredProducts);
            } else {
                setProducts([])
            }

        };

        fetchProducts();
    }, [productsForPurchaseOnLocalStorage]);

    return (
        <section className={styles.cartPage}>
            <div className={styles.headerPage}>
                <p><Link href='/'>Paquetá</Link> &gt; Sacola</p>
                <h2>Sacola de compras</h2>
            </div>
            <div className={styles.contentPage}>
                <h3>Itens</h3>
                <div className={styles.warrapCards}>
                    {products.map(product => (
                        <div className={styles.card} key={product.id}>
                            <Link href={product.id}>
                                <Image
                                    src={product.image}
                                    height={200}
                                    width={200}
                                    quality={100}
                                    alt={product.name}
                                />
                                <div className={styles.infoContent}>
                                    <h2 className={styles.title}>{product.name}</h2>
                                    <p className={styles.id}>{product.id}</p>
                                    <p className={styles.value}>Numeração: 39</p>
                                    <p className={styles.value}>Cor: Preto</p>
                                    <p className={styles.value}>Quantidade: 1</p>
                                    <p className={`${styles.value} ${styles.last}`}>Preço: <span>R${product.price.value}</span></p>
                                </div>
                            </Link>
                            <span className={styles.icons}>
                                <FavoriteIcon product={product.name} />
                                <BuyButton removeBuy={true} product={product.name} />
                            </span>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}
export default Cart;