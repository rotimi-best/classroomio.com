<script>
  import { createDropdownMenu, melt } from '@melt-ui/svelte';
  import ChartPie from 'carbon-icons-svelte/lib/ChartPie.svelte';
  import Cursor_2 from 'carbon-icons-svelte/lib/Cursor_2.svelte';
  import ChevronDown from 'carbon-icons-svelte/lib/ChevronDown.svelte';
  import TextAlignJustify from 'carbon-icons-svelte/lib/TextAlignJustify.svelte';
  import CloseLarge from 'carbon-icons-svelte/lib/CloseLarge.svelte';
  import { fade, fly } from 'svelte/transition';

  let showsubNav = false;
  let showNav = false;

  const {
    elements: { menu, item, trigger, arrow },
  } = createDropdownMenu({
    positioning: {
      placement: 'bottom-start',
      fitViewport: true,
    },
  });

  function handleShow() {
    showsubNav = !showsubNav;
  }

  function handleShowNav() {
    showNav = !showNav;
  }
</script>

<div
  class="flex w-full justify-between items-center py-6 border-b-[1px] lg:px-12 md:px-12 px-5 sticky top-0 z-[3000] filter backdrop-blur-md bg-opacity-80 shadow-sm"
>
  <div class="flex items-center">
    <img
      src="/logo-32.png"
      alt="classroomio logo"
      class="w-[15%] md:w-[20%] lg:w-[20%]"
    />
    <h1
      class="text-xs md:text-xl lg:text-xl font-semibold ml-2 lg:ml-5 md:ml-5"
    >
      Notionlytics
    </h1>
  </div>

  <nav class="w-[25%] hidden md:hidden lg:block">
    <ul class="flex items-center justify-between w-full">
      <!--  -->
      <li class="text-gray-800 font-semibold text-base cursor-pointer">
        <button use:melt={$trigger} class="flex items-center"
          >Why Notionlytics? <ChevronDown class="ml-2" /></button
        >
        <div
          use:melt={$menu}
          class="w-[28%] border px-5 py-5 rounded-[30px] shadow-slate-700 mt-10 ml-[-30px] bg-white"
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
      <!--  -->
      <li class="text-gray-800 font-semibold text-base cursor-pointer">
        Use cases
      </li>
      <li class="text-gray-800 font-semibold text-base cursor-pointer">
        Pricing
      </li>
    </ul>
  </nav>

  <div class="justify-between items-center flex-row hidden md:hidden lg:flex">
    <button
      class="bg-[#1D4EE2] text-white font-semibold px-5 py-3 rounded-md mr-10"
      >Sign Up</button
    >
    <button class="font-semibold after:content-['→'] after:ml-2"
      >Dashboard</button
    >
  </div>

  <button class="block md:block lg:hidden" on:click={handleShowNav}
    ><TextAlignJustify size={24} /></button
  >

  <!-- burger menu -->
  {#if showNav}
    <div
      in:fly={{ x: 20, duration: 700 }}
      out:fly={{ x: 20, duration: 400 }}
      class="w-[60%] md:w-[40%] h-[100vh] border-2 sm:block lg:hidden px-3 pt-3 pb-2 md:p-7 absolute right-0 top-0 bg-white"
    >
      <div class="flex justify-between py-2 mb-5">
        <img src="/logo-32.png" alt="classroomio logo" class="w-[8%]" />
        <button on:click={handleShowNav}
          ><CloseLarge size={24} class="mr-5" /></button
        >
      </div>
      <nav class="">
        <ul
          class="flex items-center flex-col lg:flex-row justify-between w-full"
        >
          <!--  -->
          <li
            class="text-gray-800 font-semibold text-sm md:text-lg cursor-pointer w-full"
          >
            <button
              class="w-full flex items-center justify-between hover:bg-gray-300 py-3 px-4 rounded-lg"
              on:click={handleShow}
            >
              Why Notionlytics? <ChevronDown />
            </button>
            {#if showsubNav}
              <div
                in:fly={{ y: -20, duration: 700 }}
                out:fly={{ y: 20, duration: 400 }}
              >
                <p
                  class="font-normal text-xs text-gray-700 hover:bg-gray-300 rounded-lg py-2.5 pl-5"
                >
                  Advanced content analytics
                </p>
                <p
                  class="font-normal text-xs text-gray-600 hover:bg-gray-300 rounded-lg py-2.5 pl-5"
                >
                  Interactice Widgets
                </p>
              </div>
            {/if}
          </li>
          <!--  -->
          <li
            class="text-gray-800 font-semibold text-sm md:text-lg cursor-pointer hover:bg-gray-300 py-3 px-4 rounded-xl w-full"
          >
            Use cases
          </li>
          <li
            class="text-gray-800 font-semibold text-sm md:text-lg cursor-pointer hover:bg-gray-300 py-3 px-4 rounded-xl w-full"
          >
            Pricing
          </li>
        </ul>
      </nav>
      <div class="flex items-start flex-col gap-y-2 mt-5 border-t-[1px] pt-5">
        <button
          class="text-black font-semibold rounded-md mr-10 w-full text-left py-4 px-4 hover:bg-gray-300 text-sm md:text-lg"
          >Sign Up</button
        >
        <button
          class="font-semibold after:content-['→'] rounded-md after:ml-2 w-full text-left py-4 px-4 hover:bg-gray-300 text-sm md:text-lg"
          >Dashboard</button
        >
      </div>
    </div>
  {/if}
</div>
