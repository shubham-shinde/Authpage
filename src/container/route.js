import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import App from './app';
import Courses from './courses';
import CreateCourse from './createCourse';
import createHistory from 'history/createBrowserHistory';
import MakeModules from './makeModules';

export const History = createHistory();


class Root extends React.Component {
    render() {
        return (
            <Router history={History}>
                <Switch>
                    <Route path="/jh,hj," component={App} />
                    <Route path="/user" component={Courses} />
                    <Route exact path="/" component={CreateCourse} />
                    <Route path="/makeModules" component={MakeModules}/>
                </Switch>
            </Router>
        )
    }
}

export default Root;
