import React from 'react'

import './App.css'
import CoffeeOrderForm from './components/coffee-order/CoffeeOrderForm'

const App: React.FC = () => {
  
  return (
    <CoffeeOrderForm submitter={(coffeeOrder) => console.log(coffeeOrder)}></CoffeeOrderForm>
  )
}

export default App