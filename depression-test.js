document.getElementById('depressionForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let score = 0;
    const totalQuestions = 10; // Updated to reflect the number of questions

    for (let i = 1; i <= totalQuestions; i++) {
        const q = document.forms['depressionForm']['q' + i].value;
        score += parseInt(q);
    }

    let resultText = '';
    let resultClass = '';

    if (score <= 10) {
        resultText = 'Minimal Depression';
        resultClass = 'minimal-depression';
    } else if (score <= 20) {
        resultText = 'Mild Depression';
        resultClass = 'mild-depression';
    } else if (score <= 30) {
        resultText = 'Moderate Depression';
        resultClass = 'moderate-depression';
    } else {
        resultText = 'Severe Depression';
        resultClass = 'severe-depression';
    }

    const resultDiv = document.getElementById('depressionResult');
    const depressionLevelP = document.getElementById('depressionLevel');

    depressionLevelP.textContent = resultText;
    resultDiv.className = 'result ' + resultClass;
    resultDiv.classList.remove('hidden');
});
