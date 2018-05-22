import React from 'react';
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom'
// import { IndexRoute ,Router, Route, Link } from 'react-router'
// import { Router, Route, hashHistory } from 'react-router'
import PropTypes from 'prop-types'
import App from './route/index'
import Journey from './route/journey'
import Ts from './route/test/test2'
import Resume from './route/resume'


// const routes = [
//     {
//         exact: true,
//         path: "/",
//         // Redirect: "/app"
//         component: App,
//     },
//     {
//         exact: true,
//         path: "/app",
//         component: App,
//     },
//     {
//         path: "/test",
//         component: Test,
//         exact: false,
//         routes: [
//             {
//                 exact: false,
//                 path: "/test/ts",
//                 component: Ts
//             },
//         ]
//     }
// ];
// const RouteWithSubRoutes = route => (
//     <Route
//         path={route.path}
//         exact={route.exact}
//         render={props => {
//             // pass the sub-routes down to keep nesting
//             console.log(route.routes);
//             //  return  route.routes ? RouteWithSubRoutes(route.routes):<route.component {...props} routes={route.routes} />
//             if (route.routes) {
//                 RouteWithSubRoutes(item);
//             } else {
//                 return <route.component {...props} routes={route.routes} />
//             }
//         }}
//     />
// );
const Links = () => (
    <nav>
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink activeStyle={{ color: 'green' }} to={{ pathname: '/test' }}>About</NavLink>
        <NavLink
            isActive={isActiveFunc}
            activeClassName="active"
            to="/test/ts">Contact</NavLink>
    </nav>
)
const isActiveFunc = (match, location) => {
    console.log(match,'contact')
    return match
  }

const AddressBar = () => (
    <Route render={({ location: { pathname }, history }) => (
        <div className="">
            <div>
                <button
                    className=""
                    onClick={history.goBack}
                >◀︎</button>
            </div>
            <div>
                <button
                    className=""
                    onClick={history.goForward}
                >▶</button>
            </div>
            <div className="url">URL: {location.pathname}</div>
        </div>
    )} />
)

const Root = () => {
    return (<Router>
        <div>
            {/* <AddressBar /> */}
            {/* <Links /> */}
            {/* {routes.map((route, i) => { return <RouteWithSubRoutes key={i} {...route} /> })} */}
            <Route exact path="/" component={App} />
            <Route exact={false} path='/resume' component={Resume} />
            <Route exact={false} path="/Journey" component={Journey} />
            {/* <Route exact={false} path='/test/ts' component={Ts} /> */}
        </div>
    </Router>)
}
//  Root.propTypes = {
//     store: PropTypes.object.isRequired
//   }
export default Root;