import work from "$lib/data/work.js";
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
  const index = parseInt(params.index);
  const selectedWork = work[index];

	if (selectedWork) {
		return selectedWork
	}

	error(404, 'Not found');
};
