"use client";
import Image from "next/image";
import { useState } from "react";
import guide from "../../../public/assets/guia-de-tamanho.png";
import styles from "./styles.module.scss";

function SizeGuide() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button className={styles.guide} onClick={openModal}>
                Guia de tamanhos
            </button>
            {isOpen && (
                <div className={styles.modalContainer}>
                    <div className={styles.modal}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 1024 1024"
                            onClick={closeModal}
                        >
                            <path d="M764.288 214.592L512 466.88 259.712 214.592a31.936 31.936 0 00-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1045.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0045.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 10-45.12-45.184z"></path>
                        </svg>
                        <Image
                            src={guide}
                            width={990}
                            height={814}
                            quality={100}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default SizeGuide;
