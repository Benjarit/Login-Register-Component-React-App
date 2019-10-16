import React, { Component } from 'react';

class Profile extends Component {

    constructor(props){
        super(props);
        this.state = {firstName: "", lastName: "", email: ""};
    }

    componentDidMount(){
        /* Get data that we stored when login and display them on the page */
        const user = JSON.parse(localStorage.getItem('usertoken'));
        if(user){
            this.setState({ firstName: user.firstName, 
                            lastName: user.lastName, 
                            email: user.email});
        }
    }

    render() {
        return (
            <div className="container" style={{paddingBottom: "2.5%"}}>
                <div className="jumbotron mt-5">
                <div className="col-sm-8 mx-auto">
                    <h1 className="text-center">Profile</h1>
                </div>
                <table className="table col-md-6 mx-auto">
                    <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>{this.state.firstName}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{this.state.lastName}</td>
                    </tr>
                    <tr>
                        <td>Email Address</td>
                        <td>{this.state.email}</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        );
    }
}

export default Profile;