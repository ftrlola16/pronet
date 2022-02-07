function myFunction(params) {
  var x =
  document.getElementById('navbar-nav');
  if (x.className === 'navbar-nav') {
    x.className += 'responsive';
  }else {
    x.className = 'navbar-nav'
  }

}

const goUp = document.querySelector('.go-up');
window.onscroll = () => {
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
    newHeader.classList.add('nav-colored');
    goUp.style.display = 'block';
  } else {
    newHeader.classList.remove('nav-colored');
    goUp.style.display = 'none';
  }
};