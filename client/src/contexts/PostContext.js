import React,{ createContext, useState } from 'react';

const PostContext = createContext();

const PostProvider = (props) => {
    const[title, setTitle] = useState('Hello Ilkay!');
    return( 
        <PostContext.Provider value={title}>
            {props.children}
        </PostContext.Provider>
    )
}

export default PostProvider;