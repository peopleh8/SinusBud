import Swiper, { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import { gsap } from "gsap";

const introCounter = document.querySelector('.intro-counter');

export const introSlider = new Swiper(".intro-slider", {
  modules: [EffectFade, Autoplay, Pagination],
  speed: 600,
  loop: true,
  pauseOnMouseEnter: false,
  disableOnInteraction: false,
  allowTouchMove: false,
  autoplay: {
    delay: 5000,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: ".intro-progress",
    type: "progressbar",
  },
  on: {
    slideChange: swiper => {
      let index = swiper.realIndex + 1;

      gsap.to(introCounter, .2, { force3D: true, y: -10, opacity: 0, ease: "Power2.easeOut", onComplete: () => {
          gsap.to(introCounter, .1, { force3D: true, y: 10 });

          introCounter.innerHTML = index < 10 ? `0${index}` : index;
        }});
      gsap.to(introCounter, .2, { force3D: true, y: 0, opacity: 1, ease: "Power2.easeOut", delay: .3 });
    }
  }
});

export const projectsSlider = new Swiper(".projects-slider", {
  modules: [Autoplay, Navigation],
  slidesPerView: 2,
  speed: 700,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pauseOnMouseEnter: true,
  disableOnInteraction: false,
  spaceBetween: 60,
  navigation: {
    nextEl: ".projects__slider-next",
    prevEl: ".projects__slider-prev",
  },
})