import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    return (
        <Container fluid>
            <Row className='justify-content-center'>
                <Col lg={8}>
                    <Carousel>
                        <Carousel.Item interval={2000}>
                            <img
                                className='d-flex w-100'
                                src={require('../assets/img1.webp')}
                                alt="First-Slide"
                            />
                            <Carousel.Caption>
                                <h3>Pepperoni Pizza</h3>
                                <p className='d-none d-sm-block'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                className='d-flex w-100'
                                src={require('../assets/img2.webp')}
                                alt="Second-Slide"
                            />
                            <Carousel.Caption>
                                <h3>Cheese Pizza</h3>
                                <p className='d-none d-sm-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img
                                className='d-flex w-100'
                                src={require('../assets/img3.webp')}
                                alt="Third-Slide"
                            />
                            <Carousel.Caption>
                                <h3>Margherita Pizza</h3>
                                <p className='d-none d-sm-block'>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <div className='text-center'>
                <h2 className="display-6 mt-3">Pizzaz for Every Occasion!</h2>
                <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </Container>
    );
}

export default Banner;