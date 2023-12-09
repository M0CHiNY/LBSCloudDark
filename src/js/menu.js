// Documentation
// https://jolty.dev

const { Dropdown, Dialog, Tablist } = jolty;

new Dialog("#mob-nav", {
  shown: false,
  breakpoints: {
    1024: {
      destroy: true,
    },
  },
});

document.querySelectorAll(".nav-submenu").forEach((submenu) => {
  new Dropdown(submenu, {
    toggler: submenu.previousElementSibling,
    delay: 100,
    itemClickHide: false,
    items: ":scope > li > a",
    trigger: "click hover",
    arrowActivation: submenu.parentNode.closest(".nav-submenu") ? "x" : "y",
    hideMode: "class-shown",
    destroy: true,
    breakpoints: {
      1024: {
        destroy: false,
      },
    },
  });
});

document.querySelectorAll(".nav-submenu, .nav-menu").forEach((submenu) => {
  new Tablist(submenu, {
    tab: "a:not(:only-child)",
    tabpanel: ".nav-submenu",
    hideMode: "class-shown",
    breakpoints: {
      1024: {
        destroy: true,
      },
    },
  });
});

// footer submenu
document.addEventListener('DOMContentLoaded', function() {
  var submenuLinks = document.querySelectorAll('.footer__nav a');
  submenuLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      var submenu = link.nextElementSibling;

      if (submenu && submenu.classList.contains('footer-submenu')) {
        event.preventDefault();
        event.stopPropagation(); 
        submenu.classList.toggle('active'); 
      }
    });
  });
});

