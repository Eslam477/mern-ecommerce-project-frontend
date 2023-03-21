import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getUserCartFun, deleteProductFromCartFun } from '../Store/redux/slices/userSlice.js'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../style/cart.css'
const MyCart = () => {
    const dispatch = useDispatch()
    const user_id = useSelector((state) => state.userSlice.userData._id)
    const [productsData, setProductsData] = useState([])
    const [Subtotal, setSubtotal] = useState(0)
    const [Shipping, setShipping] = useState(0)
    const [productsTotalPrice, setProductsTotalPrice] = useState(0)

    useEffect(() => {
        dispatch(getUserCartFun({ _id: user_id })).then((action) => {
            const data = action.payload.data
            if (data) {
                if (data.cartData.productsData.length !== 0) {
                    setProductsData(Array(data.cartData.productsData))
                }
                setSubtotal(data.cartData.subTotal)
                setShipping(data.cartData.shipping)
                setProductsTotalPrice(data.cartData.productsTotalPrice)
                console.log(data.msg)
            }
        })
    }, [])




    return (
        <Fragment>
            <Container fluid>
                <Row className='p-5'>
                    <Col sm="8">
                        <h1 className='mb-3'>Shopping Cart</h1>
                        {

                            productsData.length !== 0 ? (
                                productsData[0].map((x, k) => {
                                    const productData = x
                                    return (
                                        <div className='cart_item' key={k}>
                                            <Link to={'/product/' + productData._id}>
                                                <img src={require('../Store/img/products/' + productData._id + '/' + productData.image)} />
                                            </Link>
                                            <div className='details'>
                                                <h5>{productData.name}</h5>
                                                <p>{productData.description}</p>
                                                <span>{productData.price}$</span> | <span>Count :{productData.count}</span>  | <span>Total :{productData.price * productData.count}$</span> | <button className='btn_eff' onClick={() => { dispatch(deleteProductFromCartFun({ _id: user_id, productId: productData._id })) }}>delete</button>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : (
                                <div>
                                    <h2>Your cart is empty</h2>
                                </div>
                            )
                        }

                    </Col>
                    <Col sm="4">
                        <div className='cart_status'>
                            <div className='details'>
                                <h6>Shipping: {Shipping}$</h6>
                                <h6>productsTotalPrice: {productsTotalPrice}$</h6>
                                <h5>Subtotal: {Subtotal}$</h5>
                            </div>
                            <button className='btn_eff'>
                                Proceed to checkout
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment >
    );
}

export default MyCart;
