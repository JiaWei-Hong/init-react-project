import routes from 'const/routes'
import { useParamNavigate } from 'hooks/useParamNavigate'
import Home from 'pages/Home'
import Test from 'pages/Test'
import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

function App() {
  const navigate = useParamNavigate()
  const location = useLocation()

  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <button onClick={() => navigate(routes.home)}>Home</button>
      <button onClick={() => navigate(routes.test, { id: 1 })}>Test</button>

      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          classNames={{
            appear: 'slide-none',
            enter: 'slide-enter',
            exit: 'slide-exit test-exit',
            enterActive: 'slide-enter test-enter-active',
            exitActive: 'slide-none',
            exitDone: 'slide-enter slide-exit-active',
          }}
          timeout={1000}
        >
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.test} element={<Test />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default App
