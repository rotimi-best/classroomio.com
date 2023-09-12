<script>
  import { faqs } from '../../constants';
</script>

<div class="mt-[20%] mb-[15%]">
  <header class="text-center mb-[8%]">
    <h1
      class="mt-2 text-4xl lg:text-5xl font-medium tracking-tight text-gray-900"
    >
      Frequently asked questions
    </h1>
    <h3
      class="px-5 lg:px-[20%] mt-4 text-lg lg:text-2xl text-gray-500 inter font-normal tracking-normal lg:tracking-wide"
    >
      Have a different question and can’t find the answer you’re looking for?
      Reach out to our support team by <span class="text-[#1D4EE2]"
        >sending us an email</span
      > and we’ll get back to you as soon as we can.
    </h3>
  </header>

  <div
    class="flex flex-wrap items-center lg:items-start flex-row gap-10 lg:gap-20 px-[3%] mt-[20%] lg:m-0"
  >
    {#each faqs as faq}
      <div class="max-w-[100%] lg:max-w-[29%] px-4 lg:p-0">
        <h1
          class="text:md lg:text-xl font-semibold leading-8 text-gray-800 inter"
        >
          {faq.question}
        </h1>
        <p
          class="mt-2 text:md lg:text-xl font-thin leading-7 lg:leading-9 text-gray-600 inter tracking-wide"
        >
          {faq.answer}
        </p>
      </div>
    {/each}
  </div>

  <div
    class="relative mt-[10%] grad w-[100%] h-[70vh] flex items-center flex-col justify-center lg:w-[95%] mx-auto py-[12%] text-center shadow-2xl lg:rounded-3xl"
  >
    <h1
      class="mt-3 lg:mt-2 text-3xl lg:text-5xl font-bold font-display tracking-tight text-white"
    >
      Find out what happens after you click "Share"
    </h1>
    <p class="mt-6 text-xl lg:text-2xl text-gray-300 inter">
      Try before you buy. No credit card required.
    </p>
    <button
      class="font-semibold text-md lg:text-xl text-gray-900 bg-white px-6 lg:px-10 py-4 lg:py-5 rounded-xl mt-10 inter"
      >Create a free account</button
    >
  </div>
</div>

<style>
  .grad {
    background: rgb(51, 16, 71);
    background: radial-gradient(
      circle at 50% 100%,
      rgba(51, 16, 71, 1) 1%,
      rgba(2, 0, 36, 1) 100%
    );
    background-size: cover;
  }
</style>
