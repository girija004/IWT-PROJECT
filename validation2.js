document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const genderInputs = document.querySelectorAll("input[name='gender']");
    const collegeAddressInput = document.querySelector("#collegeAddress");
    const branchSelect = document.querySelector("#branch");
  
    form.addEventListener("submit", (event) => {
      let valid = true;
  

      const genderSelected = Array.from(genderInputs).some(input => input.checked);
      if (!genderSelected) {
        alert("Please select a gender.");
        valid = false;
      }
  
    
      if (collegeAddressInput.value.trim() === "") {
        alert("Please enter your college address.");
        valid = false;
      }
  
  
      if (branchSelect.value === "") {
        alert("Please select a branch.");
        valid = false;
      }
  

      if (!valid) {
        event.preventDefault();
      }
    });
  });
  