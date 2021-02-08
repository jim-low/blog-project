import { imgDir, projectsList, credentials } from './renderData.js' 

const jimSection = document.getElementById('jim-projects')
const jasonSection = document.getElementById('jason-projects')
const teamSection = document.getElementById('alliance')
const sections = [jimSection, jasonSection, teamSection]

function setupProjectElement(title, link, image, desc) {
    const projectDiv = document.createElement('div')
    const projTitle = document.createElement('h3')
    const projLink = document.createElement('a')
    const projImg  = document.createElement('img')
    const projDescPara  = document.createElement('p')
    const titleName = document.createTextNode(title)
    const projDesc = document.createTextNode(desc)

    projectDiv.classList = ['project']
    projTitle.classList = ['title']
    projLink.classList = ['link']
    projImg.classList = ['preview']
    projDescPara.classList = ['desc']

    projLink.href = link
    projImg.src = `${imgDir+image}`
    console.log(projImg.src)

    projLink.appendChild(projImg)
    projTitle.appendChild(titleName)
    projDescPara.appendChild(projDesc)
    projectDiv.appendChild(projTitle)
    projectDiv.appendChild(projLink)
    projectDiv.appendChild(projDescPara)

    return projectDiv
}

for(let i = 0; i < projectsList.length; i++) {
    let section = document.createElement('div')
    let nameTitle = document.createElement('h2')
    let owner = document.createTextNode(projectsList[i].owner)

    nameTitle.classList = ['name']
    nameTitle.appendChild(owner)
    section.classList= ['section', projectsList[i].owner.split(" ")[0]]
    section.appendChild(nameTitle)

    for(let j = 0; j < projectsList[i].projects.length; j++) {
        let projObj = projectsList[i].projects[j]
        let projectElement = setupProjectElement(projObj.title, projObj.link, projObj.image, projObj.desc)
        section.appendChild(projectElement)
    }

    console.log(section)
    sections[i].appendChild(section)
}

