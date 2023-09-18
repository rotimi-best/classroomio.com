<script>
  import ImageCompare from './ImageCompare.svelte';
  import { PUBLIC_ENABLE_USERS_COMPANIES } from '$env/static/public';
</script>

<div class="text-center mt-[30%] md:mt-36 border-b-2 relative">
  <h1
    class="mx-auto text-3xl md:text-4xl lg:text-7xl font-normal leading-[1.2] text-slate-900"
  >
    The LMS with <br />
    <span class="text-[#1D4EE2] relative"
      >Superpowers <svg
        aria-hidden="true"
        viewBox="0 0 418 42"
        class="absolute left-0 top-2/3 h-[0.58em] fill-indigo-300/70"
        preserveAspectRatio="none"
        ><path
          d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
        /></svg
      ></span
    >
  </h1>

  <p
    class="inter mx-auto mt-10 lg:mt-6 px-4 lg:p-0 text-md md:text-xl lg:text-2xl tracking-wide leading-6 lg:leading-10 text-slate-700 md:w-2/4"
  >
    ClassroomIO is your all-in-one place<br /> for teaching & learning.We empowers
    educators build, automate and enrich learning experiences in and outside the
    classroom.
  </p>
  <a href="https://cal.com/digdippa/30min" target="_blank">
    <button
      class="font-medium lg:font-semibold text-sm md:text-md lg:text-xl text-white px-6 py-3 lg:px-10 lg:py-5 bg-[#1D4EE2] rounded-md lg:rounded-xl mt-10"
    >
      <!-- Create a free account -->
      Book a Demo
    </button>
  </a>

  <div class="relative my-10 md:my-20">
    <!-- <ImageCompare
      before="https://koxqonvbkeakwvmdegcf.supabase.co/storage/v1/object/public/avatars/landingpage/courses-light-mode.png"
      after="https://koxqonvbkeakwvmdegcf.supabase.co/storage/v1/object/public/avatars/landingpage/courses-dark-mode.png"
    /> -->
    <video
      class="floating w-[85%] lg:w-[70%] mx-auto my-[7%] rounded-xl"
      autoplay
      loop
      muted
      defaultMuted
      playsinline
      oncontextmenu="return false;"
      preload="auto"
    >
      <source
        src="https://koxqonvbkeakwvmdegcf.supabase.co/storage/v1/object/public/avatars/landingpage/dark-light-mode-demo.mp4"
        type="video/mp4"
      />
      <track kind="captions" />
    </video>
  </div>

  {#if PUBLIC_ENABLE_USERS_COMPANIES}
    <div class="px-[15%] mb-[10%]">
      <h2 class="inter text-base lg:text-xl font-semibold text-gray-900">
        Used at
      </h2>
      <div
        class="w-full flex flex-wrap flex-row gap-5 justify-between items-center py-[5%]"
      >
        <img src="/hero-1.svg" alt="" class="w-[30%] lg:w-[13%]" />
        <img src="/hero-2.svg" alt="" class="w-[30%] lg:w-[13%]" />
        <img src="/hero-3.svg" alt="" class="w-[30%] lg:w-[13%]" />
        <img src="/hero-4.svg" alt="" class="w-[30%] lg:w-[13%]" />
        <img src="/hero-5.svg" alt="" class="w-[30%] lg:w-[13%]" />
      </div>
    </div>
  {/if}
</div>
