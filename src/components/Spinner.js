import React, { Component } from 'react'
import loading from './loading.gif'


// export class Spinner extends Component {
const Spinner = () => {

  // render() {
  return (
    <div>
      <img src={loading} alt="loading" className='my-3' />

    </div>
  )
  // }
}

export default Spinner
