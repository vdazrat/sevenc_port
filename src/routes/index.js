import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import Footer from '../Components/Footer';
import Home from '../pages/Home';

const withFooter = (Page) => {
  return (props) => (
    <Page {...props} Footer={<Footer />} />
  );
};
export default () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={withFooter(Home)} />
      </Switch>
    </Layout>
  );
};
