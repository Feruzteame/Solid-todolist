import { NavLink } from 'solid-app-router';

 export default function Navigation() {

  function currentDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return( `${ mm }-${ dd }-${ yyyy }`);
  }

  return(
    <nav>
      <h4 class='
      bg-gray-200
      pl-4 h-auto text-center
      lg:text-left
      text-2xl
      font-bold'>
      My list
        <p class='text-red-900'>
          { currentDate }
        </p>
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