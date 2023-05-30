import "../styles/reset.scss";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Poppins, Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "900"],
});
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "900"],
});

export const metadata = {
    title: "Paquetá",
    description:
        "A Paquetá Calçados é uma renomada marca de calçados que busca expandir sua presença online e oferecer aos seus clientes uma experiência digital atraente e funcional.",
    icons: {
        icon: {
            url: "/assets/favicon.ico",
            type: "icon",
        },
    },
};
export default function RootLayout({ children }) {
    return (
        <>
            <html lang="pt-BR">
                <body className={`${poppins.className}${montserrat.className}`}>
                    <Header />
                    {children}
                    <Footer />
                </body>
            </html>
        </>
    );
}
