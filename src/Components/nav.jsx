
import { NavLink } from "solid-app-router";
import { createSignal } from "solid-js"
import "tailwindcss/tailwind.css";


function Nav() {

  // date
  const date = () =>(()=>{
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return today = `${ mm }-${ dd }-${ yyyy }`;
  })

  return(
    <nav >
      <h4 class='
      bg-gray-200
        pl-4 h-auto text-center 
        lg:text-left
        text-2xl 
        font-bold' >
        My Todolist 
        <p class='text-red-900'> { date } </p>
      </h4>
      <NavLink href="/" class='m-2'>
        List
      </NavLink>
      <NavLink href="/calender" class='m-2'>
        calender
      </NavLink>
    </nav>
  )
}

export default Nav