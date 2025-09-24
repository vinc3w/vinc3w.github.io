import { decodeWorkName } from "$lib/utils/url";
import { works } from "$lib/data/works";
import { error } from "@sveltejs/kit";

export const load = ({ params }) => {
  const name = decodeWorkName(params.slug);
  const work = works.find(w => w.name.toLowerCase() === name);
  const index = works.indexOf(work);

  if (!work) {
    return error(404, "Not found");
  }

  const next = works[index + 1] || works[0];
  work.next = next;

  return work;
};
