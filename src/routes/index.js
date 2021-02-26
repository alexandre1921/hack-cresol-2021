import React from 'react';
import { Switch, Redirect } from "react-router-dom";

import Route from './Route';

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";

const Routes = () => {
  return (
    <Switch>
      <Route path="/admin" component={(props) =><AdminLayout {...props} />} isPrivate/>
      <Route path="/auth" component={(props) => <AuthLayout {...props} />} />
      <Route render={() => <Redirect to={{pathname: "/"}} />} />
    </Switch>
  );
};

export default Routes;