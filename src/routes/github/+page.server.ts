import { redirect } from '@sveltejs/kit';
import { client } from '$lib/utils/posthog';

export const load = async ({ url, cookies }): LoadOutput => {
  client.capture({
    event: 'github page visited',
  });

  throw redirect(301, 'https://github.com/rotimi-best/classroomio');
};
