import React from 'react';
import '../css/Contactus.css';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function ContactUsComponent() {
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
      <div class="row contactUS__row">
        <div class="col-12">
          <h3>Location Information</h3>
        </div>
        <div class="col-12 col-sm-4 offset-sm-1">
          <h5>Our Address</h5>
          <address>
            Durbar Marg<br />
                    Opposite to XYZ complex<br />
                    Kathmandu, Nepal<br />
            <i class="fa fa-phone fa-lg font-icon"></i>Tel.: +977 9860123156<br />
            <i class="fa fa-fax fa-lg font-icon"></i>Fax: +977 9860123156<br />
            <i class="fa fa-envelope fa-lg font-icon"></i>Email: <a
              href="mailto:fusion@food.net">fusion@food.net</a>
          </address>
        </div>
        <div class="col-12 col-sm-6 offset-sm-1">
          <h5>Map of our Location</h5>
        </div>
        <div class="col-12 col-sm-11 offset-sm-1">
          <div class="btn-group" role="group">
            <a role="button" class="btn btn-primary" href="tel:986565656">Call</a>
            <a role="button" class="btn btn-info" href="tel:986565656">Skype</a>
            <a role="button" class="btn btn-success" href="tel:986565656">Mail</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsComponent
