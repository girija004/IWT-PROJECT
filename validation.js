document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");

    form.addEventListener("submit", (event) => {
      let valid = true;

      
      const emailValue = emailInput.value.trim();
      if (!validateEmail(emailValue)) {
        alert("Please enter a valid email address.");
        valid = false;
      }

    
      const passwordValue = passwordInput.value.trim();
      if (passwordValue.length < 6) {
        alert("Password must be at least 6 characters long.");
        valid = false;
      }

      if (!valid) {
        event.preventDefault();
      }
    });

    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });