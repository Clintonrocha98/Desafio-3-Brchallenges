"use client";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MiniCard } from "@/components/MiniCard";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
    return (
        <>
            <Header />
            <Banner />
            <MiniCard />
            <Footer />
            <Analytics />
        </>
    );
}
