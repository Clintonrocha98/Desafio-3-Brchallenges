import styles from "./styles.module.scss";

import { Brands } from "./Brands";
import { FormFooter } from "./FormFooter";
import { InfoFooter } from "./InfoFooter";

export const Footer = () => {
    return (
        <>
            <Brands />
            <footer className={styles.footer}>
                <FormFooter />
                <InfoFooter />
            </footer>
        </>
    );
};
