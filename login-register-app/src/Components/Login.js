import { Form, Button, FormGroup, FormControl} from 'react-bootstrap';
import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import { login, isLoggedIn } from '../Helper Functions/UserFunction'

/* Login Component */
class Login extends Component {

    constructor(props){
        super(props);
        this.state = {email: "", password: "", validated: false, error: false};
    }

    handleSubmit(e) {
        const form = e.currentTarget;
        e.preventDefault();
        if (form.checkValidity() === false){
            e.stopPropagation();
        }else{
            const user = {
                email: this.state.email,
                password: this.state.password
            }
            login(user).then(res => {
                if (res.success) { 
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
                Error: Username or Password is incorrect.
            </div>
        );
        if (isLoggedIn()) {
            return <Redirect to="/profile" />;
        }
        return (
            <div className="Login">
                <h1 style={{paddingBottom: "20px", fontWeight: "500", color: "white"}}>
                    Welcome Back!
                </h1>
                <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit.bind(this)}>
                    <FormGroup controlId="email" bsSize="large">
                        <FormControl
                            autoFocus
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
                        Log in
                    </Button>
                </Form>
                {this.state.error? errorMsg : ""}
            </div>
        );
    }
}

export default withRouter(Login);