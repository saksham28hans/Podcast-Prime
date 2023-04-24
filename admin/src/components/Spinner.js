import React from 'react'
import loading from './load.gif'
const Spinner=()=> {
    return (
      <div className='text-center my-3 mx-4'>
        <img src={loading} alt="loading" />
      </div>
    )
}

export default Spinner