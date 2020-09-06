import React from 'react'
import "../css/Footer.css";
import {Link } from 'react-router-dom';

function FooterComponent() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul class="list-unstyled">
              <li><Link to='/home'>Home</Link></li>
              <li><Link to='/aboutus'>About</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to='/contactus'>Contact</Link></li>
            </ul>
          </div>
          <div class="col-7 col-sm-5">
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
          <div class="col-12 col-sm-4 align-self-center">
            <div class="text-center">
              <a class="btn btn-social-icon btn-google" href="http://google.com/+"><i
                class="fa fa-google-plus"></i></a>
              <a class="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i
                class="fa fa-facebook"></i></a>
              <a class="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i
                class="fa fa-linkedin"></i></a>
              <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i
                class="fa fa-twitter"></i></a>
              <a class="btn btn-social-icon btn-google" href="http://youtube.com/"><i
                class="fa fa-youtube"></i></a>
              <a class="btn btn-social-icon btn-linkedin" href="mailto:"><i class="fa fa-envelope-o"></i></a>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-auto">
            <p>© Copyright 2020 Food Fusion</p>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default FooterComponent
