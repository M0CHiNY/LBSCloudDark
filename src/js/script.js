document.addEventListener("DOMContentLoaded", function () {
  // scroll

  const scrollToTop = document.getElementById("up");

  window.onscroll = function () {
    scroll();
  };

  function scroll() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      scrollToTop.style.display = "flex";
    } else {
      scrollToTop.style.display = "none";
    }
  }

  // size blocks

  const blogItems = document.querySelectorAll(".card-list__box");

  if (blogItems.length > 0) {
    let maxHeight = 0;

    blogItems.forEach(function (item) {
      const itemHeight = item.clientHeight;

      if (itemHeight > maxHeight) {
        maxHeight = itemHeight;
      }
    });

    blogItems.forEach(function (item) {
      item.style.height = maxHeight + "px";
    });
  }
});
