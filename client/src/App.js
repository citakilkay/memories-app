import React from 'react';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import './styles/add-post.css'
import Header from './components/Header';
import AddPost from './components/AddPost';
import Profile from './components/Profile';
import MemoryContextProvider, { MemoryContext } from './contexts/MemoryContext';
import PostsList from './components/PostsList';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SinglePost from './components/SinglePost';
import UserPosts from './components/UserPosts';

const App = () => {
    const { postId, userName } = useContext(MemoryContext);

    return (
        <>
            <Router>
                <Switch>
                    <Route path={`/users/${userName}`}>
                        <Header />
                        <Profile />
                        <UserPosts />
                    </Route>
                    <Route path={`/posts/${postId}`}>
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
                        <AddPost />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App;

//"proxy": "https://share-memory-app.herokuapp.com",