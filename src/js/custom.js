const blog = document.querySelector(".blog");

// Функція для встановлення висоти елементів
function setMaxHeight(prew) {
  const blogItems = document.querySelectorAll(prew);

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
}

if (blog) {
  // Викликати функцію при завантаженні сторінки
  document.addEventListener("DOMContentLoaded", setMaxHeight('.blog__item'));
}

