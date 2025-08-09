
window.addEventListener('load', function() {
  const loader = document.querySelector('.loader');
  loader.style.opacity = '0';
  setTimeout(() => {
    loader.style.display = 'none';
  }, 800);
});

const minimumLoadTime = 1500; // 1.5 seconds
const loadStart = Date.now();

window.addEventListener('load', function() {
  const loadTime = Date.now() - loadStart;
  const delay = Math.max(0, minimumLoadTime - loadTime);
  
  setTimeout(() => {
    document.querySelector('.loader').classList.add('hidden');
  }, delay);
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Scroll reveal animation
const cells = document.querySelectorAll('.bento-cell');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

cells.forEach(cell => observer.observe(cell));

// Form Submission
document.getElementById('project-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(this);
  
  // Simulate form submission
  const submitBtn = document.querySelector('.submit-btn');
  submitBtn.innerHTML = '<span>Sending...</span>';
  submitBtn.disabled = true;
  
  // In a real implementation, you would use fetch() to send the data
  setTimeout(() => {
    submitBtn.innerHTML = '<span>Message Sent!</span><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2"/></svg>';
    
    // Reset form after 2 seconds
    setTimeout(() => {
      this.reset();
      submitBtn.innerHTML = '<span>Send Message</span><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13" stroke="currentColor" stroke-width="2"/><path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" stroke-width="2"/></svg>';
      submitBtn.disabled = false;
      
      // Reset labels
      document.querySelectorAll('.form-group label').forEach(label => {
        if (!label.previousElementSibling.value) {
          label.style.top = '15px';
          label.style.fontSize = '1rem';
          label.style.color = '#6e6d7a';
        }
      });
    }, 2000);
  }, 1500);
});

// Calendar Button
document.querySelector('.calendar-btn').addEventListener('click', function() {
  // In a real implementation, this would open a calendar widget
  alert('Calendar integration would open here (e.g., Calendly)');
});

// Animate form elements on scroll
const formElements = document.querySelectorAll('.form-group, .form-header, .form-footer');

const formObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

formElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.5s ease';
  formObserver.observe(el);
});

/* Auto-update copyright year */

  document.getElementById('year').textContent = new Date().getFullYear();

  // Back to Top Button
const backToTopButton = document.querySelector('.back-to-top');

function toggleBackToTop() {
  if (window.scrollY > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Event Listeners
window.addEventListener('scroll', toggleBackToTop);
backToTopButton.addEventListener('click', scrollToTop);