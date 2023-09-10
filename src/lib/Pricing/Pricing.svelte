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
      class="inter text-[#1D4EE2] text-xl font-semibold leading-5 tracking-wide"
    >
      Pricing
    </h3>
    <h1
      class="my-7 font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
    >
      For teams and individuals
    </h1>
    <p class="inter mt-4 text-2xl text-gray-500 tracking-wider">
      Accurate analytics for Notion content. Real-time updates. Interactive
      widgets.
    </p>
  </div>

  <div
    class="flex justify-evenly items-center w-[12%] border-[1px] rounded-[30px] py-1 relative"
  >
    <button
      style="background-color: {prices ? 'initial' : '#1D4EE2'}; color: {prices
        ? '#777E8A'
        : '#fff'}"
      class="bg-[#1D4EE2] text-white rounded-[30px] py-2 px-4 inter"
      on:click={handlePriceChange}>Monthly</button
    >
    <button
      style="background-color: {prices ? '#1D4EE2' : ''}; color: {prices
        ? '#fff'
        : '#777E8A'}"
      class="rounded-[30px] py-2 px-4 inter"
      on:click={handlePriceChange}>Annually</button
    >
    <div
      class="absolute top-[-45%] right-[-37%] bg-green-600 border border-green-700 text-white px-3.5 py-1.5 rounded-full"
    >
      Save 17%
    </div>
  </div>

  <div class="flex mt-16">
    <!-- card 1 -->
    <div
      class="py-14 px-12 rounded-[30px] border-[1px] max-w-lg max-h-[100vh] mr-14"
    >
      <h3 class="text-gray-900 text-2xl font-semibold font-display leading-8">
        Pro
      </h3>
      <p class="text-gray-600 font-light mt-4 text-lg leading-8 inter">
        Advanced analytics for Notion resource hubs, wikis, and shared pages.
      </p>
      <h1 class="mt-6 flex items-baseline gap-x-1 text-5xl relative inter">
        ${prices ? '10' : '12'} <sub class="text-lg">/mo</sub>
      </h1>
      <button
        class="font-semibold text-xl text-white py-5 w-full bg-slate-900 hover:bg-slate-700 rounded-xl mt-10 inter"
        >Get Started</button
      >
      <ul class="text-gray-600 mt-8 space-y-5 text-sm xl:mt-10 mb-20">
        <li class="flex items-center text-lg">
          <Checkmark size={32} fill="#1D4EE2" class="mr-5" /> Up to 100 pages
        </li>
        <li class="flex items-center text-lg">
          <Checkmark size={32} fill="#1D4EE2" class="mr-5" /> Reaction widgets
        </li>
        <li class="flex items-center text-lg">
          <Checkmark size={32} fill="#1D4EE2" class="mr-5" /> Tracking widget customization
        </li>
        <li class="flex items-center text-lg">
          <Checkmark size={32} fill="#1D4EE2" class="mr-5" /> Watermark removal
        </li>
      </ul>
    </div>

    <!-- card 2 -->
    <div
      class="py-14 px-12 rounded-[30px] border-[1px] max-w-lg max-h-[100vh] bg-gray-900"
    >
      <h3 class="text-white text-2xl font-semibold font-display leading-8">
        Team
      </h3>
      <p class="text-white font-light mt-4 text-lg leading-8 inter">
        Key metrics about Notion audience & content, for teams.
      </p>
      <h1 class="text-white mt-6 flex items-baseline gap-x-1 text-5xl inter">
        ${prices ? '30' : '36'} <sub class="text-lg">/mo</sub>
      </h1>
      <button
        class="font-semibold text-xl text-slate-900 py-5 w-full bg-white hover:bg-indigo-50 rounded-xl mt-10 inter"
        >Get Started</button
      >
      <ul class="text-white mt-8 space-y-5 text-sm xl:mt-10">
        <li class="flex items-center text-lg">
          <Checkmark size={32} fill="#fff" class="mr-5" /> Up to 100 pages
        </li>
        <li class="flex items-center text-lg">
          <Checkmark size={32} fill="#fff" class="mr-5" /> Reaction widgets
        </li>
        <li class="flex items-center text-lg">
          <Checkmark size={32} fill="#fff" class="mr-5" /> Tracking widget customization
        </li>
        <li class="flex items-center text-lg">
          <Checkmark size={32} fill="#fff" class="mr-5" /> Watermark removal
        </li>
        <li class="flex items-center text-lg">
          <Checkmark size={32} fill="#fff" class="mr-5" /> Priority customer support
        </li>
        <li class="flex items-center text-lg">
          <Checkmark size={32} fill="#fff" class="mr-5" /> 5 team members
        </li>
      </ul>
    </div>
  </div>

  <div
    class="flex items-center mt-[10%] border-[1px] rounded-[30px] py-[3%] px-[30px]"
  >
    <div class="mr-5 pl-5">
      <h2
        class="text-2xl font-semibold font-display leading-8 tracking-tight text-[#1D4EE2] mb-4"
      >
        Hobby
      </h2>
      <p class="mt-1 text-xl leading-9 text-gray-600 inter">
        For personal use. Hobby plan is free for up to 5 pages, forever, no
        credit card required.
      </p>
    </div>
    <button
      class="font-semibold text-xl text-white leading-5 py-5 mr-3 bg-[#1D4EE2] rounded-xl inter w-[29%]"
      >Create a free account</button
    >
  </div>
</div>
