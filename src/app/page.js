import { Banner } from "@/components/Banner";
import { Highlights } from "@/components/Highlights";
import { MiniCard } from "@/components/MiniCard";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <link rel="icon" href="public/assets/favicon.ico" sizes="any" />
            </Head>
            <Banner />
            <MiniCard />
            <Highlights />
        </>
    );
}
