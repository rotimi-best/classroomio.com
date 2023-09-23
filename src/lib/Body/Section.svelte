<script>
  export let id = '';
  export let rightToLeft = false;
  export let taglineKey = '';
  export let title = '';
  export let description = '';
  export let video = '';

  import {
    Flexible,
    Collaboration,
    Productivity,
    ThumbsUp,
  } from '../../emojis';
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
      <div class="my-4 flex gap-3">
        {#if taglineKey === 'Simplify'}
          <img src={ThumbsUp} alt="    ThumbsUp Icon" class="w-5" />
        {:else if taglineKey === 'Flexible'}
          <img src={Flexible} alt="Flexible Icon" class="w-5" />
        {:else if taglineKey === 'Collaboration'}
          <img src={Collaboration} alt="Collaboration Icon" class="w-8" />
        {:else if taglineKey === 'Productivity'}
          <img src={Productivity} alt="Productivity Icon" class="w-5" />
        {/if}
        <p class="font-bold text-xl">{taglineKey}</p>
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
