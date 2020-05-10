const game = () => {
	let initialPlayerScore = 0;
	let initialComputerScore = 0;
	const playBtn = document.querySelector('.intro button');
	const introScreen = document.querySelector('.intro');
	const match = document.querySelector('.match');

	const startGame = () => {
		playBtn.addEventListener('click',() =>{
			introScreen.classList.add('fadeOut');
			match.classList.add('fadeIn')
		})
	}
	const playMatch = () =>{
		const options = document.querySelectorAll('.options button');
		const playerHand = document.querySelector('.player-hand');
		const computerHand = document.querySelector('.computer-hand');

		const computerOptions = ["rock","paper","scissors"];
		options.forEach(option =>{
			option.addEventListener("click",()=>{
				const playerChoice = option.textContent;
				console.log("****player choice is:",option.textContent);
				const computerNumber = Math.floor(Math.random() *3);
				const computerChoice = computerOptions[computerNumber];
				console.log("computer choice is: ",computerChoice);
				//compareHands va fi executat aici
				compareHands(playerChoice,computerChoice);
				//update imagini
				playerHand.src = `./assets/${option.textContent}.png`;
				computerHand.src = `./assets/${computerChoice}.png`;
				//restart the match
				restartMatch();
			});
		});
	};
	
	const divDom = (id) =>{
		setTimeout(function(){ 
			const container = document.querySelector('.containerRestart')
		const divElem = document.createElement("div");
		divElem.classList.add('restart')
		divElem.innerHTML=`
			<h1>The Winner is: ${id} !</h1>
			<button>Restart</button>`
		container.appendChild(divElem);
		const restart = document.querySelector('.restart')
		restart.classList.add('fadeIn');
		const restartBtn = document.querySelector('.restart button')
		restartBtn.addEventListener("click",()=>{
			window.location.reload();
		})
		}, 1000);
		

	}
	const restartMatch = () => {
		if(initialPlayerScore === 3){
			console.log("restartMatch");
			match.classList.remove('fadeIn')
			
			divDom("Player")
		}else if(initialComputerScore === 3){	
			match.classList.remove('fadeIn')
			divDom("Computer")
		}	
	}
	const updateScore = () =>{
		const playerScore = document.querySelector('.player-score p');
		const computerScore = document.querySelector('.computer-score p');
		playerScore.innerHTML = initialPlayerScore;
		computerScore.innerHTML = initialComputerScore;

	};
	const compareHands = (playerChoice,computerChoice) => {
		const winner = document.querySelector('.winner');
		if(playerChoice === computerChoice){
			winner.textContent = "It's a draw!";
			return;
		}
		if(playerChoice === 'rock'){
			if(computerChoice === 'scissors'){
				winner.textContent = 'Player Wins';
				initialPlayerScore ++;
				updateScore();
				return;
			}else {
				winner.textContent = 'Computer Wins';
				initialComputerScore ++;
				updateScore();
				return;
			}
		}
		if(playerChoice === 'paper'){
			if(computerChoice === 'scissors'){
				winner.textContent = 'Computer Wins';
				initialComputerScore ++;
				updateScore();
				return;
			}else {
				winner.textContent = 'Player Wins';
				initialPlayerScore ++;
				updateScore();
				return;
			}
		}
		if(playerChoice === 'scissors'){
			if(computerChoice === 'rock'){
				winner.textContent = 'Computer Wins';
				initialComputerScore ++;
				updateScore();
				return;
			}else {
				winner.textContent = 'Player Wins';
				initialPlayerScore ++;
				updateScore();
				return;
			}
		}
	};
	startGame();
	playMatch();
}
game();
