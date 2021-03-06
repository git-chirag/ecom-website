import React, { useEffect, useState } from 'react'
import Base from './Base'
import Card from './Card'
import { loadCart } from './helper/cartHelper'


const Cart = () => {
    const [products, setProduct] = useState([])
    const [reload, setReload] = useState(false)

    useEffect(() => {
        setProduct(loadCart())
    }, [reload])

    const loadAllProducts = (products) => {
        return (
            <div>
                {products.map((product, index) => {
                    return (
                        <Card
                            key={index}
                            product={product}
                            removeFromCart={true}
                            addtoCart={false}
                            reload={reload}
                            setReload={setReload}
                        />)

                })}
            </div>
        )
    }
    const loadCheckout = () => {
        return (
            <div>
                <h1>Checkout</h1>
            </div>
        )
    }
    return (
        <Base title="Cart Page" description="Welcome to checkout">
            <div className="row text-center">
                <div className="col-6">
                    {loadAllProducts(products)}
                </div>
                <div className="col-6">
                    {loadCheckout()}
                </div>
            </div>
        </Base>
    );
}

export default Cart
