import React from 'react'
import CardBlue from './CardBlue'
import CardRed from './CardRed'
import CardBlack from './CardBlack'
import CardGreen from './CardGreen'

import CardWhite from './CardWhite'
import CardTransparent from './CardTransparent'


const Cards = () => {
  return (
    <div className='flex justify-around items-center p-10 w-[100%] '>
       <CardBlue/>
       <CardRed />
       <CardTransparent/> 
       <CardWhite />
       <CardBlack />
       <CardGreen/>
       
    </div>
  )
}

export default Cards
