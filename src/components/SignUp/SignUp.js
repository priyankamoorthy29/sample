import React, { Component } from "react";
import { Button, FormGroup, FormControl, Form } from "react-bootstrap";
import "./SignUp.css";

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      userName: "",
      email: "",
      role: "",
      password:""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
			<h5>Sign Up </h5>
        <form onSubmit={this.handleSubmit} >
        <FormGroup controlId="id" bsSize="large">
				
            <FormControl
              value={this.state.id}
              onChange={this.handleChange}
              type="text"
              placeholder="User ID"
            />
    
          </FormGroup>
          <FormGroup controlId="name" bsSize="large">
					
            <FormControl
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              placeholder="UserName"
            />
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
				
            <FormControl
              autoFocus
              type="email"
              Placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="role" bsSize="large">
				
            <FormControl
              value={this.state.role}
              onChange={this.handleChange}
              type="text"
              placeholder="Role"
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
				
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              placeholder="Password"
            />
          </FormGroup>
					<div>
					
						<a href="#" class="txt1">
								Forgot Password?
							</a>

						</div>
         
	<Button 
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
           SignUp
          </Button>
        </form>
      </div>
    );
  }
}
