import Nav from '../components/layoutHeaderNav.jsx';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
export default () => (
    <Switch>
        <Route path="/" component={Nav} />;
    </Switch>
);
