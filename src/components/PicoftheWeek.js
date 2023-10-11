import React, { useState } from 'react';
import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const PicoftheWeek = () => {

    const [show, setShow] = useState(false);

    return (
        <section id="musttry" className='my-3'>
            <div className='text-center my-2 py-3'>
                <h2 className='text-danger'><i class="bi bi-search-heart"></i> Pick of the Week</h2>
            </div>
            <Container>
                <Row className='align-items-center'>
                    <Col md={7}>
                        <Image src={require('../assets/pizza.jpg')} fluid={true} alt='pizza' rounded></Image>
                    </Col>
                    <Col md={5}>
                        <div className='p-3'>
                            <h2 className="h1">Double Cheese Fajita</h2>
                            <p className='lead text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Consectetur, ducimus modi rerum quia sint nam aperiam dignissimos
                            </p>
                            <Button variant="danger" onClick={() => setShow(true)}><i class="bi bi-basket"></i> Buy Now</Button>
                        </div>
                    </Col>
                </Row>
                <ToastContainer className="position-fixed p-3" position='bottom-end'>
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Header closeButton={false}>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Added</strong>
                        </Toast.Header>
                        <Toast.Body>Item added to cart.</Toast.Body>
                    </Toast>
                </ToastContainer>
            </Container>
        </section>
    );
}

export default PicoftheWeek;