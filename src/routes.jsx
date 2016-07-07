var React = require('react');
var ReactRouter = require('react-router');
var IndexRoute = require('react-router').IndexRoute;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var History = require('history')
var RouterHistory = ReactRouter.useRouterHistory;
var CreateHashHistory = History.createHashHistory;

//disable query key in url string
var appHistory = RouterHistory(CreateHashHistory)(
    { queryKey: false }
);

var Base = require('./components/common/Base.jsx');
var Page1 = require('./components/Page1.jsx');
var Page2 = require('./components/Page2.jsx');

var Routes = (
    <Router history={appHistory}>
        <Route path="/" component={Base}>
            <IndexRoute component={Page1} />
            <Route path="page2" component={Page2} />
        </Route>
    </Router>
);

module.exports = Routes;