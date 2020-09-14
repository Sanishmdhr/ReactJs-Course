import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle } from 'reactstrap';
import Loading from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

const RenderCard = ({ item, isLoading, errMess }) => {
  if (isLoading) {
    return (
      <Loading />
    )
  }
  else if (errMess) {
    return (
      <h4>{errMess}</h4>
    )
  }
  else {
    return (
      <FadeTransform
        in 
        transformProps={{
          exitTransform: 'scale(0.5) transtaleY(-50%)'
        }}
      >
        <Card>
          <CardImg src={baseUrl + item.image} alt={item.name} />
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>

    )
  }

}

function HomeComponent(props) {
  return (
    <div className="container">
      <div className='row'>
        <div className='col-12 col-md '>
          <RenderCard item={props.dish} isLoading={props.dishLoading} errMess={props.dishErrmess} />
        </div>
        <div className='col-12 col-md '>
          <RenderCard item={props.promotion} isLoading={props.promosLoading} errMess={props.promosErrMess} />
        </div>
        <div className='col-12 col-md '>
          <RenderCard item={props.leader} />
        </div>
      </div>
    </div>
  )
}

export default HomeComponent
