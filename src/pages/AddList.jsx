import { useToDoList } from '../components/TodoList';
import { useMode } from '../components/ThemeMode'

export default function AddList() {

  const [list, { handleSubmit, deleteItem }] = useToDoList();
  const [isLight] = useMode();

  return(
    <div class='flex flex-1 p-4 min-h-screen w-full bg-whitesmoke'>
      <div class='flex space-between w-full pl-12 pr-20'>
        <div class='p-4 flex-1'>
          <ul class='flex-row'>
            <For each={ list() }>{ (item) =>
              <li
              class='flex-row space-between w-auto'>
                <input
                class={`
                list
                border-b-2 w-56 m-2
                ${[isLight() ? 'bg-white border-indigo-500' : 'bg-black border-orange-500']}` }
                value={ item } />
                <button
                class='m-2'
                onclick={ ()=>deleteItem(item) }>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                  </svg>
                </button>
              </li>
            }</For>
          </ul>
        </div>
        <form onSubmit={ handleSubmit }
        class=''>
          <input
          class={`
          border-2 m-4 rounded w-48 p-1
          ${[isLight() ? 'bg-whitesmoke border-indigo-500' : 'bg-black border-orange-500']}`}
          type='text'
          maxLength={ 30 }
          name='list'
          placeholder='add your list here .....' />
          <input
          class='button bg-indigo-500 text-white m-4 rounded p-1'
          type ='submit' />
        </form>
      </div>
    </div>
  );
}
