import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText, CardHeader } from 'reactstrap'

const DishDetailComponent = (props) => {

  if (props.dishSelected != null) {
    return (
      <div className="container">
        <div className='row'>
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg top src={props.dishSelected.image} alt={props.dishSelected.name} />
              <CardBody>
                <CardTitle>{props.dishSelected.name}</CardTitle>
                <CardText>{props.dishSelected.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <h2>Comments</h2>
            {props.dishSelected.comments.map(comment => (
              <ul className="list-unstyled">
                <li>{comment.comment}</li>
                <li>{`-- ${comment.author}`}, {new Intl.DateTimeFormat('en-US',{year:"numeric", month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>


    )
  }
  else {
    return (
      <div></div>
    )
  }

}

export default DishDetailComponent
