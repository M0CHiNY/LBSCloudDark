// import Swiper JS
import Swiper from "swiper/bundle";

// Section team start
const teamSwiper = document.querySelector(".complex-slider");
if (teamSwiper) {
  function initSwiper() {
    return new Swiper(".complex-slider", {
      navigation: {
        nextEl: ".complex-pagination__next",
        prevEl: ".complex-pagination__prev",
      },
      spaceBetween: 2,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        767: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
          spaceBetween: 2,
        },
      },
    });
  }

  let swiper;

  if (teamSwiper) {
    swiper = initSwiper();

    window.addEventListener("resize", () => {
      // Оновлюємо параметри слайдера при зміні розміру вікна
      swiper.destroy();
      swiper = initSwiper();
    });
  }

  // Якщо потрібно, також ви можете вручну оновити слайдер при зміні роздільної здатності
  window.addEventListener("orientationchange", () => {
    swiper.destroy();
    swiper = initSwiper();
  });

  function setEqualHeightToBlogItems() {
    const blogItems = document.querySelectorAll(".complex-cart");

    if (blogItems.length > 0) {
      let maxHeight = 0;

      blogItems.forEach(function (item) {
        item.style.height = ""; // Скидаємо попередню висоту перед визначенням нової

        const itemHeight = item.clientHeight;

        if (itemHeight > maxHeight) {
          maxHeight = itemHeight;
        }
      });

      blogItems.forEach(function (item) {
        item.style.height = maxHeight + "px";
      });
    } else {
      console.warn("Element with class .articlecontent not found.");
    }
  }

  // Викликати функцію при завантаженні сторінки
  setEqualHeightToBlogItems();

  // Викликати функцію при кожному зміні розмірів екрану
  window.addEventListener("resize", setEqualHeightToBlogItems);
}
