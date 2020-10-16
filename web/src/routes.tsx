import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Landing from "./pages/Landing/index";
import OrphanagesMap from "./pages/OrphanagesMap/index"
import CreateOrphanage from "./pages/CreateOrphanage/index";
import Orphanage from "./pages/Orphanage/index"

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} ></Route>
                <Route path="/app" component={OrphanagesMap} ></Route>
                <Route path="/orphanages/create" component={CreateOrphanage} ></Route>
                <Route path="/orphanages/:id" component={Orphanage} ></Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;