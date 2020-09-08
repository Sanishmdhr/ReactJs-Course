import React, { Component } from 'react';
import '../css/Contactus.css';
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class ContactUsComponent extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       firstname:'',
       lastname:'',
       telnum:'',
       email:'',
       agree:false,
       contactType:'Tel.',
       message:''
    }

    this.handleInput = this.handleInput.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  handleInput(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
      this.setState({
        [name]:value
      })     
  }
  
  onFormSubmit(event){
    event.preventDefault();
      alert(`
      firstname:${this.state.firstname},
      lastname:${this.state.lastname},
      telnum:${this.state.telnum},
      email:${this.state.email},
      agree:${this.state.agree},
      contactType:${this.state.contactType},
      message:${this.state.message}
      `)
  }

  render() {
    return (
      <div className="container">
        <div className='row'>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/Home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact Us</h3>
            <hr />
          </div>
        </div>
        <div className="row contactUS__row">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              Durbar Marg<br />
                      Opposite to XYZ complex<br />
                      Kathmandu, Nepal<br />
              <i className="fa fa-phone fa-lg font-icon"></i>Tel.: +977 9860123156<br />
              <i className="fa fa-fax fa-lg font-icon"></i>Fax: +977 9860123156<br />
              <i className="fa fa-envelope fa-lg font-icon"></i>Email: <a
                href="mailto:fusion@food.net">fusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a role="button" className="btn btn-primary" href="tel:986565656">Call</a>
              <a role="button" className="btn btn-info" href="tel:986565656">Skype</a>
              <a role="button" className="btn btn-success" href="tel:986565656">Mail</a>
            </div>
          </div>
        </div>
        <div className='row contactUS__row'>
          <div className="col-12">
            <h3>Send Us Your Feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form onSubmit={this.onFormSubmit}>
              <FormGroup row>
                <Label htmlFor='firstname' md={2}>First Name</Label>
                <Col md={10}>
                  <Input
                    type='text'
                    id="firstname"
                    name='firstname'
                    placeholder="Enter Your First Name"
                    value={this.state.firstname}
                    onChange={this.handleInput}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor='lastname' md={2}>Last Name</Label>
                <Col md={10}>
                  <Input
                    type='text'
                    id="lastname"
                    name='lastname'
                    placeholder="Enter Your Last Name"
                    value={this.state.lastname}
                    onChange={this.handleInput}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor='telnum' md={2}>Contact Tel.</Label>
                <Col md={10}>
                  <Input
                    type='tel'
                    id="telnum"
                    name='telnum'
                    placeholder="Enter Your Contact Number"
                    value={this.state.telnum}
                    onChange={this.handleInput}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor='email' md={2}>Email</Label>
                <Col md={10}>
                  <Input
                    type='email'
                    id="email"
                    name='email'
                    placeholder="Enter Your Email Address"
                    value={this.state.email}
                    onChange={this.handleInput}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type='checkbox'
                        name='agree'
                        checked={this.state.agree}
                        onChange={this.handleInput}
                      />
                      <strong>May we contact you ?</strong>
                    </Label>
                  </FormGroup>

                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Input
                    type="select"
                    name="contactType"
                    value={this.state.contactType}
                    onChange={this.handleInput}>
                    <option>Tel.</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="message" md={2}>Your Message</Label>
                <Col md={10}>
                  <Input
                    type="textarea"
                    id='message'
                    name='message'
                    rows='8'
                    value={this.state.message}
                    onChange={this.handleInput}
                  />
                </Col>

              </FormGroup>
              <FormGroup row>
                <Col md={{size:10, offset:2}}>
                    <Button type='submit' color='primary'>
                      Send Feedback
                    </Button>
                </Col>
              </FormGroup>

            </Form>
          </div>
        </div>

      </div>
    )
  }

}

export default ContactUsComponent
