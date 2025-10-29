document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const successMessage = document.getElementById("successMessage");

  if (name && email && message) {
    successMessage.style.display = "block";
    successMessage.textContent = "Message sent successfully!";
    successMessage.style.color = "#27ae60";

    this.reset();
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);
  } else {
    successMessage.style.display = "block";
    successMessage.textContent = "Please fill out all fields.";
    successMessage.style.color = "#e74c3c";

    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);
  }
});
