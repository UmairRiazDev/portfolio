// This event listener waits for the DOM content to be fully loaded before executing its code
document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling
  const links = document.querySelectorAll('nav a');
  for (const link of links) {
    // Attaches a click event listener to each navigation link for smooth scrolling
    link.addEventListener('click', smoothScroll);
  }

  // Open project modal
  const projects = document.querySelectorAll('.project');
  for (const project of projects) {
    // Attaches a click event listener to each project for opening project details
    project.addEventListener('click', openProjectModal);
  }
});

// Function to achieve smooth scrolling when a navigation link is clicked
function smoothScroll(event) {
  // Prevents the default action of the link (e.g., jumping to the anchor)
  event.preventDefault();
  // Extracts the target section ID from the href attribute of the clicked link
  const targetId = this.getAttribute('href').substring(1);
  // Retrieves the target section element by its ID
  const targetSection = document.getElementById(targetId);
  // Scrolls smoothly to the target section
  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth'
  });
}

// Function to open project details when a project is clicked
function openProjectModal(event) {
  // Retrieves the title and description of the clicked project
  const title = this.querySelector('h3').innerText;
  const description = this.querySelector('p').innerText;
  // Displays an alert with the title and description of the project
  alert(`Title: ${title}\nDescription: ${description}`);
}
