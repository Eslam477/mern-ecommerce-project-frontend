import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getProductsData } from '../Store/redux/slices/productSlice'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import '../style/home.css'
const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getProductsData()) }, [])

    const data = Array(useSelector((state) => state.productSlice.products))
    return (
        <div>
            <Container>
                <Row className='posters my-5'>
                    <div className="col-4 categories-poster">
                        <div className='content'>
                            <h4>Camera <br />collection</h4>
                            <span>SHOP NOW <BsFillArrowRightCircleFill /></span>
                        </div>
                        <img src={require('../assets/img/shop01.png')} />
                    </div>
                    <div className="col-4 categories-poster">
                        <div className='content'>
                            <h4>Camera <br />collection</h4>
                            <span>SHOP NOW <BsFillArrowRightCircleFill /></span>
                        </div>
                        <img src={require('../assets/img/shop02.png')} />
                    </div>
                    <div className="col-4 categories-poster">
                        <div className='content'>
                            <h4>Camera <br />collection</h4>
                            <span>SHOP NOW <BsFillArrowRightCircleFill /></span>
                        </div>
                        <img src={require('../assets/img/shop03.png')} />
                    </div>
                </Row>
            </Container>
            <section>
                <section className='mb-5'>
                    <Container>
                        <h2 className='mb-5'>NEW PRODUCTS</h2>
                        <Row>
                            {data[0].map((product, index) => (
                                <Card className='col-3 p-4 product-card-view' key={index}>
                                    <Link to={`/product/${product._id}`}>
                                        <div className='card-img' style={{ background: `url('${require(`../Store/img/products/${product._id}/1.jpg`)}')` }}></div>
                                    </Link>
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <h6>${product.price}</h6>
                                        <Link to={`/product/${product._id}`}>
                                            <Button variant="primary">View more</Button>
                                        </Link>

                                    </Card.Body>
                                </Card>
                            ))}









                        </Row>
                    </Container>
                </section>




            </section >

            {/* <Container fluid>
                <Row>
                    {data.products.map((product, index) => (
                        <Card className='col-4 p-4' key={index}>
                            <Card.Img variant="top" src={require(`../Store/img/products/${product.id}/1.jpg`)} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Button variant="primary">View more</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
            </Container> */}

            home
        </div >
    );
}

export default Home;
