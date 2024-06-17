import * as api from '$lib/utils/api';

import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params }) => {
    const news = await api.get(`news/${params.slug}`);

    const dirty = marked(news.body);
	  news.body = sanitizeHtml(dirty);
  
    return {
      news,
    };
  };