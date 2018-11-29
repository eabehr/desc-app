import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import NotFoundPage from './NotFoundPage';
import RequestCreationPage from './RequestCreation/RequestCreationPage';
import RequestInboxPage from './RequestInbox/RequestInboxPage';
import './App.css';

class AppContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDataFetched: false,
            message: '',
            version: ''
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/api')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    isDataFetched: true,
                    message: data.name,
                    version: data.version
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <header className="grey lighten-4">
                    <div>
                        <h1
                            className="grey-text center-align"
                            style={{ margin: '0', padding: '30px 0 0 0' }}
                        >
                            Welcome to the DESC In Kind Portal
                        </h1>
                        {this.state.isDataFetched && (
                            <div className="container" style={{ marginTop: '75px' }}>
                                <div className="row">
                                    <div className="col s12 l6 offset-l3">
                                        <div className="card-panel grey lighten-3">
                                            <h5 className="teal-text center-align">
                                                Data from API...
                                            </h5>
                                            <hr />
                                            <h6 className="ds-m-top_medium">
                                                Name: {this.state.message}
                                            </h6>
                                            <h6>Version: {this.state.version}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </header>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Navbar />
                        <Switch>
                            <Route exact path="/" component={AppContent} />
                            <Route exact path="/login" component={LoginPage} />
                            <Route exact path="/signup" component={SignupPage} />

                            <Route exact path="/create" component={RequestCreationPage} />
                            <Route exact path="/inbox" component={RequestInboxPage} />

                            <Route component={NotFoundPage} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
