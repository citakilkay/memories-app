import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'
import Header from './components/Header'
import Post from './components/Post'
import AddPost from './components/AddPost'
import MemoryContextProvider from './contexts/MemoryContext'
import PostsList from './components/PostsList'

const App = () => {
    return (
        <>
        <MemoryContextProvider>
            <Header />
            <PostsList />
            <AddPost />
        </MemoryContextProvider>
        </>
    )
}

export default App
