import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const Menu = () => {
    return (
        <section id="menu" className='bg-light'>
            <Container>
                <div className='text-center'>
                    <h3 className='text-danger my-3 py-3'>Treat yourself with our Everyday Menu <i class="bi bi-tiktok"></i></h3>
                </div>
                <Row>
                    <Col md={6} lg={4}>
                        <Card className='m-3'>
                            <Card.Img variant="top" src={require('../assets/card1.jpg')} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div className='text-center'>
                                    <Button variant="danger">Add to Basket</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card className='m-3'>
                            <Card.Img variant="top" src={require('../assets/card1.jpg')} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div className='text-center'>
                                    <Button variant="danger">Add to Basket</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card className='m-3'>
                            <Card.Img variant="top" src={require('../assets/card1.jpg')} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div className='text-center'>
                                    <Button variant="danger">Add to Basket</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card className='m-3'>
                            <Card.Img variant="top" src={require('../assets/card1.jpg')} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div className='text-center'>
                                    <Button variant="danger">Add to Basket</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card className='m-3'>
                            <Card.Img variant="top" src={require('../assets/card1.jpg')} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div className='text-center'>
                                    <Button variant="danger">Add to Basket</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card className='m-3'>
                            <Card.Img variant="top" src={require('../assets/card1.jpg')} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div className='text-center'>
                                    <Button variant="danger">Add to Basket</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Menu;