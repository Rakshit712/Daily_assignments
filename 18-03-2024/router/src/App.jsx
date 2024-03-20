import { useState } from 'react'
import Home from "./components/pages/Home.jsx";
import User from "./components/pages/User.jsx";
import Todo from "./components/pages/Todo.jsx";
import Post from "./components/pages/Post.jsx";
import Nav from "./components/Nav.jsx"
import Footer from "./components/Footer.jsx"

import {createBrowserRouter, RouterProvider,Outlet} from 'react-router-dom'
import './App.css'

const routes = [
  {
    path: '/',
    element :(
      <div>
        <Nav/>
        <Outlet/>
        <Footer/>
      </div>
    ),
    children :[
      {
        index :true,
        element: <Home/>
      },
      {
        path : '/users',
        element:<User/>
      },
      {
        path : '/todos',
        element: <Todo/>
      },
      {
        path : '/posts',
        element: <Post/> 
      }
    ]

  }

]

const router = createBrowserRouter(routes)

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router = {router}/>
  )
}

export default App
