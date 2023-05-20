"use client";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MiniCard } from "@/components/MiniCard";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <link rel="icon" href="public/assets/favicon.ico" sizes="any" />
            </Head>
            <Header />
            <Banner />
            <MiniCard />
            <Footer />
        </>
    );
}
