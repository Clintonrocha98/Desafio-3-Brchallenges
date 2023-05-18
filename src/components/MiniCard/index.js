import Image from "next/image";
import styles from "./styles.module.scss";
import calcados from "public/assets/calcados-femininos.png";
import calcados2 from "public/assets/calcados-masculinos.png";

export const MiniCard = () => {
    return (
        <section className={styles.Cards}>
            <div className={styles.card}>
                <div className={styles.feminino}>
                    <div className={styles.background}></div>
                    <Image
                        src={calcados}
                        width={668}
                        height={622}
                        alt="Mulher experimentando calçados"
                        quality={100}
                    />

                    <h2>
                        CALÇADOS
                        <br />
                        FEMININOS
                    </h2>
                </div>
                <div className={styles.infoCard}>
                    <p>
                        Escolher o seu sapato favorito entre nossa
                        <span>variedade de modelos e cores </span> não será uma
                        tarefa fácil, mas o que uma mulher não consegue fazer?
                    </p>
                    <button>CONFERIR</button>
                </div>
            </div>
            <div className={`${styles.card} ${styles.card2}`}>
                <div className={`${styles.feminino} ${styles.masculino}`}>
                    <div className={styles.background}></div>
                    <Image
                        src={calcados2}
                        width={668}
                        height={622.71}
                        alt="Homem experimentando calçados"
                        quality={100}
                    />

                    <h2>
                        CALÇADOS
                        <br />
                        MASCULINO
                    </h2>
                </div>
                <div className={styles.infoCard}>
                    <p>
                        Tenha em seu guarda roupa sapatos de qualidade e
                        confortáveis, para o dia a dia, trabalho e até mesmo
                        para praticar esportes!
                    </p>
                    <button>CONFERIR</button>
                </div>
            </div>
        </section>
    );
};
