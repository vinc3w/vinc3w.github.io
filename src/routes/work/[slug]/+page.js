import work from "$lib/data/work.js";
import { formatTitleToSlug } from "$lib/utils/general";
import { error } from "@sveltejs/kit";

export function load({ params }) {
  const index = work.findIndex(w => {
    return formatTitleToSlug(w.title) === encodeURI(params.slug);
  });

  if (index >= 0) {
    const temp = work[index];
    const next = work[index + 1];
    temp.next = next;
    return temp;
  }

	error(404, "Not found");
};
