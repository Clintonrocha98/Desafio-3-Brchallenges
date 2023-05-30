"use client";
import { Card } from "../Card";
import { Slide, Slider } from "../Slider/index";

async function CardCarrousel() {
    const res = await fetch("https://api.brchallenges.com/api/paqueta/shoes");
    const products = await res.json();

    const settings = {
        scrollbar: { draggable: true },
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1440: {
                spaceBetween: 50,
                slidesPerView: 4,
            },
        },
    };

    return (
        <Slider settings={settings}>
            {products.map((product) => (
                <Slide key={product.id}>
                    <Card
                        image={product.image}
                        name={product.name}
                        value={product.price.value}
                        soldout={product.soldout}
                        href={`/${product.id}`}
                    />
                </Slide>
            ))}
        </Slider>
    );
}
export default CardCarrousel;
