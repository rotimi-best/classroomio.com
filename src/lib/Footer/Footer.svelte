<script>
  import LogoTwitter from 'carbon-icons-svelte/lib/LogoTwitter.svelte';
  import LogoYoutube from 'carbon-icons-svelte/lib/LogoYoutube.svelte';
  import LogoLinkedin from 'carbon-icons-svelte/lib/LogoLinkedin.svelte';
</script>

<div class="px-[3%]">
  <div class="flex justify-between items-center py-[10%] border-t-2">
    <div class="w-2/4">
      <img src="/logo-192.png" alt="classroomio logo" class="w-[5%] mb-10" />
      <p class="text-xl tracking-wide leading-10 text-gray-600 inter">
        Advanced analytics for Notion resources.
        <br />
        Not affiiliated with Notion Labs, Inc.
      </p>
      <div class="flex mt-10 gap-10">
        <LogoLinkedin
          class="fill-gray-400 hover:fill-gray-500 hover:scale-110 scale-150 transition-all cursor-pointer"
          size={32}
        />
        <LogoTwitter
          class="fill-gray-400 hover:fill-gray-500 hover:scale-110 scale-150 transition-all cursor-pointer"
          size={32}
        />
        <LogoYoutube
          class="fill-gray-400 hover:fill-gray-500 hover:scale-110 scale-150 transition-all cursor-pointer"
          size={32}
        />
      </div>
      <img src="/notion.svg" alt="notion icon" class="w-[25%] mt-10" />
    </div>

    <nav class="flex justify-between w-2/4 pr-[5%]">
      <div>
        <h3 class="mb-10 text-xl font-semibold leading-6 text-gray-900 inter">
          Product
        </h3>
        <ul class="space-y-8">
          <li
            class="text-lg tracking-wide leading-6 text-gray-600 hover:text-gray-900"
          >
            Advanced content analytics
          </li>
          <li
            class="text-lg tracking-wide leading-6 text-gray-600 hover:text-gray-900"
          >
            Interactive widgets
          </li>
        </ul>
      </div>

      <div>
        <h3 class="mb-10 text-xl font-semibold leading-6 text-gray-900 inter">
          Resources
        </h3>
        <ul class="space-y-8">
          <li
            class="text-lg tracking-wide leading-6 text-gray-600 hover:text-gray-900"
          >
            Help center
          </li>
          <li
            class="text-lg tracking-wide leading-6 text-gray-600 hover:text-gray-900"
          >
            What is Notionlytics?
          </li>
          <li
            class="text-lg tracking-wide leading-6 text-gray-600 hover:text-gray-900"
          >
            Set up Notionlytics
          </li>
          <li
            class="text-lg tracking-wide leading-6 text-gray-600 hover:text-gray-900"
          >
            Reports and metrics
          </li>
        </ul>
      </div>

      <div>
        <h3 class="mb-10 text-xl font-semibold leading-6 text-gray-900 inter">
          Company
        </h3>
        <ul class="space-y-8">
          <li
            class="text-lg tracking-wide leading-6 text-gray-600 hover:text-gray-900"
          >
            Contact us
          </li>
          <li
            class="text-lg tracking-wide leading-6 text-gray-600 hover:text-gray-900"
          >
            Privacy policy
          </li>
          <li
            class="text-lg tracking-wide leading-6 text-gray-600 hover:text-gray-900"
          >
            Set up Notionlytics
          </li>
          <li
            class="text-lg tracking-wide leading-6 text-gray-600 hover:text-gray-900"
          >
            Terms of use
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <footer class="border-t-[1px] py-[2%] text-md leading-5 text-gray-500">
    © 2023 Notionlytics. All rights reserved.
  </footer>
</div>
