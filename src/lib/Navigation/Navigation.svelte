<script>
  import { createDropdownMenu, melt } from '@melt-ui/svelte';
  import ChartPie from 'carbon-icons-svelte/lib/ChartPie.svelte';
  import Cursor_2 from 'carbon-icons-svelte/lib/Cursor_2.svelte';
  import ChevronDown from 'carbon-icons-svelte/lib/ChevronDown.svelte';

  const {
    elements: { menu, item, trigger, arrow },
  } = createDropdownMenu({
    positioning: {
      placement: 'bottom-start',
      fitViewport: true,
    },
  });
</script>

<div
  class="flex w-full justify-between items-center py-6 border-b-[1px] px-12 sticky top-0 z-20 filter backdrop-blur-md bg-opacity-80 shadow-sm"
>
  <div class="flex items-center">
    <img src="/logo-32.png" alt="classroomio logo" />
    <h1 class="text-xl font-semibold ml-5">Notionlytics</h1>
  </div>

  <nav class="w-[25%]">
    <ul class="flex items-center justify-between w-full">
      <li class="text-gray-800 font-semibold text-base cursor-pointer">
        <button use:melt={$trigger} class="flex items-center"
          >Why Notionlytics? <ChevronDown class="ml-2" /></button
        >
        <div
          use:melt={$menu}
          class="w-[28%] border px-5 py-5 rounded-[30px] shadow-slate-700 mt-3 ml-[-30px] z-20 bg-white"
        >
          <div
            use:melt={$item}
            class="flex justify-between items-center w-full rounded-lg hover:fill-blue-300 hover:bg-slate-100 p-5 mb-4"
          >
            <ChartPie size={32} />
            <div class="w-[86%]">
              <h3 class="font-semibold text-base text-gray-700">
                Advanced content analytics
              </h3>
              <p class="font-normal text-base text-gray-600">
                Understand what's helpful and what isn't
              </p>
            </div>
          </div>
          <div
            use:melt={$item}
            class="flex justify-between items-center w-full hover:bg-slate-100 rounded-lg p-5"
          >
            <Cursor_2 size={32} />
            <div class="w-[86%]">
              <h3 class="font-semibold text-base text-gray-700">
                Interactice Widgets
              </h3>
              <p class="font-normal text-base text-gray-600">
                Recieve direct feedback about your content
              </p>
            </div>
          </div>
          <div use:melt={$arrow} />
        </div>
      </li>
      <li class="text-gray-800 font-semibold text-base cursor-pointer">
        Use cases
      </li>
      <li class="text-gray-800 font-semibold text-base cursor-pointer">
        Pricing
      </li>
    </ul>
  </nav>

  <div class="flex justify-between items-center">
    <button
      class="bg-[#1D4EE2] text-white font-semibold px-5 py-3 rounded-md mr-10"
      >Sign Up</button
    >
    <button class="font-semibold after:content-['→'] after:ml-2"
      >Dashboard</button
    >
  </div>
</div>
