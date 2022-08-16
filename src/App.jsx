import { Routes, Route } from 'solid-app-router'

import 'tailwindcss/tailwind.css';

import ToDoListProvider from './components/TodoList';

import AddList from './pages/AddList';
import Calender from './pages/Calender';
import Navigation from './components/Navigation';

export default function App() {
  return(
    <div>
      <Navigation/>
      <ToDoListProvider> 
        <Routes>
          <Route path='/calender' element={ <Calender/> } />;
          <Route path='/' element={ <AddList/> } />;
        </Routes>
      </ToDoListProvider>
    </div>
  );
}
