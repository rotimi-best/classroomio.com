<script>
  import Timer from 'carbon-icons-svelte/lib/Timer.svelte';
  import IbmSecureInfrastructureOnVpcForRegulatedIndustries from 'carbon-icons-svelte/lib/IbmSecureInfrastructureOnVpcForRegulatedIndustries.svelte';
  import Analytics from 'carbon-icons-svelte/lib/Analytics.svelte';
  import Chat from 'carbon-icons-svelte/lib/Chat.svelte';
  import TwoPersonLift from 'carbon-icons-svelte/lib/TwoPersonLift.svelte';
  import WatsonHealth3rdPartyConnected from 'carbon-icons-svelte/lib/WatsonHealth3rdPartyConnected.svelte';
</script>

<div class="mt-[15%] mx-0 lg:mx-[12%]">
  <!-- body section 1 -->
  <div class="w-full flex flex-col lg:flex-row relative">
    <div class="sm:w-full lg:w-2/4 px-7 lg:pl-10 lg:pr-30 mt-10">
      <h2 class="inter text-[#1D4EE2] text-lg font-semibold leading-10">
        Bird's eye view
      </h2>
      <h1
        class="mt-2 lg:text-4xl font-semibold tracking-tighter text-gray-900 sm:text-4xl"
      >
        Key metrics
      </h1>
      <h3
        class="mt-5 mb-10 text-md lg:text-xl text-gray-500 inter tracking-wide sm:leading-5 lg:leading-7"
      >
        See what's going on with your content, and keep your Notion resources
        relevant.
      </h3>
      <p
        class="mt-4 text-md lg:text-md text-gray-500 font-light pl-9 present relative inter tracking-normal lg:tracking-normal leading-7 lg:leading-7"
      >
        <Analytics size={20} class="absolute left-0 top-1 fill-[#1D4EE2]" />
        <b class="text-gray-800 font-bold"> Comprehensive analytics.</b> See what
        works and what doesn't, spot trends, and adjust content accordingly. Bird's
        eye view from one intuitive dashboard.
      </p>
      <p
        class="realTime mt-4 text-md lg:text-md text-gray-500 font-light present relative pl-9 inter tracking-normal lg:tracking-normal leading-7 lg:leading-7"
      >
        <Timer size={24} class="absolute left-0 top-0.5 fill-[#1D4EE2]" />
        <b class="text-gray-800 font-bold"> Real-time updates.</b> No delays, no
        waiting. Just data, as it comes in. With real-time analytics, you can see
        what's happening as it happens.
      </p>
      <p
        class="continuousImprovement mt-4 text-md lg:text-md text-gray-500 font-light present relative pl-9 inter tracking-normal lg:tracking-normal leading-7 lg:leading-7"
      >
        <IbmSecureInfrastructureOnVpcForRegulatedIndustries
          size={20}
          class="absolute left-0 top-1 fill-[#1D4EE2]"
        />
        <b class="text-gray-800 font-bold"> Continuous improvement.</b> You're not
        just tracking usage. Notionlytics offers best-in-class analytics for a reason:
        to keep your Notion documents helpful, on an ongoing basis.
      </p>
    </div>
    <img
      src="/body-1.png"
      alt=""
      class="h-[500px] w-[48rem] lg:h-full max-w-none ml-[7%] mt-[15%] lg:mt-0 lg:w-[65%] lg:mr-[-15.5%] border-[1px] rounded-[30px] shadow-xl"
    />
  </div>

  <!-- body section 2 -->
  <div
    class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 my-[15%] lg:flex-row-reverse"
  >
    <div class="flex items-center justify-end order-2 lg:order-first">
      <img
        src="/body-2.png"
        alt=""
        class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] mr-10 lg:mr-0"
      />
    </div>
    <div class="sm:w-full lg:w-[80%] px-7 lg:pl-[7%] mt-10">
      <div class="max-w-3xl text-left mr-auto">
        <h2 class="inter text-[#1D4EE2] text-base font-semibold leading-10">
          Direct feedback
        </h2>
        <h1
          class="mt-2 text-3xl font-bold font-display tracking-tight text-gray-900 lg:text-4xl"
        >
          Interactive widgets
        </h1>
        <h3 class="mt-4 text-lg inter text-gray-500">
          Let your audience tell you what's useless, and what's actually
          helpful. Anonymously.
        </h3>
      </div>
      <div
        class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"
      >
        <p
          class="feedback mt-4 text-md lg:text-md text-gray-500 font-light present relative pl-8 inter tracking-normal leading-7 lg:leading-7"
        >
          <Chat size={20} class="absolute left-0 top-0.5 fill-[#1D4EE2]" />
          <b class="text-gray-800 font-bold"> Live feedback.</b> Learn directly from
          those who read what you write. Notionlytics widgets are designed to collect
          feedback and show it to you in real-time.
        </p>
        <p
          class="audience mt-4 text-md lg:text-md text-gray-500 font-light present relative pl-8 inter tracking-normal leading-7 lg:leading-7"
        >
          <TwoPersonLift
            size={20}
            class="absolute left-0 top-0.5 fill-[#1D4EE2]"
          />
          <b class="text-gray-800 font-bold"> Audience-centered design.</b> It's
          a win-win. Let others influence and shape the content in a way that makes
          it more valable for them.
        </p>
        <p
          class="seamless mt-4 text-md lg:text-md text-gray-500 font-light present relative pl-8 inter tracking-normal leading-7 lg:leading-7"
        >
          <WatsonHealth3rdPartyConnected
            size={20}
            class="absolute left-0 top-0.5 fill-[#1D4EE2]"
          />
          <b class="text-gray-800 font-bold"> Seamless integration.</b> Effortless
          feedback collection, without disrupting the audience experience. It takes
          seconds to install Notionlytics widgets into Notion content.
        </p>
      </div>
    </div>
  </div>

  <!-- body section 3 -->
  <div
    class="w-full flex flex-col items-start lg:flex-row relative my-[5%] pt-[13%] mt-[8rem] lg:mt-[13%] border-t-[1px]"
  >
    <div class="sm:w-full lg:w-2/4 px-7 lg:pl-10 lg:pr-[10%]">
      <h1
        class="mt-5 text-2xl lg:text-4xl font-semibold font-display tracking-tighter text-gray-900"
      >
        For massive knowledge bases and brief documents
      </h1>
      <h3
        class="mt-5 mb-5 lg:mb-8 text-md lg:text-xl text-gray-500 inter leading-7 lg:leading-7"
      >
        Company wikis. Community resource hubs. Job boards. Event agendas. CVs,
        resumes, and portfolios. Pitch decks. Data rooms. Product roadmaps.
      </h3>
      <p
        class="text-base lg:text-md text-gray-600 font-light inter leading-7 lg:leading-7"
      >
        Compatible with both public and private Notion pages, Notionlytics
        collects metrics and feedback about the content and its usage. Simple
        from the outside, technology-packed on the inside.
      </p>
    </div>
    <img
      src="/body-3.png"
      alt=""
      class="hidden lg:block h-full max-w-none mt-[15%] lg:mt-0 lg:w-[47%] lg:mr-[-23.5%] border-[1px] rounded-[30px] shadow-xl"
    />
  </div>

  <!-- body section 4 -->
  <div
    class="flex flex-col lg:flex-row flex-wrap relative mt-[3%] border-b-[1px] pb-[15%]"
  >
    <img
      src="/body3-1.png"
      alt=""
      class="hidden lg:block border-[1px] rounded-[30px] shadow-xl w-[30%] h-[47%] absolute left-[-15%] bottom-[33%]"
    />
    <img
      src="/body3-2.png"
      alt=""
      class="border-[1px] rounded-[30px] shadow-xl w-[90%] h-full lg:w-[47%] lg:h-[50%] m-0 lg:ml-[17%] lg:mr-[2%] mx-auto lg:mx-0"
    />
    <img
      src="/body3-3.png"
      alt=""
      class="hidden lg:block border-[1px] rounded-[30px] shadow-xl w-[32%] h-[40%]"
    />
  </div>

  <!-- body section 5 -->
  <div
    class="flex justify-between flex-row flex-wrap lg:flex-nowrap items-center text-center px-[10%] py-[7%] border-b-[1px] gap-y-20 gap-x-20"
  >
    <div class="w-full">
      <h2
        class="w-full order-first text-3xl font-semibold inter tracking-tight text-gray-900 sm:text-5xl"
      >
        1 thousand
      </h2>
      <p class="text-base leading-7 text-gray-600 inter">Feedback collected</p>
    </div>
    <div class="w-full">
      <h2
        class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl inter"
      >
        5 thousand
      </h2>
      <p class="text-base leading-7 text-gray-600 inter">Documents processed</p>
    </div>
    <div class="w-full">
      <h2
        class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl inter"
      >
        1 million
      </h2>
      <p class="text-base leading-7 text-gray-600 inter">Page views recorded</p>
    </div>
  </div>
</div>
