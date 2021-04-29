import React,{ createContext, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';

const urlPosts = `https://share-memory-app.herokuapp.com/posts`;
const urlUsers = `https://share-memory-app.herokuapp.com/users`;

export const MemoryContext = createContext();

const MemoryContextProvider = (props) => {
    const [posts, setPosts] = useState(["posts"]);
    const [users, setUsers] = useState([]);
    const[title, setTitle] = useState('Hello Title!');
    const[postId, setPostId] = useState();
    const[postById, setPostById] = useState();
    const history = useHistory();
    useEffect(async () => {
        const result = await axios(urlPosts);
        setPosts(result.data);
    }, []);
    useEffect(async () => {
        const result = await axios(urlUsers);
        setUsers(result.data);
    }, [title]);
    useEffect(async () => {
        if (postId == undefined) {
            return null;
        }
        const urlPostbyId = `https://share-memory-app.herokuapp.com/posts/${postId}`;
        const result = await axios(urlPostbyId);
        console.log(result.data);
        setPostById(result.data);
    }, [postId]);
    return( 
        <MemoryContext.Provider value={{posts, users, setPostId, postById}}>
            {props.children}
        </MemoryContext.Provider>
    )
}

export default MemoryContextProvider;