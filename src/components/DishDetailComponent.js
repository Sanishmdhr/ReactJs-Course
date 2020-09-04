import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';


const RenderItem = ({ dish }) => {
  return (
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  )
}

const RenderComment = ({ dish }) => {
  return (
    <div>
      <h2>Comments</h2>
      {dish.comments.map(comment => (
        <ul className="list-unstyled">
          <li>{comment.comment}</li>
          <li>{`-- ${comment.author}`}, {new Intl.DateTimeFormat('en-US', { year: "numeric", month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</li>
        </ul>
      ))}
    </div>
  )
}

const DishDetailComponent = (props) => {

  if (props.dishSelected != null) {
    return (
      <div className="container">
        <div className='row'>
          <div className="col-12 col-md-5 m-1">
            <RenderItem dish={props.dishSelected} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComment dish={props.dishSelected} />
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
