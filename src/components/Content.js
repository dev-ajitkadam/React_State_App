import React, { Component, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert'; // Correct import statement

export default class Content extends Component {
  state = {
    email: "",
    pass: "",
    submitted: false,
    showAlert: false, // State for controlling the alert
  };

  myPass = (event) => {
    this.setState({ pass: event.target.value });
  };

  myEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  myFunction = (event) => {
    event.preventDefault();
    console.log("Data Submitted");
    console.log(this.state.email);
    console.log(this.state.pass);

    this.setState({ submitted: true, showAlert: true }); // Show the alert

    // Optionally, you can use setTimeout to hide the alert after a few seconds
    setTimeout(() => {
      this.setState({ showAlert: false });
    }, 50000); // Hide the alert after 5 seconds
  };

  render() {
    return (
      <div className='container py-5'>
        {this.state.submitted ? (
          <div>
            {/* Display an Alert component when showAlert is true */}
            {this.state.showAlert && (
              <Alert variant="success">
                <Alert.Heading>Form Submitted Successfully!</Alert.Heading>
                <p>Your Entered Email: {this.state.email}, Password: {this.state.pass}</p>
              </Alert>
            )}
          </div>
        ) : (
          <Form onSubmit={this.myFunction}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name='email' onChange={this.myEmail} placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name='pass' onChange={this.myPass} placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </div>
    );
  }
}
