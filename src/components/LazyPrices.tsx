import React from 'react'
import Prices from './Prices'

function LazyPrices( {img}: {img: any} ) {
  return (
    <div>
        <Prices img={img}/>
    </div>
  )
}

export default LazyPrices