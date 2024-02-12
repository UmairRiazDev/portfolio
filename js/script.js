document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling
  const links = document.querySelectorAll('nav a');
  for (const link of links) {
    link.addEventListener('click', smoothScroll);
  }

  // Open project modal
  const projects = document.querySelectorAll('.project');
  for (const project of projects) {
    project.addEventListener('click', openProjectModal);
  }
});

function smoothScroll(event) {
  event.preventDefault();
  const targetId = this.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);
  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth'
  });
}

function openProjectModal(event) {
  const title = this.querySelector('h3').innerText;
  const description = this.querySelector('p').innerText;
  alert(`Title: ${title}\nDescription: ${description}`);
}
