import React, { Component } from "react";
import { Button, FormGroup, FormControl, Form } from "react-bootstrap";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
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
			<h5>Login </h5>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
					<Form.Label>UserName</Form.Label>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
					<Form.Label>Password</Form.Label>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
				
						
					
					<div>
					<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
							<label class="label-checkbox100" id="checkbox" for="ckb1">
								Remember me
							</label>
						
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
            Login
          </Button>
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
