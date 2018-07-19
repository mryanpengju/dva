import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';


function RouterConfig({ history,app }) {
	const IndexPage = dynamic({
	    app,
	    models: () => [
	      import('./models/user'),
	    ],
	    component: () => import('./routes/IndexPage'),
  	});

  	const HomePage = dynamic({
	    app,
	    models: () => [
	      import('./models/user'),
	    ],
	    component: () => import('./routes/HomePage'),
  	});

  	return (
	    <Router history={history}>
	      <Switch>
	      	<Route path="/" exact component={HomePage} />
	        <Route path="/login" exact component={IndexPage} />
	      </Switch>
	    </Router>
  	);
}

export default RouterConfig;
