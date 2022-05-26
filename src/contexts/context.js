import { createContext, useContext, useEffect, useState } from "react";

const PostsContext = createContext();

const Context = ({ children }) => {

const [ posts, setPosts ] = useState(null);
const [ isFetched, setFetched ] = useState(false);


useEffect(() => {
if (!isFetched) {
    setFetched(true)
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(post => setPosts(post));
    
}
}, [isFetched])

if (!posts) {
 return null
};
    return (
    <PostsContext.Provider value={{posts, setPosts}}>
        {children}
    </PostsContext.Provider>
    );
}
export const usePosts = () => {
    return useContext(PostsContext)
};

export default Context;