<script>
  import Checkmark from 'carbon-icons-svelte/lib/Checkmark.svelte';

  let prices = false;

  function handlePriceChange() {
    prices = !prices;
  }
</script>

<div class="my-[12%] flex flex-col justify-center items-center">
  <div class="text-center mb-[7%]">
    <h3
      class="inter text-[#1D4EE2] text-md lg:text-xl font-semibold leading-5 tracking-wide"
    >
      Pricing
    </h3>
    <h1
      class="my-5 lg:my-7 font-semibold tracking-tight text-gray-900 text-3xl px-5 lg:p-0 lg:text-5xl"
    >
      For teams and individuals
    </h1>
    <p
      class="inter mt-4 px-5 lg:p-0 text-lg lg:text-2xl text-gray-500 tracking-normal lg:tracking-wider"
    >
      Accurate analytics for Notion content. Real-time updates. Interactive
      widgets.
    </p>
  </div>

  <div
    class="flex justify-between lg:justify-evenly items-center max-w-[51%] lg:w-[12%] border-[2px] rounded-[30px] px-1 py-1 lg:py-1.5 lg:px-0 relative scale-[80%] lg:scale-100"
  >
    <button
      style="background-color: {prices ? 'initial' : '#1D4EE2'}; color: {prices
        ? '#777E8A'
        : '#fff'}"
      class="bg-[#1D4EE2] text-white rounded-[30px] py-1 lg:py-2 px-3 lg:px-4 inter"
      on:click={handlePriceChange}>Monthly</button
    >
    <button
      style="background-color: {prices ? '#1D4EE2' : ''}; color: {prices
        ? '#fff'
        : '#777E8A'}"
      class="text-white rounded-[30px] py-1 lg:py-2 px-3 lg:px-4 inter"
      on:click={handlePriceChange}>Annually</button
    >
    <div
      class="absolute top-[-45%] right-[-37%] bg-green-600 border border-green-700 text-white px-3.5 py-1.5 rounded-full scale-[80%] lg:scale-100"
    >
      Save 17%
    </div>
  </div>

  <div class="flex flex-wrap mt-16">
    <!-- card 1 -->
    <div
      class="py-10 lg:py-14 px-8 lg:px-12 mx-auto rounded-xl lg:rounded-[30px] border-[1px] max-w-[85%] lg:max-w-lg max-h-[100vh] mb-10 lg:mr-14"
    >
      <h3 class="text-gray-900 text-lg lg:text-2xl font-semibold leading-8">
        Pro
      </h3>
      <p
        class="text-gray-500 font-light mt-4 text-sm lg:text-lg leading-6 lg:leading-8 inter"
      >
        Advanced analytics for Notion resource hubs, wikis, and shared pages.
      </p>
      <h1 class="mt-6 flex items-baseline gap-x-1 text-4xl lg:text-5xl inter">
        ${prices ? '10' : '12'} <sub class="text-lg">/mo</sub>
      </h1>
      <button
        class="font-medium lg:font-semibold text-md lg:text-xl text-white py-3 lg:py-5 w-full bg-slate-900 hover:bg-slate-700 rounded-md lg:rounded-xl mt-10 inter"
        >Get Started</button
      >
      <ul
        class="text-gray-600 mt-8 space-y-5 text-sm xl:mt-10 sm:mb-8 lg:mb-20"
      >
        <li class="flex items-center text-md lg:text-lg">
          <Checkmark
            size={32}
            fill="#1D4EE2"
            class="mr-2 lg:mr-5 scale-[70%] lg:scale-[100%]"
          /> Up to 100 pages
        </li>
        <li class="flex items-center text-md lg:text-lg">
          <Checkmark
            size={32}
            fill="#1D4EE2"
            class="mr-2 lg:mr-5 scale-[70%] lg:scale-[100%]"
          /> Reaction widgets
        </li>
        <li class="flex items-center text-md lg:text-lg">
          <Checkmark
            size={32}
            fill="#1D4EE2"
            class="mr-2 lg:mr-5 scale-[70%] lg:scale-[100%]"
          /> Tracking widget customization
        </li>
        <li class="flex items-center text-md lg:text-lg">
          <Checkmark
            size={32}
            fill="#1D4EE2"
            class="mr-2 lg:mr-5 scale-[70%] lg:scale-[100%]"
          /> Watermark removal
        </li>
      </ul>
    </div>

    <!-- card 2 -->
    <div
      class="py-10 lg:py-14 px-8 lg:px-12 mx-auto rounded-xl lg:rounded-[30px] border-[1px] max-w-[85%] lg:max-w-lg max-h-[100vh] mb-10 lg:mr-14 bg-gray-900"
    >
      <h3 class="text-white text-lg lg:text-2xl font-semibold leading-8">
        Team
      </h3>
      <p
        class="text-white font-light mt-4 text-sm lg:text-lg leading-6 lg:leading-8 inter"
      >
        Key metrics about Notion audience & content, for teams.
      </p>
      <h1
        class="text-white mt-6 flex items-baseline gap-x-1 text-4xl lg:text-5xl inter"
      >
        ${prices ? '30' : '36'} <sub class="text-lg">/mo</sub>
      </h1>
      <button
        class="font-medium lg:font-semibold text-md lg:text-xl text-slate-900 py-3 lg:py-5 w-full bg-white hover:bg-indigo-50 rounded-md lg:rounded-xl mt-10 inter"
        >Get Started</button
      >
      <ul class="text-white mt-8 space-y-5 text-sm xl:mt-10 sm:mb-8 lg:mb-20">
        <li class="flex items-center text-md lg:text-lg">
          <Checkmark
            size={32}
            fill="#fff"
            class="mr-2 lg:mr-5 scale-[70%] lg:scale-[100%]"
          /> Up to 100 pages
        </li>
        <li class="flex items-center text-md lg:text-lg">
          <Checkmark
            size={32}
            fill="#fff"
            class="mr-2 lg:mr-5 scale-[70%] lg:scale-[100%]"
          /> Reaction widgets
        </li>
        <li class="flex items-center text-md lg:text-lg">
          <Checkmark
            size={32}
            fill="#fff"
            class="mr-2 lg:mr-5 scale-[70%] lg:scale-[100%]"
          /> Tracking widget customization
        </li>
        <li class="flex items-center text-md lg:text-lg">
          <Checkmark
            size={32}
            fill="#fff"
            class="mr-2 lg:mr-5 scale-[70%] lg:scale-[100%]"
          /> Watermark removal
        </li>
        <li class="flex items-center text-md lg:text-lg">
          <Checkmark
            size={32}
            fill="#fff"
            class="mr-2 lg:mr-5 scale-[70%] lg:scale-[100%]"
          /> Priority customer support
        </li>
        <li class="flex items-center text-md lg:text-lg">
          <Checkmark
            size={32}
            fill="#fff"
            class="mr-2 lg:mr-5 scale-[70%] lg:scale-[100%]"
          /> 5 team members
        </li>
      </ul>
    </div>
  </div>

  <div
    class="flex flex-col lg:flex-row items-start lg:items-center mx-7 lg:mx-10 mt-[10%] border-[1px] rounded-[30px] py-[10%] lg:py-[3%] px-[10px] lg:px-[30px]"
  >
    <div class="mr-5 pl-5">
      <h2
        class="text-md lg:text-2xl font-semibold font-display leading-8 tracking-wide lg:tracking-tight text-[#1D4EE2] mb-0 lg:mb-4"
      >
        Hobby
      </h2>
      <p
        class="m-0 lg:mt-1 text-md lg:text-xl leading-7 lg:leading-9 text-gray-600 inter"
      >
        For personal use. Hobby plan is free for up to 5 pages, forever, no
        credit card required.
      </p>
    </div>
    <button
      class="font-semibold text-base lg:text-xl text-white leading-5 mt-8 py-4 lg:py-5 ml-5 lg:mr-3 bg-[#1D4EE2] rounded-lg lg:rounded-xl inter w-[70%] lg:w-[29%]"
      >Create a free account</button
    >
  </div>
</div>
