import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Site from './views/Site/Site'
import User from './views/User/User'
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
                <Router>
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
                        </ul>
                    </nav>

                    <main>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/user" component={User} />
                            <Route path="/site" component={Site} />
                            <Route component={NotFound} />
                        </Switch>
                    </main>
                </Router>
            </Provider>
        </div>
    )
}

export default App
