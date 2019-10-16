import { Form, Button, FormGroup, FormControl, Col, Row } from 'react-bootstrap';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { register } from '../Helper Functions/UserFunction'

/* Register Component */
class Register extends Component {

    constructor(props){
        super(props);
        this.state = {firstName: "", lastName: "", email: "", password: "", validated: false, error: false};
    }
  
    handleSubmit(e) {
        const form = e.currentTarget;
        e.preventDefault();
        /* Check to see if form has valid input or not*/
        if (form.checkValidity() === false){
            e.stopPropagation();
        }else{
            const newUser = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            }
            register(newUser).then(res => {
                if(res.success){
                    this.props.history.push('/profile');
                }else{
                    this.setState({error: true});
                }     
            });
        }
        this.setState({validated: true});
    }

    render() {
        const errorMsg = (
            <div style={{color: "white"}}>
                Error: Email already exists or something went wrong.
            </div>
        );
        return (
            <div className="Login">
                <h1 style={{paddingBottom: "20px", fontWeight: "500", color: "white"}}>
                    Sign Up For Free
                </h1>
                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit.bind(this)}>
                    <Row>
                        <Col>
                        <FormGroup controlId="firstName" bsSize="large">
                            <FormControl
                                autoFocus
                                required
                                value={this.state.firstName}
                                placeholder="First Name*"
                                onChange={e => this.setState({firstName: e.target.value})}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a first Name.
                            </Form.Control.Feedback>
                        </FormGroup>
                        </Col>
                        <Col>
                        <FormGroup controlId="lastName" bsSize="large">
                            <FormControl
                                required
                                value={this.state.lastName}
                                placeholder="Last Name*"
                                onChange={e => this.setState({lastName: e.target.value})}
                            />
                             <Form.Control.Feedback type="invalid">
                                Please provide a valid last Name.
                            </Form.Control.Feedback>
                        </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup controlId="email" bsSize="large">
                        <FormControl
                            type="email"
                            required
                            value={this.state.email}
                            placeholder="Email*"
                            onChange={e => this.setState({email: e.target.value})}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                        </Form.Control.Feedback>
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <FormControl
                            type="password"
                            required
                            value={this.state.password}
                            placeholder="Password*"
                            onChange={e => this.setState({password: e.target.value})}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid password.
                        </Form.Control.Feedback>
                    </FormGroup>
                    <Button block bsSize="large" type="submit">
                        Get Started
                    </Button>
                </Form>
                {this.state.error? errorMsg : ""}
            </div>
        );
    } 
}

export default withRouter(Register);