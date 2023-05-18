import "../styles/reset.scss";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700","900"],
});

export const metadata = {
    title: "Paquetá",
    description:
        "A Paquetá Calçados é uma renomada marca de calçados que busca expandir sua presença online e oferecer aos seus clientes uma experiência digital atraente e funcional.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body className={poppins.className}>{children}</body>
        </html>
    );
}
