import React, { Component } from 'react';//third step:to create a component named catalog
import { Media } from 'reactstrap';//4th step

class Catalog extends Component {
//third(part1)
	constructor(props) {
		super(props);

		this.state = {
			furnitures: [
               
                {
                  id: 0,
                  name:'Sofas',
                  image: 'assets/images/sofa.jpg',
                  category: 'mains',
                  label:'Hot',
                  price:'4.99',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        
              },
               {
                  id: 1,
                  name:'Coffee Tables',
                  image: 'assets/images/coffee-tables.jpg',
                  category: 'appetizer',
                  label:'',
                  price:'1.99',
                  description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        
              },
               {
                  id: 2,
                  name:'Chairs',
                  image: 'assets/images/chairs.jpg',
                  category: 'appetizer',
                  label:'New',
                  price:'1.99',
                  description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        
              },
               {
                  id: 3,
                  name:'Accent Chairs',
                  image: 'assets/images/accent-chairs.jpg',
                  category: 'dessert',
                  label:'',
                  price:'2.99',
                  description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        
              }
           
			]
		}
	}

	render() {

		const catalog = this.state.furnitures.map((furniture) => {
			return(
                 <div key={furniture.id} className="col-12 mt-5">
                     <Media tag="li">
                         <Media left middle>
                             <Media object src={furniture.image} alt={furniture.name} />
                         </Media>

                         <Media body className="ml-5">
                            <Media heading>{furniture.name}</Media>
                            <p>{furniture.description}</p>
                         </Media>
                     </Media>
                 </div>
				);
		});//4th(part1)

		return(
			//create a div 
            <div className="container">
                 <div className="row">
                 //4th(part1)
                    <Media list>
                       {catalog}
                    </Media>
                 </div>
            </div>
			);
	}
}

export default Catalog;//third(part2)