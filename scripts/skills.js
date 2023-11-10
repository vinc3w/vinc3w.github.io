import get from "./get.js"

function generateSkillsHTML(skills) {

	return skills.map(s => /*html*/`
		<div class="skill-wrapper">
			<div class="skill">
				<div class="img" style="background-image: url('${s.img}')"></div>
				<div class="name">${s.name}</div>
			</div>
		</div>
	`)
	.join("");

}


async function main() {

	const container = document.getElementById("skills-container");
	const data = await get("./res/data/skills.json");

	for (const [category, skills] of Object.entries(data)) {

		const title = category[0].toUpperCase() + category.slice(1);
		container.insertAdjacentHTML("beforeend", /*html*/`
			<div class="sub-heading">
				<div class="title">${title}</div>
				<div class="line"></div>
			</div>
			<div class="skills">${generateSkillsHTML(skills)}</div>
		`);

	}

}

main();
