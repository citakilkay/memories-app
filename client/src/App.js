import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import Header from './components/Header';
import AddPost from './components/AddPost';
import MemoryContextProvider from './contexts/MemoryContext';
import PostsList from './components/PostsList';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SinglePost from './components/SinglePost';

const App = () => {
    return (
        <>
        <MemoryContextProvider>
            <Router>
                <Switch>
                    <Route path="/posts/:İd">
                        <SinglePost />
                    </Route>
                    <Route path="/posts">
                        <Header />
                        <PostsList />
                        <AddPost />
                    </Route>
                    <Route path="/">
                        <Header />
                        <PostsList />
                    </Route>
                </Switch>
            </Router>
        </MemoryContextProvider>
        </>
    )
}

export default App
