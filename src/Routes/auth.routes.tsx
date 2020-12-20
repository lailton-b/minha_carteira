import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SignIn from '../Pages/SignIn'

const Auth: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={ SignIn } />
      <Route component={ SignIn } />
    </Switch>
  )
}

export default Auth
