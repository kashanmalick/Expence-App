import React from 'react'
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import FullPage from '../container/index'

function AppRouter() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={FullPage} />
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter;