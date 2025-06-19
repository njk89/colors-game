
const svgContainer = document.querySelector('.svg-container');
const nextBtn = document.getElementById('nextBtn');
const colorPicker = document.getElementById('colorPicker');

let currentIndex = 0;
const total = 20;
const basePath = 'svgs/svg';

function loadSVG(index) {
  fetch(`${basePath}${index + 1}.svg`)
    .then(res => res.text())
    .then(svgText => {
      svgContainer.innerHTML = svgText;
      attachColoring();
    })
    .catch(err => console.error(err));
}

function attachColoring() {
  const parts = svgContainer.querySelectorAll('[fill]');
  parts.forEach(part => {
    part.style.fill = part.getAttribute('fill');
    part.addEventListener('click', () => {
      part.style.fill = colorPicker.value;
    });
  });
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % total;
  loadSVG(currentIndex);
});

loadSVG(currentIndex);
