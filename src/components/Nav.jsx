import { NavLink } from 'solid-app-router';
import Theme from '../pages/Theme';

 export default function Nav() {

  const currentDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return(`${ mm }-${ dd }-${ yyyy }`);
  }

  const currentTime = () => {
    const today = new Date();
    const time = today.toLocaleTimeString();
    return (time);
  }

  return(
    <nav class='flex justify-center w-full'>
      <div>
        <h4 class='
        bg-gray-200
        h-auto text-center
        lg:text-left
        text-2xl
        font-bold'>
          My list
        </h4>
        <h3 class='
        bg-gray-200
        h-auto text-center
        text-sm
        font-bold'>
          { currentDate }
        </h3>
        <p>
          { currentTime }
        </p>
      </div>
      <div class=''>
        <NavLink href='/' class='m-2'>
          List
        </NavLink>
        <NavLink href='/calender' class='m-2'>
          calender
        </NavLink>
        <Theme/>
      </div>
    </nav>
  )
}