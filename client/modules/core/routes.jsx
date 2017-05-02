import React from 'react';
import Helmet from 'react-helmet';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import root from './root';

// import Users from './components/users';
import MainPage from './components/main_layout';
import People from '../people/containers/people';
// import Task from './components/task';


export default function (injectDeps) {

  // const UsersCtx = injectDeps(Users);
  const MainPageCtx = injectDeps(MainPage);
  const PeopleCtx = injectDeps(People);
  // const TaskCtx = injectDeps(Task);

  injectTapEventPlugin();

  render(
    <MuiThemeProvider>
      <div>
        <Helmet title="TodoList-App" />
        <Router history={browserHistory}>
          <Route path="/" component={MainPageCtx}>
            <IndexRoute component={PeopleCtx} />
            <Route path="/people" component={PeopleCtx} />
          </Route>
        </Router>
      </div>
    </MuiThemeProvider>,
    root('root-node')
  );
}
