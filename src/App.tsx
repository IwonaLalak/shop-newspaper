import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import HomeView from "./views/HomeView/HomeView";
import CreateView from "./views/CreateView/CreateView";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={'/'} render={(props: any) => <HomeView/>} />
          <Route exact path={'/create'} render={(props: any) => <CreateView/>} />
          <Route component={() => <div>404 not found</div>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
