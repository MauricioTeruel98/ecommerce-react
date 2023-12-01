import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";



const Carrito = () => {

    const { itemsCarrito, addToCart, removeFromCart, clearCart } = useCart();

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };

    const itemsNumber = itemsCarrito.length;

    return (
        <>
            <div className="drawer drawer-end z-40">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">{itemsNumber}</span>
                        </div>
                    </label>
                </div>
                <div className="drawer-side z-20">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 md:w-96 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <h3 className="mb-5 text-xl font-bold">Carrito de compras</h3>
                        {
                            itemsCarrito.map(item => {
                                return (
                                    <li
                                        key={item.id}
                                        className="my-2 border border-solid border-slate-300 rounded-lg carrito-item shadow-md"
                                    >
                                        <div className="flex justify-between items-center relative">
                                            <div className="w-2/3">
                                                <figure className="flex justify-center items-center w-3/4 px-1 bg-white rounded-lg">
                                                    <img className="w-14" src={item.image} alt="" />
                                                </figure>
                                                <div>
                                                    <p className="font-semibold line-clamp-2 mt-3">{item.title}</p>
                                                    <div className="">
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-1/3">
                                                <button onClick={() => handleRemoveFromCart(item.id)} className="bg-red-700 absolute -top-3 -right-3 border-2 border-solid border-red-700 rounded-full">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                                <div className="text-center">
                                                    <div>
                                                        <p className="">${item.price}</p>
                                                        <p>Cantidad: {item.quantity}</p>
                                                    </div>
                                                    <div className="divider divider-primary my-1"></div>
                                                    <p>Subtotal</p>
                                                    <p className="font-bold text-md hover:bg-accent p-2 rounded-lg btn-accent">$ {item.quantity * item.price}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                        <div className="w-full flex justify-between mt-5 gap-3">
                            <Link
                                to={'/payment'}
                                className="btn btn-primary mb-1"
                            >Ir a pagar</Link>
                            <button
                                className="btn btn-neutral"
                                aria-label="close sidebar"
                                onClick={() => clearCart()}
                            >
                                Limpiar carrito
                            </button>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Carrito