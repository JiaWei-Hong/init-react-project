import routes from 'const/routes'
import { useParamNavigate } from 'hooks/useParamNavigate'
import Home from 'pages/Home'
import Test from 'pages/Test'
import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'

function App() {
  const navigate = useParamNavigate()
  const location = useLocation()
  const transitions = useTransition(location, (location) => location.pathname, {
    from: { transform: 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
  })

  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <button onClick={() => navigate(routes.home)}>Home</button>
      <button onClick={() => navigate(routes.test, { id: 1 })}>Test</button>

      {transitions.map(({ props, key }) => (
        <animated.div key={key} style={props}>
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.test} element={<Test />} />
          </Routes>
        </animated.div>
      ))}
    </div>
  )
}

export default App
