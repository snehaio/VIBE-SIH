import { useLayoutEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const mainElement = document.querySelector("#main");

  if (!mainElement) {
    console.error("Main element not found");
    return;
  }

  const locoScroll = new LocomotiveScroll({
    el: mainElement,
    smooth: true,
    getDirection: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(mainElement, {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: mainElement.style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

  console.log("Locomotive Scroll initialized");
}

export default loco;
