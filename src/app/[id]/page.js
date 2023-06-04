import Image from "next/image";
import styles from "./styles.module.scss";
import ShowNumber from "@/components/ShowNumber";
import FavoriteIcon from "@/components/FavoriteIcon";
import SizeGuide from "@/components/SizeGuide";
import BuyButton from "@/components/BuyButton";

async function Product({ params }) {
    const res = await fetch(
        `https://api.brchallenges.com/api/paqueta/shoe/${params.id}`
    );
    const [product] = await res.json();

    if (!product) {
        return <div>Loading...</div>;
    }

    const discountedValue =
        product?.price?.value -
        product?.price?.discount * product?.price?.value;
    const formattedDiscount = (product?.price?.discount * 100).toFixed(0);

    return (
        <section className={styles.productPage}>
            <div className={styles.container}>
                <div className={styles.product}>
                    <div className={styles.warrapImage}>
                        <Image
                            src={product?.image}
                            height={703.41}
                            width={521.18}
                            quality={100}
                            alt={product?.name}
                        />
                        <div className={styles.share}>
                            <h2>Compartilhe</h2>
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="27"
                                    fill="none"
                                    viewBox="0 0 26 27"
                                >
                                    <path
                                        stroke="#383838"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 1.463H7c-3.314 0-6 2.701-6 6.033v12.067c0 3.332 2.686 6.033 6 6.033h12c3.314 0 6-2.7 6-6.033V7.496c0-3.332-2.686-6.033-6-6.033z"
                                    ></path>
                                    <path
                                        stroke="#383838"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17.8 12.77a4.85 4.85 0 01-.487 2.93 4.813 4.813 0 01-2.102 2.088 4.777 4.777 0 01-5.552-.898 4.85 4.85 0 01-.893-5.583 4.814 4.814 0 012.076-2.114 4.777 4.777 0 015.605.871A4.836 4.836 0 0117.8 12.77zM19.6 6.893h.013"
                                    ></path>
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="28"
                                    fill="none"
                                    viewBox="0 0 16 28"
                                >
                                    <path
                                        stroke="#383838"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 1h-3.818a6.346 6.346 0 00-4.5 1.874A6.417 6.417 0 004.818 7.4v3.84H1v5.119h3.818v10.238H9.91V16.358h3.818L15 11.238H9.91V7.4c0-.34.133-.665.372-.905s.562-.375.9-.375H15V1z"
                                    ></path>
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="31"
                                    height="26"
                                    fill="none"
                                    viewBox="0 0 31 26"
                                >
                                    <path
                                        stroke="#383838"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M29.13 1.176c-1.224.868-2.58 1.837-4.015 2.271a5.723 5.723 0 00-2.932-1.807 5.699 5.699 0 00-3.433.206 5.734 5.734 0 00-2.697 2.146 5.783 5.783 0 00-.988 3.313V8.59a13.568 13.568 0 01-6.481-1.458 13.652 13.652 0 01-5.027-4.366s-5.114 11.572 6.394 16.715A14.824 14.824 0 011 22.052c11.508 6.43 25.573 0 25.573-14.786a5.816 5.816 0 00-.102-1.067 9.94 9.94 0 002.66-4.719v-.304z"
                                    ></path>
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 32 24"
                                >
                                    <path
                                        stroke="#383838"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M29.507 4.7a3.705 3.705 0 00-.928-1.677 3.675 3.675 0 00-1.64-.984c-2.276-.559-11.38-.559-11.38-.559s-9.106 0-11.382.613a3.675 3.675 0 00-1.64.984 3.705 3.705 0 00-.927 1.677 38.801 38.801 0 00-.61 7.04 38.801 38.801 0 00.61 7.093c.173.612.5 1.169.95 1.616.45.448 1.007.771 1.617.94 2.276.611 11.381.611 11.381.611s9.105 0 11.382-.612a3.674 3.674 0 001.639-.984c.45-.467.77-1.046.928-1.677.413-2.306.617-4.644.609-6.987a38.8 38.8 0 00-.609-7.093v0z"
                                    ></path>
                                    <path
                                        stroke="#383838"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12.58 16.145l7.61-4.352-7.61-4.352v8.704z"
                                    ></path>
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="28"
                                    fill="none"
                                    viewBox="0 0 24 28"
                                >
                                    <path
                                        stroke="#383838"
                                        strokeWidth="2"
                                        d="M4.591 24.642l2.87-8.784a8.428 8.428 0 00.418-2.617V9.608a1.73 1.73 0 011.73-1.731h1.141a1.73 1.73 0 011.731 1.73v.125c0 .104-.008.208-.025.311l-.632 3.87-.173 1.07c-.098.612-.023 1.258.38 1.729.697.81 1.904 1.623 3.469 1.224 5-2.436 4.432-8.048 2.898-10.06-.657-1.117-3.156-3.352-7.89-3.352-4.733 0-5.789 3.964-6.008 5.976 0 .894-.303 3.278.75 5.424 1.051 2.146-.878 2.235-1.974 2.012-1.095-.447-3.024-2.95-1.972-9.389C2.356 2.11 8.755 1 11.824 1 15.549 1.224 23 3.317 23 11.9c0 8.174-6.757 9.438-10.619 9.154a2.658 2.658 0 01-1.054-.319l-1.476-.787c-.22 1.117-.92 3.89-1.972 6.035-1.315 1.341-3.507-.224-3.288-1.341z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className={styles.warrapInfo}>
                        <span>
                            <FavoriteIcon product={product?.name} />
                            <h1>{product?.name}</h1>
                            <p className={styles.codProduct}>
                                Código do produto: {product?.id}
                            </p>
                        </span>

                        {formattedDiscount > 0 ? (
                            <div>
                                <div className={styles.warrapDiscount}>
                                    <p className={styles.oldValue}>
                                        R${product.price.value}
                                    </p>
                                    <p className={styles.discount}>
                                        {formattedDiscount}% DE DESCONTO
                                    </p>
                                </div>
                                <p className={styles.value}>
                                    R${discountedValue.toFixed(2)}
                                </p>
                                <p className={styles.division}>
                                    ou 10x R${(discountedValue / 10).toFixed(2)}
                                </p>
                            </div>
                        ) : (
                            <div>
                                <p className={styles.value}>
                                    R${product?.price?.value}
                                </p>
                                <p className={styles.division}>
                                    ou 10x R$
                                    {(product?.price?.value / 10).toFixed(2)}
                                </p>
                            </div>
                        )}
                        <div className={styles.numbering}>
                            <h2>Escolha a numeração: </h2>
                            <div className={styles.warrapNumbers}>
                                <ShowNumber number={34} />
                                <ShowNumber number={35} />
                                <ShowNumber number={36} />
                                <ShowNumber number={37} />
                                <ShowNumber number={38} />
                                <ShowNumber number={39} />
                                <ShowNumber number={40} />
                            </div>
                            <SizeGuide />
                        </div>
                        <BuyButton product={product.name} soldout={product.soldout} />
                    </div>
                </div>
                <div className={styles.descriptionProduct}>
                    <h2>DESCRIÇÃO DO PRODUTO</h2>
                    <p>{product?.description}</p>
                </div>
            </div>
        </section>
    );
}
export default Product;
