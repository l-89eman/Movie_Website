var swiper = new Swiper(".popular-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    510: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    758: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});
let playBtn = document.querySelector(".play-movie");
let video = document.querySelector(".video-container");
let myvideo = document.querySelector("#my-video");
let closeBtn = document.querySelector(".close-video");

playBtn.addEventListener("click", () => {
  video.classList.add("show-video");
  myvideo.play();
});
closeBtn.addEventListener("click", () => {
  video.classList.remove("show-video");
  myvideo.pause();
});
