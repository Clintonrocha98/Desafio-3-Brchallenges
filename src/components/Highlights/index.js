import logo from "public/assets/paqueta-outlet.png";
import styles from "./styles.module.scss";
import Image from "next/image";
import CardCarrousel from "../Carrousel/CardCarrousel";
import ShowNumber from "../ShowNumber";

function Highlights() {
    return (
        <section className={styles.highlights}>
            <div className={styles.warrapHeader}>
                <div className={styles.header}>
                    <Image
                        src={logo}
                        width="auto"
                        height="auto"
                        quality={100}
                        alt="logo da empresa paqueta"
                    />
                    <h2>
                        Você também pode escolher o seu novo sapato
                        <br />
                        favorito de acordo com a sua numeração.
                    </h2>
                </div>

                <div className={styles.containerNumbers}>
                    <ShowNumber number={33} />
                    <ShowNumber number={34} />
                    <ShowNumber number={35} />
                    <ShowNumber number={36} />
                    <ShowNumber number={37} />
                    <ShowNumber number={38} />
                    <ShowNumber number={39} />
                    <ShowNumber number={40} />
                    <ShowNumber number={41} />
                    <ShowNumber number={42} />
                    <ShowNumber number={43} />
                    <ShowNumber number={44} />
                </div>
            </div>

            <div className={styles.containerCards}>
                <div className={styles.headerCards}>
                    <h2>DESTAQUE</h2>
                    <button>CONFERIR TUDO</button>
                </div>

                <CardCarrousel />
            </div>
        </section>
    );
}
export default Highlights;
