// JavaScript for BMI Calculator

// Event listener for form submission
document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get the values from the form
    const gender = document.getElementById('gender').value;
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // Validate input
    if (!gender || height <= 0 || weight <= 0) {
        alert("Silakan masukkan semua data dengan benar.");
        return;
    }

    // Calculate BMI
    const bmi = calculateBMI(height, weight);

    // Display the BMI result and explanation
    displayBMIResult(bmi, gender);
});

// Function to calculate BMI
function calculateBMI(height, weight) {
    return (weight / Math.pow(height / 100, 2)).toFixed(2); // BMI formula
}

// Function to display BMI result and explanation
function displayBMIResult(bmi, gender) {
    const resultElement = document.getElementById('bmiResult');
    const bmiValueElement = document.getElementById('bmiValue');
    const bmiExplanationElement = document.getElementById('bmiExplanation');

    // Display BMI value
    bmiValueElement.textContent = `BMI Anda adalah ${bmi}`;

    // Provide an explanation based on BMI
    let explanation = "";
    if (bmi < 18.5) {
        explanation = "Anda berada dalam kategori kurus.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        explanation = "Anda berada dalam kategori normal.";
    } else if (bmi >= 25 && bmi < 29.9) {
        explanation = "Anda berada dalam kategori kelebihan berat badan.";
    } else {
        explanation = "Anda berada dalam kategori obesitas.";
    }

    // Add gender-specific message
    explanation += gender === "Laki-Laki" ? " Pria cenderung memiliki lebih banyak massa otot." : " Wanita cenderung memiliki lebih banyak lemak tubuh.";

    // Display the explanation
    bmiExplanationElement.textContent = explanation;

    // Show the result container
    resultElement.classList.remove('hidden');
}