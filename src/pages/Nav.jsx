import { NavLink } from 'solid-app-router';
import { createSignal } from 'solid-js';
import Theme from './Theme';

 export default function Nav() {

  const changeTitle = () => {
    return window.location.pathname
  }

  return(
    <nav class='flex flex-1 justify-between p-4 border-b-2 border-gray'>
      <div>
        <p class='text-lg'>
          { changeTitle() }
        </p>
      </div>
      <div class=''>
        <NavLink 
        href='/my_list'
        class='bg-indigo-500 text-white m-2 rounded p-2 button'>
          List
        </NavLink>
        <NavLink
        href='/calender'
        class='bg-indigo-500 text-white m-2 rounded p-2 button'>
          calender
        </NavLink>
        <Theme />
      </div>
    </nav>
  )
}