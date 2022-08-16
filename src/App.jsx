import { Routes, Route } from "solid-app-router"
import AddList from "./pages/AddList";
import Calender from './pages/Calender'
import Nav from './components/Nav';
import { TodoListProvider } from './components/TodoList';
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div>
      <Nav/>
      <TodoListProvider> 
        <Routes>
          <Route path='/' element={ <AddList /> } /> 
          <Route path='/calender' element={ <Calender/> } />
        </Routes>
      </TodoListProvider>
    </div>
  );
}

export default App;
