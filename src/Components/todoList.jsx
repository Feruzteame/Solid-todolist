import { createSignal, createContext, useContext } from "solid-js";

const TodoListContext = createContext();

export function TodoListProvider(props) {

  const [list, setList] = createSignal([])

  const todoList = [
    list,{
      // Add list
      handleSubmit(e){
        e.preventDefault()
        const formData = new FormData(e.target)
        const props = Object.fromEntries(formData)

        if(props.list == "") {
          alert('pls add content.')
        }else{
          setList([...list(), props.list])
          e.target.reset();
          }
      } ,

      // delete item 
      deleteItem(x){
        if (confirm(`Are you sure you need to delete from your list? `) == true) {
          setList((list) => list.filter((el) => el !== x));
          }else {
            return;
          }
        }
    }
  ]
  return (
    <TodoListContext.Provider value={todoList}>
      {props.children}
    </TodoListContext.Provider>
  )
};

export function useTodoList() { return useContext(TodoListContext); }
