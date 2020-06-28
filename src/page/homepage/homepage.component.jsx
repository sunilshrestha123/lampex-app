import React from 'react';
import './homepage.styles.scss';
import ImageSlide from '../../components/imageslide/ImageSlide.component';
import { Row, Col, Container } from 'react-bootstrap';

const Homepage = () => {
  return (
    <div className='homepage'>
      <ImageSlide />
      <div className='aboutus'>
        <h1 style={{ textAlign: 'center' }}>About us </h1>
        <Container>
          <Row>
            <Col>About us image </Col>
            <Col>
              <h2>About US </h2>
              <p className='p'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.{' '}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='product'>
        <h1>PRODUCT </h1>
        <Container>
          <Row>product will be shown here</Row>
        </Container>
      </div>
      <div className='partner'>
        <h1>PARTNER </h1>
      </div>
    </div>
  );
};

export default Homepage;
