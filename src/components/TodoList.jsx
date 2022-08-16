import { createSignal, createContext, useContext } from 'solid-js';

const ToDoListContext = createContext();

export default function ToDoListProvider(props) {

  const [list, setList] = createSignal([]);

  const toDoList = [
    list,{
      handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        if (data.list) {
          setList([...list(), data.list]) && e.target.reset();
        } else {
          alert('pls add content.');
        }
      } ,
      deleteItem(x){
        if (confirm(`Are you sure you need to delete from your list?`)) {
          setList((list) => list.filter((el) => el !== x));
          }else {
            return;
          }
        }
    }
  ]
  return(
    <ToDoListContext.Provider value={toDoList}>
      {props.children}
    </ToDoListContext.Provider>
  )
};

export function useToDoList() {
  return useContext(ToDoListContext);
}
