document.addEventListener("DOMContentLoaded", function() {
    const checkButton = document.getElementById("checkButton");
    const wordInputs = document.querySelectorAll("input[data-answer]");

    checkButton.addEventListener("click", function() {
        let correctAnswers = 0;

        wordInputs.forEach(input => {
            const expectedAnswer = input.dataset.answer;
            const userAnswer = input.value.toLowerCase().trim();

            if (userAnswer === expectedAnswer) {
                input.classList.add("correct");
                correctAnswers++;
            } else {
                input.classList.add("incorrect");
            }
        });

        const resultContainer = document.getElementById("result");
        resultContainer.textContent = `Respuestas correctas: ${correctAnswers} / ${wordInputs.length}`;
    });
});


