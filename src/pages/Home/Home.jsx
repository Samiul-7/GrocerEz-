import React,{useState} from 'react'
import'./Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Components/FoodDIsplay/FoodDisplay'

const Home = () => {
  const[catagory,setCatagory] = useState("ALL");
  return (
    <div>
      <Header/>
      <ExploreMenu catagory={catagory} setCatagory={setCatagory}/>
      <FoodDisplay catagory= {catagory}/>
    </div>
  )
}

export default Home

