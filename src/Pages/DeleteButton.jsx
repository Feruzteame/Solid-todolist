import { useList } from '../components/TodoList'

function deleteButton() {

  const [ { deleteItem }] = useList();

  return (
      <div class='flex justify-center w-full font-header h-screen md:text-lg' >
        <button
          class='m-2 w-[20%]'
          onclick={ ()=>deleteItem() } >
          delete
        </button> 
       </div>
    );
}

export default deleteButton;
