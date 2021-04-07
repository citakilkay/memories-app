import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'
import Header from './components/Header'
import Post from './components/Post'
import AddPost from './components/AddPost'
import PostProvider from './contexts/PostContext'

const App = () => {
    return (
        <>
        <PostProvider>
            <Header />
            <Post />
            <AddPost />
        </PostProvider>
        </>
    )
}

export default App
