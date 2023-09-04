import React from 'react'
import FaqDropdown from './FaqDropdown'
import DropDownProps from '@/interfaces/DropDownProps'

function LazyDropDown({ question, answer }: DropDownProps) {
  return (
    <div>
        <FaqDropdown question={question} answer={answer}/>
    </div>
  )
}

export default LazyDropDown