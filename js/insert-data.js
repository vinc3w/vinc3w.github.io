import { skillTemplate, projectTemplate } from "./templates.js";

const webDevSkillsContainer = document.getElementById('web-dev-skills');
const serverSkillsContainer = document.getElementById('server-skills');
const technologySkillsContainer = document.getElementById('technology-skills');
const languageSkillsContainer = document.getElementById('language-skills');

const projectContainer = document.getElementById('project-container');

fetch('../res/data/skills.json')
    .then(res => res.json())
    .then(skills => {

        skills['web-dev'].forEach(s => {

            webDevSkillsContainer.insertAdjacentHTML('beforeend', skillTemplate(s));

        });

        skills['server'].forEach(s => {

            serverSkillsContainer.insertAdjacentHTML('beforeend', skillTemplate(s));

        });

        skills['technology'].forEach(s => {

            technologySkillsContainer.insertAdjacentHTML('beforeend', skillTemplate(s));

        });

        skills['language'].forEach(s => {

            languageSkillsContainer.insertAdjacentHTML('beforeend', skillTemplate(s));

        });
        
    });

fetch('../res/data/projects.json')
    .then(res => res.json())
    .then(projects => {

        projects.forEach(p => {

            projectContainer.insertAdjacentHTML('beforeend', projectTemplate(p));

        });

    });
