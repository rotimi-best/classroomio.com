<script lang="ts">
  import Section from './Section.svelte';
  import { fly } from 'svelte/transition';
  import { PUBLIC_ENABLE_STATS } from '$env/static/public';
  import { onMount } from 'svelte';
  import {
    TeamManagement,
    AutoVideo,
    CustomizableLanding,
    DownloadableLesson,
  } from '../../emojis';

  let selected = 0;
  let interval = 0;

  const moreFeatures = [
    {
      icon: CustomizableLanding,
      title: 'Customizable Landing Page',
      description:
        'A minimalistic landing page template out of the box to share your courses with the world',
      image: '/landing-page-builder.png',
    },
    {
      icon: TeamManagement,
      title: 'Team management',
      description:
        'Extend invitations and manage your teaching institution seamlessly through ClassroomIO.',
      image: '/team-management.png',
    },
    {
      icon: AutoVideo,
      title: 'Auto Video Transcription',
      description:
        'AI automatically transcribes videos, making content searchable for seamless student access.',
      image: '/video-transcription.png',
    },
    {
      icon: DownloadableLesson,
      title: 'Downloadable Lesson PDF',
      description:
        'Students can download lessons automatically for offline access.',
      image: '/download-pdf.png',
    },
  ];

  onMount(() => {
    if (window.innerWidth > 768) {
      interval = setInterval(() => {
        selected = moreFeatures[selected + 1] ? selected + 1 : 0;
      }, 3000);
    }
  });
</script>

<Section
  id="coursemanagement"
  taglineKey="Simplified"
  title="Advanced Course Management"
  description="ClassroomIO simplifies teaching tasks, boosts the educational experience, and is beneficial for both educators and students, providing a user-friendly platform for assessment, grading, attendance, and scorebook management."
  video="/course-management.mp4"
  rightToLeft={true}
/>
<Section
  id="customization"
  taglineKey="Flexible"
  title="Customization at its Core"
  description="ClassroomIO offers organizations the ability to tailor our LMS to their specific requirements. With our customizable features, you can create a personalized learning environment that aligns with your organization's goals"
  rightToLeft={true}
  video="/lms-customization.mp4"
/>

<Section
  id="collaboration"
  taglineKey="Collaboration"
  title="Your Knowledge Base"
  description="Our platform includes a forum-like feature where students and teachers can ask and answer questions, creating a collaborative learning environment. This fosters engagement and knowledge sharing among the community"
  video="/community.mp4"
  rightToLeft={true}
/>
<Section
  id="ai"
  taglineKey="Productivity"
  title="AI Integration for Lesson Planning"
  description="Our platform integrates AI to simplify lesson outline generation, streamline lesson planning and spark creative ideas. With ClassroomIO, educators can focus on what matters most: teaching."
  rightToLeft={true}
  video="/ai-lesson.mp4"
/>

<!-- More Features -->
<section id="morefeatures" class="py-[10%] px-3 lg:px-0 bg-gray-50">
  <div class="mx-0 lg:mx-[12%]">
    <div class="w-full lg:w-4/5 mx-4 lg:mx-0 mb-14">
      <h2
        class="mt-2 text-3xl font-bold font-display tracking-tight lg:text-4xl"
      >
        There is More...
      </h2>
      <p class="mt-4 text-lg inter text-gray-500 w-[90%] lg:w-4/5">
        ClassroomIO is packed with useful features while we try to make it easy
        to use.
      </p>
    </div>

    <div
      class="flex flex-col-reverse lg:flex-row gap-3 md:gap-10"
      id="image-container"
    >
      <div
        class="w-[95%] p-3 mt-5 overflow-auto lg:overflow-hidden lg:mt-0 lg:w-[45%] flex lg:block"
      >
        {#each moreFeatures as moreFeature, i}
          <button
            class="p-4 rounded-md {i === selected &&
              'selected'} mb-3 text-start min-w-[75vw] lg:min-w-[unset]"
            on:click={() => {
              selected = i;
              clearInterval(interval);
            }}
          >
            <h4 class="text-lg font-semibold flex gap-3">
              <img src={moreFeature.icon} alt={moreFeature.title} class="w-5" />
              {moreFeature.title}
            </h4>
            <p>{moreFeature.description}</p>
          </button>
        {/each}
      </div>

      <!-- Video  -->
      <div class="h-full w-full p-3 lg:w-2/3 lg:p-0">
        {#key selected}
          <img
            id="image"
            in:fly={{ y: 100, duration: 1000 }}
            class="w-full flex flex-col items-center"
            src={moreFeatures[selected].image}
            alt={moreFeatures[selected].title}
          />
        {/key}
      </div>
    </div>
  </div>
</section>

<!-- body section 5 -->
{#if PUBLIC_ENABLE_STATS}
  <div
    class="flex justify-between flex-row flex-wrap lg:flex-nowrap items-center text-center px-[10%] py-[7%] border-b-[1px] gap-y-20 gap-x-20 mx-0 lg:mx-[12%]"
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
{/if}

<style>
  #morefeatures .selected {
    background-image: linear-gradient(
      45deg,
      rgb(253, 239, 132),
      rgb(247, 198, 169),
      rgb(21, 186, 196)
    );
  }
</style>
