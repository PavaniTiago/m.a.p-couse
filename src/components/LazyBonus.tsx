import React from 'react'

import Bonus from './Bonus'

import BonusProps from '@/interfaces/BonusProps'

function LazyBonus({ title, img, children, text, person }: BonusProps) {
  return (
    <div>
        <Bonus title={title} img={img} children={children} text={text} person={person}/>
    </div>
  )
}

export default LazyBonus