document.getElementById('stressForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let score = 0;
    const totalQuestions = 10; // Total number of questions

    for (let i = 1; i <= totalQuestions; i++) {
        const selectedOption = document.forms['stressForm']['q' + i].value;
        score += parseInt(selectedOption); // Add the value of the selected option to the score
    }

    let resultText = '';
    let resultClass = '';

    // Determine stress level based on total score
    if (score <= 10) {
        resultText = 'Low Stress';
        resultClass = 'low-stress';
    } else if (score <= 20) {
        resultText = 'Moderate Stress';
        resultClass = 'moderate-stress';
    } else if (score <= 25) {
        resultText = 'High Stress';
        resultClass = 'high-stress';
    } else {
        resultText = 'Very High Stress';
        resultClass = 'very-high-stress';
    }

    const resultDiv = document.getElementById('stressResult');
    const stressLevelP = document.getElementById('stressLevel');

    stressLevelP.textContent = resultText;
    resultDiv.className = 'result ' + resultClass;
    resultDiv.classList.remove('hidden');
});
