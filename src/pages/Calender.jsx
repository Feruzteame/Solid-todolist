import { createSignal, createEffect } from 'solid-js';
import { useMode } from '../components/ThemeMode'

export default function Calender() {

  const [holiday, setHoliday] = createSignal([]);
  const [isLight] = useMode();

  createEffect(
    async() => {
      const res = await fetch('https://www.gov.uk/bank-holidays.json');
      const data = await res.json();
      setHoliday(data.scotland.events);
    }
  )

  return(
    <div class='flex-row p-8'>
      <article class='flex flex-wrap-reverse'>
        <For each={ holiday() }>
          {(day) => (
            <section class={`border-2 ${[isLight() ? 'border-indigo-300' :'border-orange-300']} m-2 p-2 w-48 rounded drop-shadow-lg shadow-inner`} >
              <p>
                { day.date }
              </p>
              <p>
                { day.title }
              </p>
            </section>
          )}
        </For>
      </article>
    </div>
  );
}