import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

const render = (Child) => ReactDOM.render(
  <Child />,
  document.getElementById('root')
)

render(App)

if (module.hot) {
  module.hot.accept('./app/components/Draggable/index.js', Child => render(Child))
}
