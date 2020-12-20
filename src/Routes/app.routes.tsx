import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../Pages/Dashboard';
import List from '../Pages/List';

const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={ Dashboard } />
        <Route path="/list/:type" exact component={ List } />
        <Route component={ Dashboard } />
      </Switch>
    </Layout>
  )
}

export default App;
