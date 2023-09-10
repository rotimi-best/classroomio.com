<script>
  import { faqs } from '../../constants';
</script>

<div class="mt-[20%] mb-[15%]">
  <header class="text-center mb-[8%]">
    <h1 class="mt-2 text-5xl font-medium tracking-tight text-gray-900">
      Frequently asked questions
    </h1>
    <h3
      class="px-[20%] mt-4 text-2xl text-gray-500 inter font-normal tracking-wide"
    >
      Have a different question and can’t find the answer you’re looking for?
      Reach out to our support team by <span class="text-[#1D4EE2]"
        >sending us an email</span
      > and we’ll get back to you as soon as we can.
    </h3>
  </header>

  <div class="flex flex-wrap flex-row gap-20 px-[3%]">
    {#each faqs as faq}
      <div class="max-w-[29%]">
        <h1 class="text-xl font-semibold leading-8 text-gray-800 inter">
          {faq.question}
        </h1>
        <p
          class="mt-2 text-xl font-thin leading-9 text-gray-600 inter tracking-wide"
        >
          {faq.answer}
        </p>
      </div>
    {/each}
  </div>

  <div
    class="relative mt-[10%] bg-gray-900 w-[95%] mx-auto py-[12%] text-center shadow-2xl sm:rounded-3xl"
  >
    <h1 class="mt-2 text-5xl font-bold font-display tracking-tight text-white">
      Find out what happens after you click "Share"
    </h1>
    <p class="mt-6 text-2xl text-gray-300 inter">
      Try before you buy. No credit card required.
    </p>
    <button
      class="font-semibold text-xl text-gray-900 bg-white px-10 py-5 rounded-xl mt-10"
      >Create a free account</button
    >
  </div>
  <img src="/gradient-circle.svg" alt="" class="w-full" />
</div>
