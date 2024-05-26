document.addEventListener('DOMContentLoaded', function () {
    let moveHistory = [];
    let currentPlayer = 1;
    let playerScores = [0, 0];
    let currentAudio;

    const questions = [
        // Row 0
        {
            row: 0,
            col: 0,
            question: "What is the capital of France?",
            answer: "Paris",
            sound: "paris.mp3",
            value: 100,
            asked: 0,
            answerSound: "parisAns.mp3"
        },
        {
            row: 0,
            col: 1,
            question: "Which British rock band wrote the song 'Yesterday'?",
            answer: "The Beatles",
            sound: "beatles.mp3",
            value: 100,
            asked: 0,
            answerSound: "beatlesAns.mp3"
        },
        {
            row: 0,
            col: 2,
            question: "Who was the lead singer of the rock band Queen?",
            answer: "Freddie Mercury",
            sound: "queen.mp3",
            value: 100,
            asked: 0,
            answerSound: "queenAns.mp3"
        },
        {
            row: 0,
            col: 3,
            question: "Which American singer-songwriter wrote the song 'Respect'?",
            answer: "Aretha Franklin",
            sound: "respect.mp3",
            value: 100,
            asked: 0,
            answerSound: "respectAns.mp3"
        },
        {
            row: 0,
            col: 4,
            question: "Who was the lead guitarist of the rock band Guns N' Roses?",
            answer: "Slash",
            sound: "slash.mp3",
            value: 100,
            asked: 0,
            answerSound: "slashAns.mp3"
        },
        {
            row: 0,
            col: 5,
            question: "Which American rock band wrote the song 'Barracuda'?",
            answer: "Heart",
            sound: "heart.mp3",
            value: 100,
            asked: 0,
            answerSound: "heartAns.mp3"
        },

        // Row 1
        {
            row: 1,
            col: 0,
            question: "Which Australian rock band wrote the song 'Highway to Hell'?",
            answer: "AC/DC",
            sound: "acdc.mp3",
            value: 200,
            asked: 0,
            answerSound: "acdcAns.mp3"
        },
        {
            row: 1,
            col: 1,
            question: "Who was the lead singer of the rock band Led Zeppelin?",
            answer: "Robert Plant",
            sound: "ledzeppelin.mp3",
            value: 200,
            asked: 0,
            answerSound: "ledzeppelinAns.mp3"
        },
        {
            row: 1,
            col: 2,
            question: "Which American rock band wrote the song 'Hotel California'?",
            answer: "Eagles",
            sound: "eagles.mp3",
            value: 200,
            asked: 0,
            answerSound: "eaglesAns.mp3"
        },
        {
            row: 1,
            col: 3,
            question: "Who was the lead singer of the rock band The Rolling Stones?",
            answer: "Mick Jagger",
            sound: "rollingstones.mp3",
            value: 200,
            asked: 0,
            answerSound: "rollingstonesAns.mp3"
        },
        {
            row: 1,
            col: 4,
            question: "Which American rock band wrote the song 'Smells Like Teen Spirit'?",
            answer: "Nirvana",
            sound: "nirvana.mp3",
            value: 200,
            asked: 0,
            answerSound: "nirvanaAns.mp3"
        },
        {
            row: 1,
            col: 5,
            question: "Who was the lead singer of the rock band Van Halen?",
            answer: "David Lee Roth",
            sound: "vanhalen.mp3",
            value: 200,
            asked: 0,
            answerSound: "vanhalenAns.mp3"
        },

        // Row 2
        {
            row: 2,
            col: 0,
            question: "Who was the lead singer of the rock band The Who?",
            answer: "Roger Daltrey",
            sound: "thewho.mp3",
            value: 300,
            asked: 0,
            answerSound: "thewhoAns.mp3"
        },
        {
            row: 2,
            col: 1,
            question: "Which American rock band wrote the song 'Barracuda'?",
            answer: "Heart",
            sound: "heart.mp3",
            value: 300,
            asked: 0,
            answerSound: "heartAns.mp3"
        },
        {
            row: 2,
            col: 2,
            question: "Who was the lead guitarist of the rock band Van Halen?",
            answer: "Eddie Van Halen",
            sound: "vanhalen.mp3",
            value: 300,
            asked: 0,
            answerSound: "vanhalenAns.mp3"
        },
        {
            row: 2,
            col: 3,
            question: "Which British rock band wrote the song 'Stairway to Heaven'?",
            answer: "Led Zeppelin",
            sound: "stairwaytoheaven.mp3",
            value: 300,
            asked: 0,
            answerSound: "stairwaytoheavenAns.mp3"
        },
        {
            row: 2,
            col: 4,
            question: "Who was the lead singer of the rock band Aerosmith?",
            answer: "Steven Tyler",
            sound: "aerosmith.mp3",
            value: 300,
            asked: 0,
            answerSound: "aerosmithAns.mp3"
        },
        {
            row: 2,
            col: 5,
            question: "Which American rock band wrote the song 'Sweet Emotion'?",
            answer: "Aerosmith",
            sound: "aerosmith.mp3",
            value: 300,
            asked: 0,
            answerSound: "aerosmithAns.mp3"
        },

        // Row 3
        {
            row: 3,
            col: 0,
            question: "Which American rock band wrote the song 'Bohemian Rhapsody'?",
            answer: "Queen",
            sound: "bohemianrhapsody.mp3",
            value: 400,
            asked: 0,
            answerSound: "bohemianrhapsodyAns.mp3"
        },
        {
            row: 3,
            col: 1,
            question: "Who was the lead singer of the rock band Guns N' Roses?",
            answer: "Axl Rose",
            sound: "gunsnroses.mp3",
            value: 400,
            asked: 0,
            answerSound: "gunsnrosesAns.mp3"
        },
        {
            row: 3,
            col: 2,
            question: "Which British rock band wrote the song 'Satisfaction'?",
            answer: "The Rolling Stones",
            sound: "satisfaction.mp3",
            value: 400,
            asked: 0,
            answerSound: "satisfactionAns.mp3"
        },
        {
            row: 3,
            col: 3,
            question: "Who was the lead guitarist of the rock band The Eagles?",
            answer: "Joe Walsh",
            sound: "eagles.mp3",
            value: 400,
            asked: 0,
            answerSound: "eaglesAns.mp3"
        },
        {
            row: 3,
            col: 4,
            question: "Which American rock band wrote the song 'Come As You Are'?",
            answer: "Nirvana",
            sound: "nirvana.mp3",
            value: 400,
            asked: 0,
            answerSound: "nirvanaAns.mp3"
        },
        {
            row: 3,
            col: 5,
            question: "Who was the lead singer of the rock band AC/DC?",
            answer: "Bon Scott",
            sound: "acdc.mp3",
            value: 400,
            asked: 0,
            answerSound: "acdcAns.mp3"
        },

        // Row 4
        {
            row: 4,
            col: 0,
            question: "Who was the lead singer of the rock band AC/DC?",
            answer: "Bon Scott",
            sound: "acdc.mp3",
            value: 500,
            asked: 0,
            answerSound: "acdcAns.mp3"
        },
        {
            row: 4,
            col: 1,
            question: "Which British rock band wrote the song 'Yesterday'?",
            answer: "The Beatles",
            sound: "yesterday.mp3",
            value: 500,
            asked: 0,
            answerSound: "yesterdayAns.mp3"
        },
        {
            row: 4,
            col: 2,
            question: "Who was the lead guitarist of the rock band The Who?",
            answer: "Pete Townshend",
            sound: "thewho.mp3",
            value: 500,
            asked: 0,
            answerSound: "thewhoAns.mp3"
        },
        {
            row: 4,
            col: 3,
            question: "Which American rock band wrote the song 'Sweet Emotion'?",
            answer: "Aerosmith",
            sound: "aerosmith.mp3",
            value: 500,
            asked: 0,
            answerSound: "aerosmithAns.mp3"
        },
        {
            row: 4,
            col: 4,
            question: "Who was the lead singer of the rock band Van Halen?",
            answer: "David Lee Roth",
            sound: "vanhalen.mp3",
            value: 500,
            asked: 0,
            answerSound: "vanhalenAns.mp3"
        },
        {
            row: 4,
            col: 5,
            question: "Which American rock band wrote the song 'Dream On'?",
            answer: "Aerosmith",
            sound: "dreamon.mp3",
            value: 500,
            asked: 0,
            answerSound: "dreamonAns.mp3"
        }
    ];

    function handleQuestionClick(event) {
        const question = event.target;
        const questionData = questions.find(q => q.row === parseInt(question.dataset.row) && q.col === parseInt(question.dataset.col));

        if (questionData) {
            showQuestionModal(questionData);
        } else {
            console.error("Question data not found for row " + question.dataset.row + " and col " + question.dataset.col);
        }
    }

    function showQuestionModal(questionData) {
        stopCurrentSound();
        clearModalContent();
        // Hide the game board, player scores, and switch players button
        document.querySelector('.game-board').classList.add('invisible');
        // document.querySelector('.player-scores').classList.add('invisible');
        document.querySelector('.switch-player').classList.add('invisible');

        // Show the modal
        const modal = document.getElementById("question-modal");
        modal.classList.remove('invisible');
        modal.classList.add('modal-visible'); // Add the modal-visible class
        modal.querySelector(".question-text").textContent = questionData.question;

        // Remove the close button if it exists
        var closeButton = modal.querySelector('.close-button');
        if (closeButton) {
            closeButton.remove();
        }

        if (questionData.asked === 0) {
            modal.querySelector(".play-sound").addEventListener("click", () => playSound(questionData.sound));
            modal.querySelector(".show-answer").addEventListener("click", () => showAnswer(questionData));
        } else {
            modal.querySelector(".play-sound").style.display = 'none';
            modal.querySelector(".show-answer").style.display = 'none';
            const closeButton = document.createElement('button');
            closeButton.textContent = 'Close';
            closeButton.className = 'close-button'; // Add the close-button class
            closeButton.addEventListener('click', hideQuestionModal);
            modal.appendChild(closeButton);
        }

        closeButton = modal.querySelector('.close-button');
        let closeXButton = modal.querySelector('.close-x');
        if (closeXButton) {
            closeXButton.remove();
        }
        if (!closeButton) {
            closeXButton = document.createElement('button');
            closeXButton.classList.add('close-x');
            closeXButton.innerHTML = '&#x2715;';
            closeXButton.addEventListener('click', hideQuestionModal);
            modal.appendChild(closeXButton);
        }
    }

    function stopCurrentSound() {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentAudio = null;
        }
    }

    function playSound(soundFile) {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        currentAudio = new Audio(`sounds/${soundFile}`);
        currentAudio.play();
    }

    function showAnswer(questionData) {
        stopCurrentSound();
        const answer = document.querySelector(".answer");
        answer.style.display = "block";
        answer.querySelector(".answer-text").textContent = questionData.answer;

        // Destroy the right and wrong buttons if they exist
        const existingRightButton = answer.querySelector(".right");
        const existingWrongButton = answer.querySelector(".wrong");
        if (existingRightButton) {
            existingRightButton.remove();
        }
        if (existingWrongButton) {
            existingWrongButton.remove();
        }

        // Create new right and wrong buttons
        const rightButton = document.createElement("button");
        rightButton.textContent = "Right";
        rightButton.className = "right";
        rightButton.addEventListener("click", () => handleAnswerClick(true, questionData));
        answer.appendChild(rightButton);

        const wrongButton = document.createElement("button");
        wrongButton.textContent = "Wrong";
        wrongButton.className = "wrong";
        wrongButton.addEventListener("click", () => handleAnswerClick(false, questionData));
        answer.appendChild(wrongButton);

        // Hide the 'show answer' button
        document.querySelector(".show-answer").style.display = 'none';

        // Update the 'play sound' button to play the answer sound
        document.querySelector(".play-sound").addEventListener("click", () => playSound(questionData.answerSound));
    }

    function handleAnswerClick(isCorrect, questionData) {
        stopCurrentSound();
        moveHistory.push({
            playerScores: [...playerScores],
            currentPlayer,
            questionData
        });
        console.log("Question Data:", questionData.value);
        console.log("Player Score:", playerScores[currentPlayer - 1]);
        if (isCorrect) {
            playerScores[currentPlayer - 1] = playerScores[currentPlayer - 1] + questionData.value;
        } else {
            playerScores[currentPlayer - 1] = playerScores[currentPlayer - 1] - questionData.value;
        }
        questionData.asked = 1; // Mark the question as asked
        const questionDiv = document.querySelector(`.question[data-row="${questionData.row}"][data-col="${questionData.col}"]`);
        questionDiv.textContent = '';
        updatePlayerScores();
        hideQuestionModal();
        clearModalContent();
        document.querySelector(".play-sound").addEventListener("click", () => playSound(questionData.answerSound));

        // Enable the answer sound button
        const answerSoundButton = document.querySelector(`.answer-sound-button[data-question-row="${questionData.row}"][data-question-col="${questionData.col}"]`);
        answerSoundButton.disabled = false;
        answerSoundButton.classList.remove('disabled'); // Remove greyed out style
    }

    function updatePlayerScores() {
        document.getElementById(`player${currentPlayer}-score`).textContent = `Player ${currentPlayer}: ${playerScores[currentPlayer - 1]}`;
        const currentPlayerArrow = document.getElementById('current-player-arrow');
        if (currentPlayer === 1) {
            currentPlayerArrow.style.marginLeft = '290px';
        } else {
            currentPlayerArrow.style.marginLeft = '1050px';
        }
    }

    function hideQuestionModal() {
        stopCurrentSound();
        console.log("Hiding question modal");
        const modal = document.getElementById("question-modal");
        modal.classList.add('invisible');
        modal.classList.remove('modal-visible'); // Remove the modal-visible class

        // Show the game board, player scores, and switch players button
        document.querySelector('.game-board').classList.remove('invisible');
        document.querySelector('.player-scores').classList.remove('invisible');
        document.querySelector('.switch-player').classList.remove('invisible');
    }

    function clearModalContent() {
        const modal = document.getElementById("question-modal");
        modal.querySelector(".question-text").textContent = '';
        modal.querySelector(".play-sound").style.display = 'inline-block';
        modal.querySelector(".show-answer").style.display = 'inline-block';
        modal.querySelector(".answer").style.display = 'none';
        modal.querySelector(".answer-text").textContent = '';
        const closeButton = modal.querySelector('button[textContent="Close"]');
        if (closeButton) {
            closeButton.remove();
        }
    }

    document.querySelectorAll(".question").forEach(question => {
        question.addEventListener("click", handleQuestionClick);
    });

    document.querySelector(".switch-player").addEventListener("click", () => {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        updatePlayerScores();
    });

    document.getElementById("question-modal").classList.add('invisible');

    document.querySelector(".reset-button").addEventListener("click", resetGame);
    document.querySelector(".undo-button").addEventListener("click", undoTurn);

    function resetGame() {
        stopCurrentSound();
        // Reset player scores
        playerScores = [0, 0];
        document.getElementById('player1-score').textContent = 'Player 1: 0';
        document.getElementById('player2-score').textContent = 'Player 2: 0';

        // Reset current player
        currentPlayer = 1;
        const currentPlayerArrow = document.getElementById('current-player-arrow');
        currentPlayerArrow.style.marginLeft = '290px';

        // Reset questions
        questions.forEach(question => {
            question.asked = 0;
        });

        // Reset grid presentation
        document.querySelectorAll(".question[data-row][data-col]").forEach(question => {
            const row = parseInt(question.dataset.row);
            const col = parseInt(question.dataset.col);
            question.textContent = questions.find(q => q.row === row && q.col === col).value;
        });
        document.querySelectorAll('.answer-sound-button').forEach(button => {
            button.textContent = ''; // Hide the text content
            button.classList.add('disabled'); // Make the button disabled again
        });
    }

    function undoTurn() {
        stopCurrentSound();
        if (moveHistory.length > 0) {
            const previousState = moveHistory.pop();

            // Restore the previous state
            playerScores = previousState.playerScores;
            currentPlayer = previousState.currentPlayer;

            // Reset the question that was answered in the previous turn
            const question = questions.find(q => q.row === previousState.questionData.row && q.col === previousState.questionData.col);
            question.asked = 0;

            // Update the score display
            document.getElementById(`player${currentPlayer}-score`).textContent = `Player ${currentPlayer}: ${playerScores[currentPlayer - 1]}`;

            // Reset the content of the node
            const questionDiv = document.querySelector(`.question[data-row="${previousState.questionData.row}"][data-col="${previousState.questionData.col}"]`);
            questionDiv.textContent = previousState.questionData.value;
            const answerSoundButton = document.querySelector(`.answer-sound-button[data-question-row="${previousState.questionData.row}"][data-question-col="${previousState.questionData.col}"]`);
            answerSoundButton.textContent = ''; // Hide the text content
            answerSoundButton.classList.add('disabled'); // Make the button disabled again

            
        }
    }

    function createAnswerSoundButtons() {
        const answerSoundButtonsLeft = document.querySelector('.answer-sound-buttons-left');
        const answerSoundButtonsRight = document.querySelector('.answer-sound-buttons-right');
        questions.forEach((question, index) => {
            const button = document.createElement('button');
            button.textContent = ''; // Set the text content to an empty string initially
            button.dataset.questionRow = question.row;
            button.dataset.questionCol = question.col;
            button.disabled = true; // Start out disabled (greyed out)
            button.classList.add('answer-sound-button');
            button.classList.add('disabled'); // Add greyed out style
            if (index < questions.length / 2) {
                answerSoundButtonsLeft.appendChild(button);
            } else {
                answerSoundButtonsRight.appendChild(button);
            }
        });
    }
    createAnswerSoundButtons();

    document.querySelectorAll('.answer-sound-button').forEach((button) => {
        button.addEventListener('click', () => {
            const questionRow = parseInt(button.dataset.questionRow);
            const questionCol = parseInt(button.dataset.questionCol);
            const questionData = questions.find((q) => q.row === questionRow && q.col === questionCol);
            playSound(questionData.answerSound);
            button.textContent = `Play ${questionData.answer} Sound`; // Update the text content of the button
        });
    });

    document.querySelector('.reset-button').addEventListener('click', stopCurrentSound);
    document.querySelector('.undo-button').addEventListener('click', stopCurrentSound);

    

});