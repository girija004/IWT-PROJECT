document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nameInput = document.querySelector("#name");
    const idInput = document.querySelector("#id");
    const passwordInput = document.querySelector("#password");
    const emailInput = document.querySelector("#email");
    const ageInput = document.querySelector("#age");
  
    form.addEventListener("submit", (event) => {
      let valid = true;
  

      if (!/^[a-zA-Z\s]+$/.test(nameInput.value.trim())) {
        alert("Name must contain only alphabets and spaces.");
        valid = false;
      }
  

      if (!/^[a-zA-Z0-9]+$/.test(idInput.value.trim())) {
        alert("ID must be alphanumeric.");
        valid = false;
      }
  

      if (passwordInput.value.trim().length < 6) {
        alert("Password must be at least 6 characters long.");
        valid = false;
      }
  

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
        alert("Please enter a valid email address.");
        valid = false;
      }
  

      const ageValue = parseInt(ageInput.value.trim(), 10);
      if (isNaN(ageValue) || ageValue < 1 || ageValue > 120) {
        alert("Age must be a valid number between 1 and 120.");
        valid = false;
      }
  

      if (!valid) {
        event.preventDefault();
      }
    });
  });
  