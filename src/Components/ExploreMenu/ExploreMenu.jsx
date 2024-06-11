import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/image'

const ExploreMenu = () => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Chooes from a varitey of categories of our farm fresh goodies!!!</p>
      <div className='explore-menu-list'>
        {menu_list.map((item,index)=>{
            return (
                <div keu={index}className='explore-menu-list-item'>
                    <img src={item.menu_image} alt=""/>
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
