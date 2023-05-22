export async function getStaticPaths() {
    const res = await fetch("https://api.brchallenges.com/api/paqueta/shoes");
    const products = await res.json();

    const paths = products.map((product) => ({
        params: { id: product.name.replace(" ", "-") },
    }));

    return { paths, fallback: false };
}
