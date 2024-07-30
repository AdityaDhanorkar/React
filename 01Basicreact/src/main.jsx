import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'

function MyApp(){
  return (
      <div>
          <h1>Custom App | chai</h1>
      </div>
  )
}


// const ReactElemennt = {
//   type : 'a',
//   props : {
//   href: 'https://google.com',
//   target : '_blank'
//   },
//   children : 'Click me open Google'
// }

const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherElement = "Aditya"
const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank' },
  'click me to visit google',
  anotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render(
    
  ReactElement

)

