import { Routes, Route } from 'solid-app-router'

import 'tailwindcss/tailwind.css';

import { ToDoListProvider } from './components/TodoList';
import { ThemeModeProvider } from './components/ThemeMode'

import AddList from './pages/AddList';
import Calender from './pages/Calender';
import Nav from './pages/Nav';

export default function App() {

  const addListPage = () =>
    <ToDoListProvider>
      <AddList/>
    </ToDoListProvider>
  
  return(
    <div>
      <ThemeModeProvider>
        <Nav/>
        <Routes>
          <Route path='/calender' element={ <Calender/> } />;
          <Route path='/my_list' element={ addListPage } />;
        </Routes>
      </ThemeModeProvider>
    </div>
  );
}