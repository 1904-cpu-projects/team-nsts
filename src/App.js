import React from "react";
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import { Home } from './components/Home';

/* I think its reasonable to make this thing be the main provider of redux store
 * And also the thing that routes to other places
 * Lets see how this works!
 */

class App extends React.Component {
  // gotta see that HR!
  render() {
    return (
      <Provider store={store}>
	<Router>
          <Route exact path='/' component={Home}/>
	</Router>
      </Provider>
    );
  }
}

export default App;