

const PaymentPage = () => {

    return (
        <>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Tus datos de personales</h2>
                        <div>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Nombre</span>
                                </div>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Apellido</span>
                                </div>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Email</span>
                                </div>
                                <input type="text" placeholder="Type here" className="  input input-bordered w-full max-w-xs" />
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Telefono</span>
                                </div>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Direccion</span>
                                </div>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Pais</span>
                                </div>
                                <select className="select select-bordered">
                                    <option disabled selected>Seleccionar</option>
                                    <option value="">Argentina</option>
                                    <option value="">Chile</option>
                                </select>
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Provincia</span>
                                </div>
                                <select className="select select-bordered">
                                    <option disabled selected>Seleccionar</option>
                                    <option value="">Buenos Aires</option>
                                    <option value="">Cordoba</option>
                                </select>
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Ciudad</span>
                                </div>
                                <select className="select select-bordered">
                                    <option disabled selected>Seleccionar</option>
                                    <option value="">Buenos Aires</option>
                                    <option value="">Cordoba</option>
                                </select>
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Codigo Postal</span>
                                </div>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </label>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Datos de tu tarjeta</h2>

                        <div>
                        <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Nombre que figura en la tarjeta</span>
                                </div>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </label>
                        <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Numero de la tarjeta</span>
                                </div>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Fecha de vencimiento</span>
                                </div>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Codigo de seguridad</span>
                                </div>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </label>
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text">Tipo de tarjeta</span>
                                </div>
                                <select className="select select-bordered">
                                    <option disabled selected>Seleccionar</option>
                                    <option value="">Visa</option>
                                    <option value="">Mastercard</option>
                                </select>
                            </label>
                        </div>

                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage