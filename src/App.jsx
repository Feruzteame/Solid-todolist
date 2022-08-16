import { Routes, Route } from 'solid-app-router'

import 'tailwindcss/tailwind.css';

import ToDoListProvider from './components/ToDoList';

import AddList from './pages/AddList';
import Calender from './pages/Calender';
import Nav from './components/Nav';

export default function App() {
  return(
    <div>
      <Nav/>
      <ToDoListProvider> 
        <Routes>
          <Route path='/calender' element={ <Calender/> } />;
          <Route path='/' element={ <AddList/> } />;
        </Routes>
      </ToDoListProvider>
    </div>
  );
}
