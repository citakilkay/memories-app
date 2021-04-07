import React from 'react'
import {useContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'
import Header from './components/Header'
import Post from './components/Post'
import AddPost from './components/AddPost'
import MemoryContextProvider from './contexts/MemoryContext'

const App = () => {
    return (
        <>
        <MemoryContextProvider>
            <Header />
            <Post />
            <AddPost />
        </MemoryContextProvider>
        </>
    )
}

export default App
