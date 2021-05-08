import React,{ createContext, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';

const urlPosts = `http://localhost:5000/posts`;
const urlUsers = `http://localhost:5000/users`;

export const MemoryContext = createContext();

const MemoryContextProvider = (props) => {
    const [posts, setPosts] = useState(["posts"]);
    const[title, setTitle] = useState(true);
    const[postId, setPostId] = useState(); // PostId for selected 'read more' Post
    const[postById, setPostById] = useState(); // Data For Single Post
    const[userName, setUserName] = useState(); // UserName for going to an user profile
    const [userProfile, setUserProfile] = useState(); // Data for showing a user profile
    const history = useHistory();
    useEffect(async () => {
        const result = await axios(urlPosts);
        setPosts(result.data);
    }, [title]);
  /*  useEffect(async () => {
        const result = await axios(urlUsers);
        setUsers(result.data);
    }, [title]);*/

    //Post Of Selected 'read more'
    useEffect(async () => {
        if (postId == undefined) {
            return null;
        }
        const urlPostbyId = `http://localhost:5000/posts/${postId}`;
        const result = await axios(urlPostbyId);
        console.log(result.data);
        setPostById(result.data);
    }, [postId]);

    //Data Of Selected User
    useEffect(async () => {
        if (userName == undefined) {
            return null;
        }
        const urlUserbyName = `http://localhost:5000/users/${userName}`;
        const result = await axios(urlUserbyName);
        setUserProfile(result.data);
    }, [userName]);

    //Post Of Selected User
    useEffect( async() => {
        if (userProfile == undefined) {
            return null;
        }
        const postsOfUser = userProfile.createdPost;
        const postArray = [];
        postsOfUser.map(async (postId) => {
            const urlPostbyId = `http://localhost:5000/posts/${postId}`;
            const result = await axios(urlPostbyId);
            postArray.push(result.data);
        })
        //setPosts(postArray);
    },[userProfile]);
    useEffect(() => {
        console.log(posts);
    },[posts]);

    return( 
        <MemoryContext.Provider value={{ posts, userProfile, setPostId, postById, postId, setUserName, userName}}>
            {props.children}
        </MemoryContext.Provider>
    )
}

export default MemoryContextProvider;