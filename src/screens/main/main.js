import { Link } from "react-router-dom";
import { usePosts } from "../../contexts/context";

const Main = () => {

const { posts } = usePosts();

    return (
   <>
    <h1>Main</h1>
    <Link to={"/add-posts/1"}>
    Add posts
    </Link>
    <ul>
       {posts && posts.map( (post) => {
        return (
        <article key={post.id}>
            <span>{post.id}</span>
            <Link to={`/edit/${post.id}`}>{post.name}</Link>
            <p>{post.email}</p>
            <p>{post.body}</p>
        </article>
        );
       })}
    </ul>
   </>
    );
}

export default Main;