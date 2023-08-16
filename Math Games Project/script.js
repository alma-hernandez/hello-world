let timerInterval;

function generateRandomNumbers() {
    document.getElementById("userAnswer").value = "";
    document.getElementById("result").innerHTML = "";
    const newRandomNumber1 = Math.floor(Math.random() * 50) + 1;
    const newRandomNumber2 = Math.floor(Math.random() * 50) + 1;

    document.getElementById("randomNumber1").textContent = newRandomNumber1;
    document.getElementById("randomNumber2").textContent = newRandomNumber2;

    startTimer(10);
}

function startTimer(seconds) {
    let timeRemaining = seconds;
    updateTimerDisplay(timeRemaining);

    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay(timeRemaining);

        if (timeRemaining === 0) {
            clearInterval(timerInterval);
            const generateNewNumbers = confirm("Time's up! Generate new random numbers.");
            if (generateNewNumbers) {
                generateRandomNumbers();
            } else {
                document.getElementById("result").innerHTML = "Time's up!";
            }
        }
    }, 1000);
}

function updateTimerDisplay(timeRemaining) {
    document.getElementById("timer").textContent = "Time remaining: " + timeRemaining + " seconds";
}

let correctTally = 0;

function calculateAndDisplaySum() {
    const randomNumber1 = parseInt(document.getElementById("randomNumber1").textContent);
    const randomNumber2 = parseInt(document.getElementById("randomNumber2").textContent);
    const userAnswer = parseInt(document.getElementById("userAnswer").value);
    const correctAnswer = randomNumber1 + randomNumber2;
    

    const resultElement = document.getElementById("result");
            if (userAnswer === correctAnswer) {
                resultElement.innerHTML = "AWESOME! The correct answer is " + correctAnswer;
                correctTally +=1;
                document.getElementById("correctTally").textContent = correctTally; 
                clearInterval(timerInterval);
                document.getElementById("userAnswer").value = "";
            } else {
                resultElement.innerHTML = "Incorrect. Generate new numbers.";
                clearInterval(timerInterval);
            }
        }
