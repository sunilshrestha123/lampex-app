import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './contactus.styles.scss';
// import aboutus from '../../image/aboutus.jpg';
import Iframe from 'react-iframe';
import axios from 'axios';

export default class Contactus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      f_name: '',
      m_name: '',
      l_name: '',
      email: '',
      mobile: '',
      address: '',
      message: '',
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();

    // const data = {
    //   f_name: this.state.f_name,
    //   m_name: this.state.m_name,
    //   l_name: this.state.l_name,
    //   email: this.state.email,
    //   mobile: this.state.mobile,
    //   address: this.state.address,
    //   message: this.state.message,
    // };

    console.log('my data is recived', this.state);
    const data = this.state;
    axios
      .post('http://localhost:3002/api/contactus', data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    this.setState({
      f_name: '',
      m_name: '',
      l_name: '',
      email: '',
      mobile: '',
      address: '',
      message: '',
    });
  };
  //     onSubmit =async()=>{
  // console.log('heere...');
  // const f_name=document.getElementById('firstname').value;
  // const m_name=document.getElementById('middlename').value;
  // const _name=document.getElementById('lastname').value;
  // const email=document.getElementById('email').value;
  // const phone=document.getElementById('phone').value;
  // const address=document.getElementById('address').value;
  // const message=document.getElementById('message').value;

  //     }
  render() {
    const {
      f_name,
      l_name,
      m_name,
      email,
      mobile,
      address,
      message,
    } = this.state;
    return (
      <div className='contact-us'>
        {/* <img className='image' src={aboutus} alt='Conact-us' /> */}
        <Container>
          <Row>
            <Col xs={6}>
              <h3>Contact-Us</h3>
              <Form onSubmit={this.submitHandler}>
                <Form.Row>
                  <Form.Group as={Col} controlId='formGridCity'>
                    <Form.Label>First-Name</Form.Label>
                    <Form.Control
                      placeholder='first name'
                      name='f_name'
                      value={f_name}
                      onChange={this.changeHandler}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId='formGridCity'>
                    <Form.Label>Middle-Name</Form.Label>
                    <Form.Control
                      placeholder='middle name'
                      name='m_name'
                      value={m_name}
                      onChange={this.changeHandler}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId='formGridCity'>
                    <Form.Label>Last-Name</Form.Label>
                    <Form.Control
                      placeholder='lastname'
                      name='l_name'
                      value={l_name}
                      onChange={this.changeHandler}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId='exampleForm.ControlInput1'>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='name@example.com'
                    value={email}
                    name='email'
                    onChange={this.changeHandler}
                  />
                </Form.Group>

                <Form.Group controlId='formGridAddress1'>
                  <Form.Label>Phone No</Form.Label>
                  <Form.Control
                    placeholder='Please add Mobile No'
                    value={mobile}
                    name='mobile'
                    onChange={this.changeHandler}
                  />
                </Form.Group>
                <Form.Group controlId='formGridAddress1'>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    placeholder='Please add Your address'
                    value={address}
                    name='address'
                    onChange={this.changeHandler}
                  />
                </Form.Group>

                <Form.Group controlId='exampleForm.ControlTextarea1'>
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as='textarea'
                    rows='3'
                    value={message}
                    name='message'
                    onChange={this.changeHandler}
                  />
                </Form.Group>
                <Button variant='success' type='submit'>
                  Submit
                </Button>
              </Form>
            </Col>
            <Col xs={6}>
              <h3>Map-Location</h3>
              <div className='map'>
                <Iframe
                  src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d444.7245376364699!2d87.9275377742651!3d26.909959111755246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x41db936612482572!2silam%20fashion%20collection!5e0!3m2!1sen!2snp!4v1577861726656!5m2!1sen!2snp'
                  width='500'
                  height='450'
                  frameborder='0'
                  style='border:0;'
                  allowfullscreen=''
                ></Iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

// import React, { Component } from "react";
// import axios from "axios";

// export default class Contactus extends Component {
//   constructor(props) {
//     super(props);

//     this.onChangeUserName = this.onChangeUserName.bind(this);
//     this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       name: "",
//       email: ""
//     };
//   }

//   onChangeUserName(e) {
//     this.setState({ name: e.target.value });
//   }

//   onChangeUserEmail(e) {
//     this.setState({ email: e.target.value });
//   }

//   onSubmit(e) {
//     e.preventDefault();

//     const userObject = {
//       name: this.state.name,
//       email: this.state.email
//     };

//     axios
//       .post("http://localhost:4000/users/create", userObject)
//       .then(res => {
//         console.log(res.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });

//     this.setState({ name: "", email: "" });
//   }

//   render() {
//     return (
//       <div className="contact-us">
//         <div className="wrapper">
//           <form onSubmit={this.onSubmit}>
//             <div className="form-group">
//               <label>Add User Name</label>
//               <input
//                 type="text"
//                 value={this.state.name}
//                 onChange={this.onChangeUserName}
//                 className="form-control"
//               />
//             </div>
//             <div className="form-group">
//               <label>Add User Email</label>
//               <input
//                 type="text"
//                 value={this.state.email}
//                 onChange={this.onChangeUserEmail}
//                 className="form-control"
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="submit"
//                 value="Create User"
//                 className="btn btn-success btn-block"
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
