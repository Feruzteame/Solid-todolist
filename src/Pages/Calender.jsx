import { createSignal, createEffect } from 'solid-js';

export default function Calender() {

  const [holiday, setHoliday] = createSignal([]);

  createEffect(
    async() => {
      const res = await fetch('https://www.gov.uk/bank-holidays.json');
      const data = await res.json();
      setHoliday(data.scotland.events);
    }
  )

  return(
    <div class='w-full h-screen md:text-lg'>
      <section class='flex-row'>
        <For each={ holiday() }>
          {(day) => (
            <div class='border-solid border-2 w-[20%] p-4'>
              <p>
                { day.date }
              </p>
              <p>
                { day.title }
              </p>
            </div>
          )}
        </For>
      </section>
    </div>
    );
}