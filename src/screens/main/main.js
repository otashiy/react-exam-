import { Link } from "react-router-dom";

const Main = () => {
    return (
   <>
    <h1>Main</h1>
    <Link to={"/add-posts/1"}>
    Kettu
    </Link>
   </>
    );
}

export default Main;