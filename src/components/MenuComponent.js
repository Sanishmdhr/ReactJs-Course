// create a menu component 
import React, { Component } from 'react';
import { Media } from 'reactstrap';


class Menu extends Component {

  constructor(props) {
    super(props)

    //a state is a basic method to declare a variable in a component
    this.state={
      dishes: [
        {
          id: 0,
          name:'Chatamari Pizza',
          image: 'assets/images/pizza.png',
          category: 'mains',
          label:'Hot',
          price:'4.99',
          description:'A unique combination of Nepali Chatamari (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
       {
          id: 1,
          name:'Zucchini Pakoda',
          image: 'assets/images/pakoda.png',
          category: 'appetizer',
          label:'',
          price:'1.99',
          description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
       {
          id: 2,
          name:'Doughnut',
          image: 'assets/images/doughnut.png',
          category: 'appetizer',
          label:'New',
          price:'1.99',
          description:'A Famous nepali breakfast'                        },
       {
          id: 3,
          name:'Cheese Cake',
          image: 'assets/images/cheesecake.png',
          category: 'dessert',
          label:'',
          price:'2.99',
          description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Nepali cardamoms'                        }
       ],
    }

  }

  render() {
    const menu = this.state.dishes.map(dish => {
      return(
        <div key={dish.id} className='col-12 mt-5'>
            <Media>
              <Media left middle>
                <Media object src={dish.image} alt={dish.name}/>
              </Media>
              <Media body className="ml-5">
                <Media heading>{dish.name}</Media>
                <p>{dish.description}</p>
              </Media>
            </Media>
        </div>
      )

    })





    //current component -> states -> dishes 
    return(
        <div className='container'>
          <div className='row'>
            {menu}
          </div>
        </div>
    )
  }

}

export default Menu;