import { useList } from '../components/ToDoList';

export default function DeleteButton() {

  const [ { deleteItem }] = useList();

  return(
      <div class='flex justify-center w-full font-header h-screen md:text-lg'>
        <button
        class='m-2 w-[20%]'
        onclick={ ()=>deleteItem() }>
        delete
        </button>
      </div>
    );
}