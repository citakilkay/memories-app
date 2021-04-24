import React from 'react';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import Header from './components/Header';
import AddPost from './components/AddPost';
import MemoryContextProvider, { MemoryContext } from './contexts/MemoryContext';
import PostsList from './components/PostsList';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SinglePost from './components/SinglePost';

const App = () => {
    //const { postId } = useContext(MemoryContext);
    return (
        <>
        <MemoryContextProvider>
            <Router>
                <Switch>
                    <Route path="/posts/:id">
                        <Header />
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
