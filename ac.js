const form = document.getElementById('signupForm');
const modal = document.getElementById('successModal');
const signinBtn = document.getElementById('goToSigninBtn');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent actual form submission
  // Here you could add form validation or AJAX request if needed

  // Show the modal
  modal.style.display = 'block';
});

signinBtn.addEventListener('click', function() {
  // Redirect to signin page when button clicked
  window.location.href = 'signin.html';
});

// Optional: close modal if user clicks outside the modal content
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
