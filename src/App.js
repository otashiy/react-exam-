import { Route, Routes } from "react-router-dom";
import Context from "./contexts/context";
import AddPosts from "./screens/add-posts/add-posts";
import EditPosts from "./screens/edit-posts/edit-posts";
import Main from "./screens/main/main";
import NotFound from "./screens/not-found/not-found";


function App() {
  return (
<Context>
<Routes>
<Route path="/" element={<Main />} />
<Route path="/add-posts/:id" element={<AddPosts />} />
<Route path="/edit/:id" element={<EditPosts />} />
<Route path="*" element={<NotFound />} />
</Routes>
</Context>
  );
  
}

export default App;
