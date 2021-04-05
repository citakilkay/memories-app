import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.css'
import Header from './components/Header'
import Post from './components/Post'
import AddPost from './components/AddPost'

const App = () => {
    return (
        <>
        <Header/>
        <Post/>
        <AddPost/>
        </>
    )
}

export default App
