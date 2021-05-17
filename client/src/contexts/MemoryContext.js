import React, { createContext, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';

const urlPosts = `http://localhost:5000/posts`;
const urlUsers = `http://localhost:5000/users`;

export const MemoryContext = createContext();

const MemoryContextProvider = (props) => {
    const [posts, setPosts] = useState(["posts"]);
    const [title, setTitle] = useState(true);
    const [postId, setPostId] = useState(); // PostId for selected 'read more' Post
    const [postById, setPostById] = useState(); // Data For Single Post
    const [userName, setUserName] = useState(); // UserName for going to an user profile
    const [userProfile, setUserProfile] = useState(); // Data for showing a user profile
    const [userPosts, setUserPosts] = useState(); // Posts of selected user
    
    const history = useHistory();
    useEffect(() => {
        async function fetchPostsAPI() {
            const result = await axios(urlPosts);
            setPosts(result.data);
        }
        fetchPostsAPI();
    }, [title]);
    /*  useEffect(
        () => {
          async function fetchUsersAPI() {
          const result = await axios(urlUsers);
          setUsers(result.data);
        }
        fetchUsersAPI();
      }, [title]);*/

    //Post Of Selected 'read more'
    useEffect(() => {
        async function fetchPostAPI() {
            if (postId == undefined) {
                return null;
            }
            const urlPostbyId = `http://localhost:5000/posts/${postId}`;
            const result = await axios(urlPostbyId);
            console.log(result.data);
            setPostById(result.data);
        }
        fetchPostAPI()
    }, [postId]);

    //Data Of Selected User
    useEffect(() => {
        async function fetchProfileAPI() {
            if (userName == undefined) {
                return null;
            }
            const urlUserbyName = `http://localhost:5000/users/${userName}`;
            const result = await axios(urlUserbyName);
            setUserProfile(result.data);
        }
        fetchProfileAPI();
    }, [userName]);

    //Post Of Selected User
    useEffect(() => {
        async function fetchPostAPI() {
            if (userProfile == undefined) {
                return null;
            }
            const postsOfUser = userProfile.createdPost;
            //console.log(postsOfUser);
            const postArray = [];
            await Promise.all(postsOfUser.map(async (postId) => {
                //console.log(postId)
                const urlPostbyId = `http://localhost:5000/posts/${postId}`;
                const result = await axios(urlPostbyId);
                    //console.log(result.data);
                    postArray.push(result.data);
                    //console.log(result);
            })).then(() => {
                //console.log(postArray[0]);
                setUserPosts(postArray);
            })
        }
        fetchPostAPI()
    }, [userProfile]);

    return (
        <MemoryContext.Provider value={{ posts, userProfile, setPostId, postById, postId, setUserName, userName, userPosts }}>
            {props.children}
        </MemoryContext.Provider>
    )
}

export default MemoryContextProvider;