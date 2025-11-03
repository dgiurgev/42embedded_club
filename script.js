
// Highlight nav links as you scroll
const links = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  const fromTop = window.scrollY + 60;
  links.forEach(link => {
    const section = document.querySelector(link.hash);
    if (section &&
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Optional: Scrolls to top when "Home" is clicked
document.querySelector('nav a[href="#"]').addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({top: 0, behavior: 'smooth'});
});
