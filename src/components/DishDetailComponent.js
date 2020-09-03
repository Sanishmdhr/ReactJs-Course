import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText, CardHeader } from 'reactstrap'

export class DishDetailComponent extends Component {


  render() {

    if (this.props.dishSelected != null) {
      return (
        <div className='row'>
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg top src={this.props.dishSelected.image} alt={this.props.dishSelected.name} />
              <CardBody>
                <CardTitle>{this.props.dishSelected.name}</CardTitle>
                <CardText>{this.props.dishSelected.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
               <h2>Comments</h2>
                {this.props.dishSelected.comments.map(comment => (
                  <ul  className="list-unstyled">
                  <li>{comment.comment}</li>
                  <li>{`-- ${comment.author}, ${comment.date}`}</li>
                  </ul>
                  ))}
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
}

export default DishDetailComponent
