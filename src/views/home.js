import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getProductsData } from '../Store/redux/slices/productSlice'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import data from '../Store/data'
const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => { dispatch(getProductsData()) }, [])

    const data = Array(useSelector((state) => state.productSlice.products))
    return (
        <div>
            {/* <Container>
                <Row>
                    <div className="col-4 categories-poster">
                        <img src={require('../assets/img/shop01.png')} />
                    </div>
                    <div className="col-4 categories-poster">
                        <img src={require('../assets/img/shop02.png')} />
                    </div>
                    <div className="col-4 categories-poster">
                        <img src={require('../assets/img/shop03.png')} />
                    </div>
                </Row>
            </Container> */}

            <section>



                {data[0].map((product, index) => (
                    <div key={index}>
                        {console.log(product)}
                        <a href={`/product/${product._id}`}>
                            <h5>{product.name}</h5>
                            <img width='100px' src={require(`../Store/img/products/${product._id}/1.jpg`)} />
                            <p>{product.description}</p>
                            <span>${product.price}</span>
                        </a>
                        <hr />
                    </div>
                ))}
            </section>

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
        </div>
    );
}

export default Home;
