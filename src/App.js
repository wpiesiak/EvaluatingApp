import React from 'react'
import { Router, Switch, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import history from './history'
import Site from './views/Site/Site'
import LoggedUser from './views/LoggedUser/LoggedUser'
import UsersList from './views/Users/List'
import SingleUser from './views/Users/Single'
import Home from './views/Home/Home'
import NotFound from './views/404'
import 'bootstrap/dist/css/bootstrap.css'
import logo from './logo.svg'
import './App.css'

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
