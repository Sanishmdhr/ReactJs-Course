import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const RenderItem = ({ dish }) => {
  console.log(dish);
  return (
    <Card key={dish.id}>
      <CardImg top src={baseUrl + dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  )
}

const RenderComment = ({ comments, dishId, postComment }) => {
  return (
    <div >
      <h2>Comments</h2>
      {comments.map(comment => (
        <ul className="list-unstyled" >
          <li>{comment.comment}</li>
          <li>{`-- ${comment.author}`}, {new Intl.DateTimeFormat('en-US', { year: "numeric", month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</li>
        </ul>
      ))}
      {/* dishId={dishId} dishdetailComponent -> dishId stored in a new var/prop i.e dishId */}
      <CommentForm dishId={dishId} postComment={postComment} />

    </div>
  )
}

const DishDetailComponent = (props) => {
  if (props.isLoading) {
    return (
      <Loading />
    )
  }
  else if (props.errmess) {
    return (
      <h4>{props.errmess}</h4>
    )
  }
  else {
    return (
      <div className="container">

        <div className='row'>
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/Menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className='row'>
          <div className="col-12 col-md-5 m-1">
            <RenderItem dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComment comments={props.comments} dishId={props.dish.id} postComment={props.postComment} />
          </div>
        </div>
      </div>


    )
  }



}

export default DishDetailComponent
