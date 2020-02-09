import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './views/Home/Home'
import LoggedUser from './views/LoggedUser/LoggedUser'
import NotFound from './views/404'
import React from 'react'
import SingleUser from './views/Users/Single'
import Site from './views/Site/Site'
import UsersList from './views/Users/List'
import history from './history'
import logo from './logo.svg'
import store from './store'
import { Provider } from 'react-redux'
import { Router, Switch, Route, Link } from 'react-router-dom'

// AFAIK in projects we use 2space indentations
function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Evaluation App!</p>
                </header>
                <Router history={history}>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home </Link>
                            </li>
                            <li>
                                <Link to="/user">User data </Link>
                            </li>
                            <li>
                                <Link to="/site">Site</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav>

                    <main>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            {/*do we need exact below?*/}
                            <Route exact path="/user" component={LoggedUser} />
                            <Route path="/site" component={Site} />
                            <Route path="/users" component={UsersList} />
                            <Route path="/user/:id" component={SingleUser} />
                            <Route component={NotFound} />
                        </Switch>
                    </main>
                </Router>
            </Provider>
        </div>
    )
}

export default App
