import React,{ createContext, useState, useEffect } from 'react';
import axios from 'axios';

const urlPosts = `http://localhost:5000/posts`;
const urlUsers = `http://localhost:5000/users`;

export const MemoryContext = createContext();

const MemoryContextProvider = (props) => {
    const [posts, setPosts] = useState(["posts"]);
    const [users, setUsers] = useState([]);
    const[title, setTitle] = useState('Hello Title!');
    const[postId, setPostId] = useState();
    const[postById, setPostById] = useState();
    useEffect(async () => {
        const result = await axios(urlPosts);
        setPosts(result.data);
    }, []);
    useEffect(async () => {
        const result = await axios(urlUsers);
        setUsers(result.data);
    }, [title]);
    useEffect(async () => {
        if(postId == undefined) {
            return null;
        }
        const urlPostbyId = `http://localhost:5000/posts/${postId}`;
        const result = await axios(urlPostbyId);
        console.log(result.data);
        setPostById(result.data);

    },[postId])
    return( 
        <MemoryContext.Provider value={{posts, users, postId, setPostId}}>
            {props.children}
        </MemoryContext.Provider>
    )
}

export default MemoryContextProvider;