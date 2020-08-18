import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomeView from "./views/HomeView/HomeView";
import AdminDefineNewspaperView from "./views/Admin_DefineNewspaperView/Admin_DefineNewspaperView";
import AdminDefineProductView from "./views/Admin_DefineProductView/AdminDefineProductView";
import NewspapersView from "./views/NewspapersView/NewspapersView";
import NewspaperView from "./views/NewspaperView/NewspaperView";
import ProductsView from "./views/ProductsView/ProductsView";


function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path={'/'} render={(props: any) => <HomeView/>}/>

                    <Route exact path={'/products'} render={(props: any) => <ProductsView/>}/>

                    <Route exact path={'/newspapers'} render={(props: any) => <NewspapersView/>}/>
                    <Route exact path={'/newspaper/:id'} render={(props: any) => <NewspaperView/>}/>

                    <Route exact path={'/admin/define-newspaper'} render={(props: any) => <AdminDefineNewspaperView/>}/>
                    <Route exact path={'/admin/define-product'} render={(props: any) => <AdminDefineProductView/>}/>

                    <Route component={() => <div>404 not found</div>}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
