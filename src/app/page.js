import { Banner } from "@/components/Banner";
import Highlights from "@/components/Highlights";
import { MiniCard } from "@/components/MiniCard";
import { register } from "swiper/element/bundle";

register();

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

export default function Home() {
    return (
        <>
            <Banner />
            <MiniCard />
            <Highlights />
        </>
    );
}
