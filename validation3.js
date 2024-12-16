document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const skills = document.querySelectorAll("input[name='skills']");
    const resumeInput = document.querySelector("#resume");
    const photoInput = document.querySelector("#photo");
  
    form.addEventListener("submit", (event) => {
      let valid = true;
  

      const isSkillSelected = Array.from(skills).some(skill => skill.checked);
      if (!isSkillSelected) {
        alert("Please select at least one technical skill.");
        valid = false;
      }

      if (!validateFile(resumeInput, ["pdf", "doc", "docx"])) {
        alert("Please upload a valid resume file (PDF, DOC, or DOCX).");
        valid = false;
      }
  

      if (!validateFile(photoInput, ["jpg", "jpeg", "png"])) {
        alert("Please upload a valid photo file (JPG, JPEG, or PNG).");
        valid = false;
      }

      if (!valid) {
        event.preventDefault();
      }
    });
  
    function validateFile(input, allowedExtensions) {
      if (!input.files.length) return false; 
  
      const fileName = input.files[0].name;
      const fileExtension = fileName.split('.').pop().toLowerCase();
      return allowedExtensions.includes(fileExtension);
    }
  });
  