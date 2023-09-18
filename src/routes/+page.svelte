<script>
  import { Body, Faq, Hero, Pricing } from '$lib';
  import { PUBLIC_ENABLE_PRICING, PUBLIC_ENABLE_FAQ } from '$env/static/public';
</script>

<Hero />
<Body />

{#if PUBLIC_ENABLE_PRICING}
  <Pricing />
{/if}
{#if PUBLIC_ENABLE_FAQ}
  <Faq />
{/if}
