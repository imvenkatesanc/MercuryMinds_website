/* Nav menu toggle*/
document.querySelector('.navbar-toggle').addEventListener('click', function() {
    document.querySelector('.navbar-menu').classList.toggle('active');
  });
  /* heading span slide*/
  const sliderItems = document.querySelectorAll('.slider-item');
let currentItemIndex = 0;

function showNextItem() {
  sliderItems[currentItemIndex].style.display = 'none';
  currentItemIndex = (currentItemIndex + 1) % sliderItems.length;
  sliderItems[currentItemIndex].style.display = 'block';
}

function startSlider() {
  setInterval(showNextItem, 2000);
}

startSlider();
