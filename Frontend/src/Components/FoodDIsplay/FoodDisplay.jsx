import React,{useContext} from 'react'
import './FoodDisplay.css'
import { StoreContext } from "../../context/StoreContext";
import FoodItems from '../FoodItems/FoodItems';

const FoodDisplay =({catagory}) => {
    const {food_list}= useContext(StoreContext)
    return(
        <div className='food-display' id='food-display'>
            <h2>
                Our products
            </h2>
            <div className="food_display_list">
                    {
                        food_list.map((item,index)=>{

                            if(catagory==="ALL"||catagory===item.category){

                            return <FoodItems key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                            }
                            
                        })
                    }

                </div>

        </div>
    )
}
export default FoodDisplay;