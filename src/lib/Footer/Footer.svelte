<script>
  import LogoTwitter from 'carbon-icons-svelte/lib/LogoTwitter.svelte';
  import LogoYoutube from 'carbon-icons-svelte/lib/LogoYoutube.svelte';
  import LogoLinkedin from 'carbon-icons-svelte/lib/LogoLinkedin.svelte';
</script>

<div class="px-[2%] lg:px-[14%] border-t-[1px]">
  <div
    class="flex flex-col lg:flex-row justify-between items-center py-[10%] pl-5 lg:pl-0"
  >
    <div class="w-full lg:w-2/4">
      <img
        src="/logo-192.png"
        alt="classroomio logo"
        class="w-[10%] lg:w-[5%] mb-5 lg:mb-10"
      />
      <p
        class="text-sm lg:text-md tracking-wide leading-7 lg:leading-7 text-gray-600 inter"
      >
        Advanced analytics for Notion resources.
        <br />
        Not affiiliated with Notion Labs, Inc.
      </p>
      <div class="flex mt-5 lg:mt-10 gap-3 lg:gap-7">
        <LogoLinkedin
          class="fill-gray-400 hover:fill-gray-500 hover:scale-110 scale-90 lg:scale-150 transition-all cursor-pointer"
          size={20}
        />
        <LogoTwitter
          class="fill-gray-400 hover:fill-gray-500 hover:scale-110 scale-90 lg:scale-150 transition-all cursor-pointer"
          size={20}
        />
        <LogoYoutube
          class="fill-gray-400 hover:fill-gray-500 hover:scale-110 scale-90 lg:scale-150 transition-all cursor-pointer"
          size={20}
        />
      </div>
      <img
        src="/notion.svg"
        alt="notion icon"
        class="w-[38%] lg:w-[19%] mt-6 lg:mt-10"
      />
    </div>

    <nav
      class="flex justify-between items-start flex-col lg:flex-row w-full lg:w-2/4 pr-[5%] mt-16 lg:mt-0 space-y-6 lg:space-y-0"
    >
      <div>
        <h3
          class="mb-3 lg:mb-10 text-base lg:text-md font-semibold leading-6 text-gray-900 inter"
        >
          Product
        </h3>
        <ul class="space-y-2 lg:space-y-4">
          <li
            class="text-sm lg:text-md tracking-wide leading-6 text-gray-600 hover:text-gray-900"
          >
            Advanced content analytics
          </li>
          <li
            class="text-sm lg:text-md tracking-wide leading-6 text-gray-600 hover:text-gray-900"
          >
            Interactive widgets
          </li>
        </ul>
      </div>

      <div>
        <h3
          class="mb-3 lg:mb-10 text-base lg:text-md font-semibold leading-6 text-gray-900 inter"
        >
          Resources
        </h3>
        <ul class="space-y-2 lg:space-y-4">
          <li
            class="text-sm lg:text-md tracking-wide leading-6 text-gray-600 hover:text-gray-900"
          >
            Help center
          </li>
          <li
            class="text-sm lg:text-md tracking-wide leading-6 text-gray-600 hover:text-gray-900"
          >
            What is Notionlytics?
          </li>
          <li
            class="text-sm lg:text-md tracking-wide leading-6 text-gray-600 hover:text-gray-900"
          >
            Set up Notionlytics
          </li>
          <li
            class="text-sm lg:text-md tracking-wide leading-6 text-gray-600 hover:text-gray-900"
          >
            Reports and metrics
          </li>
        </ul>
      </div>

      <div>
        <h3
          class="mb-3 lg:mb-10 text-base lg:text-md font-semibold leading-6 text-gray-900 inter"
        >
          Company
        </h3>
        <ul class="space-y-2 lg:space-y-4">
          <li
            class="text-sm lg:text-md tracking-wide leading-6 text-gray-600 hover:text-gray-900"
          >
            Contact us
          </li>
          <li
            class="text-sm lg:text-md tracking-wide leading-6 text-gray-600 hover:text-gray-900"
          >
            Privacy policy
          </li>
          <li
            class="text-sm lg:text-md tracking-wide leading-6 text-gray-600 hover:text-gray-900"
          >
            Set up Notionlytics
          </li>
          <li
            class="text-sm lg:text-md tracking-wide leading-6 text-gray-600 hover:text-gray-900"
          >
            Terms of use
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <footer
    class="border-t-[1px] py-[3%] text-xs lg:text-md leading-5 font-light text-gray-500 text-center lg:text-left"
  >
    © 2023 Notionlytics. All rights reserved.
  </footer>
</div>
