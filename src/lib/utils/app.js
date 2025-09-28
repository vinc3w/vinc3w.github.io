import { app } from "$lib/states/app.svelte";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export async function setupPage() {
  const smoother = ScrollSmoother.get();
  
  smoother?.scrollTo(0, false);
  await new Promise(resolve => setTimeout(resolve, app.loadingDurationMS));

  app.navigation.inProcess = false;
  
  smoother?.effects().forEach((effect) => effect.kill());
  smoother?.effects("[data-lag], [data-speed]");
  ScrollTrigger.refresh();
}
