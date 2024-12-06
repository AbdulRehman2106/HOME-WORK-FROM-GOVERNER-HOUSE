import React from 'react'
import {ImStarFull, ImStarHalf, ImStarEmpty } from "react-icons/im";

const Star1 = ({rating}:{rating:number}) => {

    const stars= [];

    for(let i = 1; i <= 5; i++){

        if (rating >= i) {

            stars.push(<ImStarFull key={i} />)
        }
        else if (rating >= i -0.5) {
            stars.push(<ImStarHalf key={i} />)
        }
        else {
            stars.push(<ImStarEmpty key={i} />)
        }
    }

  return (
    <div className='flex items-center justify-center text-green-800'>
      {stars}
    </div>
  )
}

export default Star1
