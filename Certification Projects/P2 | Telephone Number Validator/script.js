document.getElementById("check-btn").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value;
    const resultsDiv = document.getElementById("results-div");
  
    if (userInput === "") {
      alert("Please provide a phone number");
      return;
    }
  
    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  
    if (phoneRegex.test(userInput)) {
      resultsDiv.textContent = `Valid US number: ${userInput}`;
      resultsDiv.className = 'valid';
    } else {
      resultsDiv.textContent = `Invalid US number: ${userInput}`;
      resultsDiv.className = 'invalid';
    }
  });
  
  document.getElementById("clear-btn").addEventListener("click", function() {
    document.getElementById("results-div").textContent = "";
    document.getElementById("user-input").value = "";
  });
  