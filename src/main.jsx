import React from 'react'
import ReactDOM from 'react-dom/client'
import { FarmaCheckApp } from './FarmaCheckApp'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}> 
      <FarmaCheckApp />
    </Provider>
  ,
)
