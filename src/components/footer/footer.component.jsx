import React from 'react';
import './footer.styles.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Footer = (props) => {
  return (
    <div>
      <div className='footer'>
        <Container>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}

          {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
          <Row>
            <Col xs={6} md={3}>
              <h3 className='h1'>About-us</h3>
              <hr className='solid'></hr>
              <ul>
                <li className='li'>
                  <Link to='/contactus '>Contact US</Link>
                </li>
                <li className='li'>Support Center</li>
                <li className='li'>Blog</li>
                <li className='li'>Community</li>
                <li className='li'>partners</li>
                <li className='li'>Media </li>
              </ul>
            </Col>

            <Col xs={6} md={3}>
              <h3 className='h1'>Products </h3>
              <hr className='solid'></hr>
              <li className='li'>{props.name}</li>
              <li className='li'>Bloge</li>
              <li className='li'>Bloge</li>
            </Col>
            <Col xs={6} md={3}>
              <h3 className='h1'>News</h3>
              <hr className='solid'></hr>
              <li>Bloge</li>
            </Col>
            <Col xs={6} md={3}>
              <h3> Contact US </h3>
              <hr className='solid'></hr>
              <h6>Lampex Electronices Pvt.Ltd </h6>
              <p>
                Coorporate Office:pepsicola kathmandu puranoSinamanagal nepal
              </p>
              <p>Conatct no:- 015156335</p>
              <p>Mobile:98########</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='footerend'>
        Copyright © 2020 lampex electronics pvt ltd{' '}
      </div>
    </div>
  );
};

export default Footer;
