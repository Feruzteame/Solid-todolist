import { createSignal, createEffect } from "solid-js";
import "tailwindcss/tailwind.css";
import { useList } from '../Components/todoList'

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
