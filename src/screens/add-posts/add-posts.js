import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usePosts } from "../../contexts/context";


const AddPosts = () => {

const navigate = useNavigate();
const { posts, setPosts } = usePosts();

const [titleValue, setTitle] = useState("");
const [emailValue, setEmail] = useState("");
const [bodyValue, setBody] = useState("");

const titleChange = (evt) => {
setTitle(evt.target.value);
}
const emailChange = (evt) => {
    setEmail(evt.target.value);
}
 const bodyChange = (evt) => {
        setBody(evt.target.value);
}

const handleFormSubmit = () => {
    setPosts([
        {
          id: Math.floor(Math.random() * 1000),
          name: titleValue,
          email: emailValue,
          body: bodyValue
        },
        ...posts
      ]);
}


 return (
<>
<h1>Add-posts</h1>
<form onClick={handleFormSubmit}>
<label htmlFor="#">
<input value={titleValue} onChange={titleChange} type="text" placeholder="Type your name" />
</label>
<label htmlFor="#">
<input value={emailValue} onChange={emailChange} type="email" placeholder="E-mail" />
</label>
<label htmlFor="#">
<textarea value={bodyValue} onChange={bodyChange} name="text" cols="20" rows="5" placeholder="Add comments..."></textarea>
</label>
<button onClick={() => navigate("/")} type="submit">Add</button>
</form>
</>
 );
}

export default AddPosts;

