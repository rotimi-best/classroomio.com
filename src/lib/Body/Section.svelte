<script>
  export let id = '';
  export let rightToLeft = false;
  export let tagline = '';
  export let title = '';
  export let description = '';
  export let video = '';
</script>

<section
  {id}
  class="w-full py-32 border-b border-x-0 border-t-0 border-gray-200"
>
  <div
    class="w-4/5 mx-auto flex flex-col {rightToLeft
      ? 'lg:flex-row-reverse'
      : 'lg:flex-row'} items-center justify-between gap-28"
  >
    <div class="w-[80vw] flex flex-col">
      <div class="my-4 ml-1 flex gap-3">
        <p class="font-medium text-md">{tagline}</p>
      </div>
      <h2 class="font-bold text-4xl mb-6">{title}</h2>
      <p class="leading-8 text-lg text-gray-500">
        {description}
      </p>
      {#if $$slots.more}
        <br />

        <p class="leading-8 text-lg text-gray-500">
          <slot name="more" />
        </p>
      {/if}

      <a
        href="https://cal.com/digdippa/30min"
        target="_blank"
        class="my-6 font-bold"
      >
        <span style="color:#1d4ed8">Book a Demo→</span>
      </a>
    </div>
    <div class="w-[95vw] md:w-[80vw] lg:w-full">
      <video
        class="w-full h-auto lg:max-h-[80%] rounded-xl shadow-xl"
        autoplay
        loop
        muted
        defaultMuted
        playsinline
        oncontextmenu="return false;"
        preload="auto"
      >
        <source src={video} type="video/mp4" />
        <track kind="captions" />
      </video>
    </div>
  </div>
</section>
