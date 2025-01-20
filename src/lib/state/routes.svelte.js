import { names } from "$lib/contants/routes";

const routes = $state({
  triggerCover: true,
  targetPage: {
    name: "",
    href: "",
  },
});

export function triggerCover(page) {
  // all we need is a change in value of triggerCover
  // to rerender the cover component
  routes.triggerCover = !routes.triggerCover;
  routes.targetPage = page;
}

export function handleAnchorClick(e, href, name) {
  e.preventDefault();
  triggerCover({
    name: name || names[href],
    href,
  });
}

export default routes;
