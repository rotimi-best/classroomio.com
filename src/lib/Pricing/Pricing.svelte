<script>
  import Checkmark from 'carbon-icons-svelte/lib/Checkmark.svelte';

  let prices = false;

  function handlePriceChange() {
    prices = !prices;
  }

  const proFeatures = [
    '10 Courses',
    'Unlimited Students',
    '1 Admin',
    'Basic Course Builder',
    '10 Forum conversations',
    'Remove ClassroomIO Badge',
  ];
  const teamFeatures = [
    'Unlimited Courses',
    'Unlimited Students',
    '5 Admin',
    'Full Course Builder',
    'Unlimited Forum conversations',
    'AI Video transcription',
  ];
</script>

<section id="pricing" class="py-[12%]">
  <div class=" px-[6%] lg:px-[22%] flex flex-col justify-center items-center">
    <div class="text-center mb-[3%]">
      <h3
        id="pricing"
        class="inter text-[#1D4EE2] text-md font-semibold tracking-wide"
      >
        Pricing
      </h3>
      <h1
        class="my-5 lg:my-4 font-semibold tracking-tight text-gray-900 text-3xl lg:text-4xl"
      >
        For teams and individuals
      </h1>
      <p
        class="inter mt-4 text-lg text-gray-500 tracking-normal lg:tracking-wide"
      >
        Customizable LMS, AI integration for productive educators and many
        more...
      </p>
    </div>

    <div
      class="flex items-center border-[2px] rounded-[30px] p-[2px] relative lg:scale-100 mt-10 lg:mt-0"
    >
      <button
        style="background-color: {prices
          ? 'initial'
          : '#1D4EE2'}; color: {prices ? '#777E8A' : '#fff'}"
        class="bg-[#1D4EE2] text-white rounded-[30px] py-1 px-3 lg:py-2 lg:px-4 inter text-xs"
        on:click={handlePriceChange}>Monthly</button
      >
      <button
        style="background-color: {prices ? '#1D4EE2' : ''}; color: {prices
          ? '#fff'
          : '#777E8A'}"
        class="text-white rounded-[30px] py-1 lg:py-2 px-3 lg:px-4 inter text-xs"
        on:click={handlePriceChange}>Annually</button
      >
      <div
        class="absolute top-[-60%] right-[-40%] lg:top-[-45%] lg:right-[-33%] bg-green-600 border border-green-700 text-xs text-white px-3.5 py-1.5 rounded-full scale-[90%] lg:scale-100"
      >
        Save 17%
      </div>
    </div>

    <div class="isolate mt-10 grid gap-10 grid-cols-1 lg:grid-cols-2">
      <!-- card 1 -->
      <div
        class="ring-gray-200 rounded-3xl p-8 ring-1 xl:p-9 max-w-xl lg:max-w-sm"
      >
        <h3 class="text-gray-900 text-lg lg:text-xl font-semibold leading-8">
          Pro
        </h3>
        <p
          class="text-gray-500 font-light mt-4 text-sm lg:text-md leading-6 lg:leading-6 inter"
        >
          Advanced features for small teaching businesses
        </p>
        <h1
          class="mt-6 flex items-baseline gap-x-1 text-4xl lg:text-4xl font-medium inter"
        >
          ${prices ? '10' : '12'} <sub class="text-base">/mo</sub>
        </h1>
        <a href="https://cal.com/digdippa/30min" target="_blank">
          <button
            class="font-medium lg:font-semibold text-md lg:text-lg text-white py-3 lg:py-3 w-full bg-slate-900 hover:bg-slate-700 rounded-md lg:rounded-xl mt-10 inter"
          >
            Get started
          </button>
        </a>
        <ul class="text-gray-600 mt-8 space-y-2 lg:space-y-5 text-sm xl:mt-10">
          {#each proFeatures as proFeature}
            <li class="flex items-center">
              <Checkmark
                size={24}
                fill="#1D4EE2"
                class="mr-2 lg:mr-3 scale-[70%] lg:scale-[100%]"
              />
              {proFeature}
            </li>
          {/each}
        </ul>
      </div>

      <!-- card 2 -->
      <div class="bg-gray-900 rounded-3xl p-8 xl:p-9 max-w-xl lg:max-w-lg">
        <h3 class="text-white text-lg lg:text-xl font-semibold leading-8">
          Team
        </h3>
        <p
          class="text-white font-light mt-4 text-sm lg:text-md leading-6 lg:leading-6 inter"
        >
          Key features for teams and larger businesses
        </p>
        <h1
          class="text-white mt-6 lg:mt-6 flex items-baseline gap-x-1 text-4xl lg:text-4xl font-medium inter"
        >
          ${prices ? '30' : '36'} <sub class="text-base">/mo</sub>
        </h1>
        <a href="https://cal.com/digdippa/30min" target="_blank">
          <button
            class="font-medium lg:font-semibold text-md lg:text-lg text-slate-900 py-3 lg:py-3 w-full bg-white hover:bg-indigo-50 rounded-md lg:rounded-xl mt-10 inter"
          >
            Get Started
          </button>
        </a>
        <ul
          class="text-white mt-8 space-y-3 font-light lg:space-y-5 text-sm xl:mt-10"
        >
          {#each teamFeatures as teamFeature}
            <li class="flex items-center">
              <Checkmark
                size={24}
                fill="#fff"
                class="mr-2 lg:mr-3 scale-[70%] lg:scale-[100%]"
              />
              {teamFeature}
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <div
      class="flex flex-col lg:flex-row items-start lg:items-center mx-auto lg:mx-10 mt-[5%] border-[1px] rounded-[30px] py-[10%] lg:py-[5%] px-[10px] lg:px-[30px] lg:w-full md:max-w-[550px] lg:max-w-full"
    >
      <div class="mr-5 pl-5">
        <h2
          class="text-md lg:text-xl font-semibold font-display leading-8 tracking-wide lg:tracking-tight text-[#1D4EE2] mb-0 lg:mb-4"
        >
          Hobby
        </h2>
        <p
          class="m-0 lg:mt-1 text-md leading-7 lg:leading-6 text-gray-600 inter"
        >
          For personal use. Hobby plan is free for up to 5 courses forever, no
          credit card required.
        </p>
      </div>
      <a href="https://cal.com/digdippa/30min" target="_blank">
        <button
          class="font-semibold text-base lg:text-md text-white leading-5 mt-5 lg:m-0 p-4 lg:py-5 ml-5 bg-[#1D4EE2] rounded-lg lg:rounded-xl inter w-[70%] lg:w-full"
        >
          Create a free account
        </button>
      </a>
    </div>
  </div>
</section>
