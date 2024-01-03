let  playresultat = 0;
let motstånadare = 0;
const vinnareresultat = 5

function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function updateScore() {
    document.getElementById('score').innerText = `Spelare: ${playresultat} | Dator: ${motstånadare}`;
}

function playerChoice(playerSelection) {
    const computerSelection = computerChoice();

    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playresultat++;
        document.getElementById('result').innerText = `Du vinner! ${playerSelection} slår ${computerSelection}`;

    } else if (playerSelection === computerSelection) {
        document.getElementById('result').innerText = `Oavgjort! Båda valde ${playerSelection}`;

    } else {
        motstånadare++;
        document.getElementById('result').innerText = `Du förlorar! ${computerSelection} slår ${playerSelection}`;
    }

    // Check for the winner
    if (playresultat === vinnareresultat || motstånadare === vinnareresultat) {
        const winner = playresultat === vinnareresultat ? 'Spelaren' : 'Datorn';
        alert(`${winner} vinner spelet!`);
        // Reset scores
        playresultat = 0;
        motstånadare = 0;
    }

    updateScore();
}