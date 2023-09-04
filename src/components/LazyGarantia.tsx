import React from 'react'
import Garantia from './Garantia'

function LazyGarantia( {img}: {img: any} ) {
  return (
    <div>
        <Garantia img={img}/>
    </div>
  )
}

export default LazyGarantia