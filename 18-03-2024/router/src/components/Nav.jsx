import { NavLink } from "react-router-dom";

const active = ({isActive})=>{
    return isActive ? 'active' : '';
};

function Nav (){
    return(
        <nav className="nav">
            <NavLink id='items' className={active} to= '/'>Home</NavLink>
            <NavLink id='items' className={active} to= '/users'>User</NavLink>
            <NavLink id='items' className={active} to= '/todos'>Todo</NavLink>
            <NavLink id='items' className={active} to= '/posts'>Post</NavLink>

        </nav>
    )
}
export default Nav;