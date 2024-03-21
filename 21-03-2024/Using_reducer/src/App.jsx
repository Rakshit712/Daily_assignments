import {createBrowserRouter, RouterProvider,Outlet} from 'react-router-dom'

import './App.css'
import SignIn from './pages/SignIn'
import LogIn from './pages/LogIn'


const routes = [
  {
    path: '/',
    element : <SignIn/>
  },
  {path: '/logIn',
  element : <LogIn/>}
]
const router = createBrowserRouter(routes);

function App() {


  return (
    <RouterProvider router = {router}/>
  )
}

export default App







