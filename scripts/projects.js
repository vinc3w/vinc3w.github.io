import get from "./get.js";

async function main() {

	const container = document.getElementById("projects-container");
	const data = await get("./res/data/projects.json");

	data.forEach(p => {
		const tagsHTML = p.tags.map(t => /*html*/`
			<li class="tag">${t}</li>
		`)
		.join("");
		container.insertAdjacentHTML("beforeend", /*html*/`
			<a class="project-wrapper" href="${p.github}" target="_blank">
				<div class="project">
					<div class="img" style="background-image: url('${p.img}')"></div>
					<div class="about">
						<div class="title">${p.name}</div>
						<div class="description" title="${p.description}">${p.description}</div>
						<ul class="tags">${tagsHTML}</ul>
					</div>
				</div>
			</div>
		`);
	});

}

main();
