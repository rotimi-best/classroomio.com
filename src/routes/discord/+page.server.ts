import { redirect } from '@sveltejs/kit';
import { client } from '$lib/utils/posthog';

export const load = async ({ url, cookies }): LoadOutput => {
  client.capture({
    event: 'discord page visited',
  });

  throw redirect(301, 'https://discord.gg/9X6A4SzpJS');
};
