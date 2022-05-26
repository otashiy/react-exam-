import { Link, useParams } from "react-router-dom";
import { usePosts } from "../../contexts/context";

const EditPosts = () => {
const { id } = useParams();

const { posts } = usePosts();

let currentPosts = posts.find((post) => {
   return post.id === +id
})
return (
<>
<h1>Edit</h1>
<Link to={"/"}>
To main
</Link>
<article>
<span>{currentPosts.id}</span>
            <h2>{currentPosts.name}</h2>
            <p>{currentPosts.email}</p>
            <p>{currentPosts.body}</p>
</article>
</>
);
}

export default EditPosts;