import { Link } from "react-router-dom";

const AddPosts = () => {
 return (
<>
<h1>Add-posts</h1>
<Link to={"/edit-posts/1"}>
Editga kettu
</Link>
</>
 );
}

export default AddPosts;