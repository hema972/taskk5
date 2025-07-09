// Toggle Mobile Menu
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

// Form Validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    return false;
  }

  alert(`Thank you, ${name}! Your message has been sent.`);
  return true;
} 
  function toggleDarkMode() {
    document.body.classList.toggle('dark');
  }

