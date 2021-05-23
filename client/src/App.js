import React from 'react';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import './styles/add-post.css';
import Header from './components/Header';
import AddPost from './components/form/AddPost';
import Profile from './components/Profile';
import Auth from './components/form/Auth';
import MemoryContextProvider, { MemoryContext } from './contexts/MemoryContext';
import PostsList from './components/post/PostsList';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SinglePost from './components//post/SinglePost';
import UserPosts from './components/post/UserPosts';

const App = () => {
    const { postId, userName } = useContext(MemoryContext);

    return (
        <>
            <Router>
                <Switch>
                    <Route path={`/users/${userName}`} exact>
                        <Header />
                        <Profile />
                        <UserPosts />
                    </Route>
                    <Route path={`/posts/${postId}`} exact>
                        <Header />
                        <SinglePost />
                    </Route>
                    <Route path="/posts" exact>
                        <Header />
                        <PostsList />
                        <AddPost />
                    </Route>
                    <Route path="/auth" exact>
                        <Header />
                        <Auth />
                    </Route>
                    <Route path="/" exact>
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