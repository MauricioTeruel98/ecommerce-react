import { useState, useEffect } from "react";

const ProductCard = ({ addToCart }) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [quantities, setQuantities] = useState(0);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
                setIsLoading(false);
            });
    }, []);

    const handleIncrement = (productId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: (prevQuantities[productId] || 0) + 1,
        }));
    };

    const handleDecrement = (productId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: Math.max((prevQuantities[productId] || 0) - 1, 0),
        }));
    };

    return (
        <>
            {isLoading ? ( // Mostrar skeleton loader mientras isLoading es true
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5">
                    {[1, 2, 3].map((index) => (
                        <div key={index} className="card w-full bg-base-100 shadow-xl">
                            <div className="flex flex-col gap-4 w-52">
                                <div className="skeleton h-32 w-full"></div>
                                <div className="skeleton h-4 w-28"></div>
                                <div className="skeleton h-4 w-full"></div>
                                <div className="skeleton h-4 w-full"></div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5">
                    {products.map(product => (
                        <div key={product.id} className="card w-full bg-base-100 shadow-xl">
                            <figure className="h-96 bg-white">
                                <img src={product.image} alt="Shoes" className="h-96 w-full object-contain" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.title}</h2>
                                <p>$ {product.price}</p>
                                {
                                    product.rating.rate > 3 ? (
                                        <div className="badge badge-success">
                                            {product.rating.rate}
                                        </div>
                                    ) : (
                                        <div className="badge badge-error">
                                            {product.rating.rate}
                                        </div>
                                    )
                                }
                                <div className="divider divider-primary my-1"></div>
                                <div className="card-actions justify-between items-center">
                                    <div className="flex items-center">
                                        <button onClick={() => handleDecrement(product.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </button>
                                        <span className="mx-2">{quantities[product.id] || 0}</span>
                                        <button onClick={() => handleIncrement(product.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>

                                        </button>
                                    </div>
                                    <button
                                        onClick={() => addToCart({ ...product, quantity: quantities[product.id] || 0 })}
                                        className={`btn btn-primary cursor-not-allowed ${quantities[product.id] > 0 && 'opacity-100 cursor-pointer'}`}
                                        disabled={!quantities[product.id] > 0}
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default ProductCard