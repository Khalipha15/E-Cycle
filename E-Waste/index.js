// Smooth Scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  // FAQ Accordion Toggle
  const accordionTitles = document.querySelectorAll('.accordion-title');
  accordionTitles.forEach(title => {
    title.addEventListener('click', () => {
      const content = title.nextElementSibling;
      const isVisible = content.style.display === 'block';
      content.style.display = isVisible ? 'none' : 'block';
    });
  });
  
  // Form Validation (Basic)
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (!name || !email || !message) {
      e.preventDefault();
      alert('Please fill in all fields!');
    }
  });
  
  // Scroll-based Animations (Fade In Section)
  const sections = document.querySelectorAll('section');
  const fadeInSection = () => {
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100) {
        section.style.opacity = 1;
        section.style.animation = 'fadeIn 2s forwards';
      }
    });
  };
  
  window.addEventListener('scroll', fadeInSection);
  fadeInSection();  // Call on initial load to reveal visible sections
  
  // Select all anchor tags and the loading spinner
const links = document.querySelectorAll('a');
const spinner = document.getElementById('loading-spinner');

// Function to show the spinner
function showLoadingSpinner() {
  spinner.style.display = 'flex'; // Display the spinner
}

// Attach the click event listener to each link
links.forEach(link => {
  link.addEventListener('click', (e) => {
    // Show the spinner when a link is clicked
    showLoadingSpinner();
    
    // Wait for the page to fully load
    window.onload = () => {
      // Hide the spinner when the page is loaded
      spinner.style.display = 'none';
    };
  });
});

// For an added touch, hide the spinner once the page has fully loaded on initial page load
window.addEventListener('load', () => {
  spinner.style.display = 'none';  // Hide the spinner once the page loads
});