import footer from '../html-parts/footer.html';
import header from '../html-parts/header.html';// Шлях до файлу
import footerUA from '../html-parts/footer-ua.html';
import headerUA from '../html-parts/header-ua.html';// Шлях до файлу


  

// // Функція для перевірки наявності елемента в DOM
function isElementExist(elementId) {
  return document.getElementById(elementId) !== null;
}

if (isElementExist('header')) {
  document.getElementById('header').innerHTML = header; // пошук у файлі по ID
}

if (isElementExist('header-ua')) {
  document.getElementById('header-ua').innerHTML = headerUA; // пошук у файлі по ID
}

if (isElementExist('footer')) {
  document.getElementById('footer').innerHTML = footer;
}

if (isElementExist('footer-ua')) {
  document.getElementById('footer-ua').innerHTML = footerUA;
}

