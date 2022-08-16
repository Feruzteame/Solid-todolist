import { Routes, Route } from "solid-app-router"
import AddList from "./Pages/AddList";
import Calender from './Pages/Calender'
import Nav from './Components/nav';
import { TodoListProvider } from './Components/todoList';

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
