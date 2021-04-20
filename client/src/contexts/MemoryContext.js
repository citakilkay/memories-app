import React,{ createContext, useState, useEffect } from 'react';
import axios from 'axios';

const urlPosts = `http://localhost:5000/posts`;
const urlUsers = `http://localhost:5000/users`;

export const MemoryContext = createContext();

const MemoryContextProvider = (props) => {
    const [posts, setPosts] = useState(["efeler"]);
    const [users, setUsers] = useState([]);
    const[title, setTitle] = useState('Hello Title!');
    useEffect(async () => {
        const result = await axios(urlPosts);
        setPosts(result.data);
    }, []);
    useEffect(async () => {
        const result = await axios(urlUsers);
        setUsers(result.data);
    }, [title]);
    return( 
        <MemoryContext.Provider value={{posts, users}}>
            {props.children}
        </MemoryContext.Provider>
    )
}

export default MemoryContextProvider;