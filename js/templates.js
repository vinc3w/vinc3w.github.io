export function skillTemplate(s) {

    return `
        <a href="${s.website}" target="_blank" class="skill-wrapper">
            <div class="skill">
                <img src="${s.icon}" alt="icon" class="icon">
                <div class="name">${s.name}</div>
            </div>
        </a>
    `;

}

export function projectTemplate(p) {

    return `
        <div class="project-wrapper">
            <a href="${p.github_link}" target="_blank" class="project">
                <img src="${p.cover_img}" alt="${p.title} cover image">
                <div class="text">
                    <div class="title">${p.title}</div>
                    <div class="description" title="${p.description}">${p.description}</div>
                    <div class="tag-container">
                        ${ p.tags.map(t => `<div>${t}</div>`).join('') }
                    </div>
                </div>
            </a>
        </div>
    `;

}
