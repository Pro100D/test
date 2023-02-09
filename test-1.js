const colors = [
	{ hex: "#2970e3" },
	{ hex: "#18de43" },
	{ hex: "#e815d6" },
	{ hex: "#d62940" },
	{ hex: "#c0cc1d" },
	{ hex: "#0ad1a9" },
	{ hex: "#d1a51f" },
	{ hex: "#c73c12" },
	{ hex: "#bd0670" },
	{ hex: "#d461a4" },
	{ hex: "#5e1e44" },
	{ hex: "#e6325f" },
	{ hex: "#07e324" },
	{ hex: "#20c9b6" },
	{ hex: "#4a7325" },
	{ hex: "#a10de0" },
	{ hex: "#c1de90" },
	{ hex: "#723e9c" },
	{ hex: "#074212" },
	{ hex: "#4d0532" },
	{ hex: "#4d0507" },
	{ hex: "#07e9f5" },
	{ hex: "#0408d1" },
];

const colorsListContainer = document.querySelector(".colors-js");

const cardsMarkup = createColorCards(colors);

colorsListContainer.insertAdjacentHTML("beforeend", cardsMarkup);

console.log();

function createColorCards(colors) {
	return colors
		.map(({ hex }) => {
			return ` <div class="card-fon">
                        <div data-hex="${hex}" class="color-swatch" style="background-color: ${hex}"></div>
                        <div><p class="color-text">Поменять на этот: ${hex};</p></div>
                    </div>`;
		})
		.join("");
}

colorsListContainer.addEventListener("click", onClickСhangeColorContainer);

function onClickСhangeColorContainer(event) {
	if (!event.target.classList.contains("color-swatch")) {
		return;
	}

	const currentActiveCard = document.querySelector(".card-fon.is-active");

	if (currentActiveCard) {
		currentActiveCard.classList.remove("is-active");
	}

	const swatchEl = event.target;
	const parantColorCard = swatchEl.closest(".card-fon");

	parantColorCard.classList.add("is-active");

	document.body.style.backgroundColor = swatchEl.dataset.hex;
}
