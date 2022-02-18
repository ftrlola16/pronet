const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const mobileMenu = document.getElementById('mobile-menu');
const allLinks = document.querySelectorAll('.mobile-links')


const openMobileMenu = () => {
  mobileMenu.style.top = '0';
  mobileMenu.style.transition = '500ms ease-in-out'
}

const closeMobileMenu = () => {
  mobileMenu.style.top = '-110%';
}

hamburger.addEventListener('click', openMobileMenu);
close.addEventListener('click', closeMobileMenu)

allLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu)
})


const goUp = document.querySelector('.go-up');
const newHeader = document.getElementsByTagName('header');

window.onscroll = () => {
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
    newHeader.classList.add('nav-colored');
    goUp.style.display = 'block';
  } else {
    newHeader.classList.remove('nav-colored');
    goUp.style.display = 'none';
  }
};