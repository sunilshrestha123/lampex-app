import React, { Component } from 'react';
import FormInput from '../../../components/form-input/form-input.component';
import CustomButton from '../../../components/custom-button/custom-button.component';
import './user.styles.scss';
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      f_name: '',
      m_name: '',
      l_name: '',
      email: '',
      mobile: '',
      password: '',
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      f_name: '',
      m_name: '',
      l_name: '',
      email: '',
      mobile: '',
      password: '',
    });
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { f_name, m_name, l_name, email, mobile, password } = this.state;
    return (
      <div className='user'>
        <h1>User form</h1>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='firstname'
            type='text'
            value={this.state.f_name}
            // handleChange={this.handleChange}
            label='first-name'
          />
          <FormInput
            name='middlename'
            type='text'
            value={m_name}
            // handleChange={this.handleChange}
            label='last-name'
          />
          <FormInput
            name='lastname '
            type='text'
            value={l_name}
            // handleChange={this.handleChange}
            label='middle-name'
          />
          <FormInput
            name='email '
            type='email'
            value={email}
            handleChange={this.handleChange}
            label='email'
          />
          <FormInput
            name='mobile'
            type='text'
            value={mobile}
            handleChange={this.handleChange}
            label='Mobile No '
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            // handleChange={this.handleChange}
            label='password'
          />
          <CustomButton type='submit' color='lightblue'>
            ADD USER
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default User;
