document.addEventListener("DOMContentLoaded", () => {
	//Loading cards
	const cardsArray = [
		{
			name: "ganhou",
			img: "images/ganhou.png",
		},
		{
			name: "ganhou",
			img: "images/ganhou.png",
		},
		{
			name: "direita",
			img: "images/direita.png",
		},
		{
			name: "direita",
			img: "images/direita.png",
		},
		{
			name: "esquerda",
			img: "images/esquerda.png",
		},
		{
			name: "esquerda",
			img: "images/esquerda.png",
		},
		{
			name: "correndo",
			img: "images/correndo.png",
		},
		{
			name: "correndo",
			img: "images/correndo.png",
		},
		{
			name: "tras",
			img: "images/tras.png",
		},
		{
			name: "tras",
			img: "images/tras.png",
		},
		{
			name: "pulo",
			img: "images/pulo.png",
		},
		{
			name: "pulo",
			img: "images/pulo.png",
		},
	];

	cardsArray.sort(() => 0.5 - Math.random());

	const grid = document.querySelector(".grid");

	const scoreBoard = document.querySelector("#result");
	let cardsChoosen = [];
	let cardsChoosenId = [];
	let pairs = [];

	//Creating board
	function createBoard() {
		for (let i = 0; i < cardsArray.length; i++) {
			let card = document.createElement("img");
			card.setAttribute("src", "images/card.png");
			card.setAttribute("data-id", i);
			card.addEventListener("click", flipCard);
			grid.appendChild(card);
		}
	}

	//Checking pairs
	function checkforMatch() {
		let cards = document.querySelectorAll("img");
		const optionOneId = cardsChoosenId[0];
		const optionTwoId = cardsChoosenId[1];

		//Click twice on the same card
		if (optionOneId == optionTwoId) {
			cards[optionOneId].setAttribute("src", "images/card.png");
			cards[optionTwoId].setAttribute("src", "images/card.png");
			alert("You clicked on the same image");
		}
		//Found a pair
		else if (cardsChoosen[0] == cardsChoosen[1]) {
			alert("Found a pair");
			cards[optionOneId].setAttribute("src", "images/white.png");
			cards[optionTwoId].setAttribute("src", "images/white.png");
			cards[optionOneId].removeEventListener("click", flipCard);
			cards[optionTwoId].removeEventListener("click", flipCard);
			pairs.push(cardsChoosen);
		}
		//Not found a pair
		else {
			cards[optionOneId].setAttribute("src", "images/card.png");
			cards[optionTwoId].setAttribute("src", "images/card.png");
			alert("Ops! Try again");
		}
		cardsChoosen = [];
		cardsChoosenId = [];
		scoreBoard.textContent = pairs.length;

		if (pairs.length == cardsArray.length / 2) {
			scoreBoard.textContent = "Congratulation, you found all pairs";
		}
	}

	//Flip card
	function flipCard() {
		let cardId = this.getAttribute("data-id");
		cardsChoosen.push(cardsArray[cardId].name);
		cardsChoosenId.push(cardId);
		this.setAttribute("src", cardsArray[cardId].img);
		if (cardsChoosen.length == 2) {
			setTimeout(checkforMatch, 500);
		}
	}
	createBoard();
});
