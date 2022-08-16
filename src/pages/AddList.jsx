import { useToDoList } from '../components/TodoList';

export default function AddList() {

  const [list, { handleSubmit, deleteItem }] = useToDoList();

  return(
    <div class='flex justify-center w-full font-header h-screen md:text-lg'>
      <div class='flex-row justify-center w-full'>
        <div class='bg-red-200'>
          <ul class='flex-row'>
            <For each={ list }>{ (item) =>
              <li class='flex w-full'>
                <p class='m-2 w-[80%]'>
                  { item }
                </p>
                <button
                class='m-2 w-[20%]'
                onclick={ ()=>deleteItem(item) }>
                  delete
                </button>
              </li>
            }</For>
          </ul>
        </div>
        <form onSubmit={ handleSubmit }
        class='flex justify-between'>
          <input
          class='border-solid border-2 w-[20%] m-2'
          type='text'
          maxLength={ 30 }
          name='list'
          placeholder='add your list here .....' />
          <input
          class='border-solid border-2 p-2 m-2 rounded'
          type = 'submit' />
        </form>
      </div> 
    </div>
  );
}
