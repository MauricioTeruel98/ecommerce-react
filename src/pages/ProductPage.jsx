import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard"
import useCart from "../hooks/useCart";


const ProductPage = () => {

    const { addToCart } = useCart();

    return (
        <>
            <Carousel />
            <ProductCard addToCart={addToCart} />
        </>
    )
}

export default ProductPage