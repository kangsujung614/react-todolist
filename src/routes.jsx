import Layout from "@components/Layout";
import About from "@pages/About";
import Home from "@pages/Home";
import TodoAdd from "@pages/TodoAdd";
import TodoDetail from "@pages/TodoDetail";
import TodoEdit from "@pages/TodoEdit";
import TodoList from "@pages/TodoList";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {path: 'home', element: <Home />},
      {path: 'about', element: <About />},
      {path: 'todolist', element: <TodoList />},
      {path: 'tododetail/:id', element: <TodoDetail/>},
      {path: 'todoadd', element: <TodoAdd/>},
      {path: 'todoedit', element: <TodoEdit/>},
    ],
  }
]);

export default router;