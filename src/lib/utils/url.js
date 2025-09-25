import { goto } from "$app/navigation";
import { page } from "$app/state";
import { works } from "$lib/data/works";
import { app } from "$lib/states/app.svelte";
import { ScrollSmoother } from "gsap/ScrollSmoother";

export function encodeWorkName(name) {
  return encodeURI(name.toLowerCase().replace(/ /g, "-"));
}

export function decodeWorkName(encodedName) {
  return decodeURI(encodedName.replace(/-/g, " "));
}

export function getToPageName(to) {
  if (!to) return null;

  const url = new URL(to);
  const split = url.pathname.split("/");
  const name = (
    (split[1] === "work" && split[2])
      ? decodeWorkName(split[2])
      : split[1] || "hello"
  );

  const validPaths = [
    "hello", "work", "about",
    ...works.map(w => w.name.toLowerCase())
  ];
  if (!validPaths.includes(name.toLowerCase())) return "Error";

  return name.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() +
    text.substring(1).toLowerCase()
  );
}

export function handleLinkClick(e, href) {
  e.preventDefault();
  if (page.url.pathname === href) return;
  app.navigation.inProcess = true;
  app.navigation.to = page.url.origin + href;
  goto(href);
}
