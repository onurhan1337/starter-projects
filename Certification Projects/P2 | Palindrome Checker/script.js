document.getElementById("check-btn").addEventListener("click", function() {
    const input = document.getElementById("text-input").value.trim();

    if (input === "") {
        alert("Please input a value");
        return;
    }

    const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    const isPalindrome = cleanedInput === cleanedInput.split('').reverse().join('');

    if (isPalindrome) {
        document.getElementById("result").textContent = `${input} is a palindrome`;
    } else {
        document.getElementById("result").textContent = `${input} is not a palindrome`;
    }
});
