import get from "./get.js";

async function main() {

	const container = document.getElementById("me-container");
	const {
		name,
		age,
		favourite,
		intro,
		personalityType,
		pronouns
	} = await get("./res/data/me.json");

	container.insertAdjacentHTML("afterbegin", /*html*/`
		<div class="title">Hello.</div>
		<div class="name">I'm ${name}.</div>
		<div class="pronouns">${pronouns.join("/")}</div>
		<div class="intro">
			I'm ${age} years old and an ${personalityType}.
			I like ${favourite.join(", ")}.
			${intro}
		</div>
	`);

}

main();
