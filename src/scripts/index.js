import {render}             from 'react-dom';
import DataActions          from 'flux/actions/DataActions.js'
import Posts                 from 'components/Posts.js';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

class AppInitializer {
  run() {
    DataActions.getPages((response)=>{
      render(
        <Router>
          <div>
            <Switch>
                <Route path="/" component={ Posts } exact />
                <Route render={() => { return <Redirect to="/" /> }} />
            </Switch> 
          </div>
        </Router>

        , document.getElementById('app')
      );
    });
  }
}

new AppInitializer().run();

