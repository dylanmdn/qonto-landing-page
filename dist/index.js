const hamburgerIcon = document.querySelector('#hamburgerIcon');
const navLinks = document.querySelector('#navLinks');

const countryOption = document.querySelector('#country-option');
const countryList = document.querySelector('#country-list');

// Ecouteur d'événements pour afficher ou masquer la liste au clic sur l'icône hamburger
hamburgerIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show-menu')
})

//Rotation de l'icon et afficher liste des pays
countryOption.addEventListener('click', () =>{
    countryOption.classList.toggle('icon-rotate');
    countryList.classList.toggle('show-contry-list')
})


const iconQontoCollapse = document.querySelector('#qontoCollapse');
const iconToolsCollapse = document.querySelector('#toolsCollapse');
const iconAboutCollapse = document.querySelector('#aboutCollapse');
const qontoPanel = document.querySelector('#qontoPanel');
const toolsPanel = document.querySelector('#toolsPanel');
const aboutPanel = document.querySelector('#aboutPanel');

//Basculer l'état d'un panneau de plier à déplier
const toggleAccordion = (icon, panel) => {
    icon.classList.toggle('icon-rotate');
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
};



iconQontoCollapse.addEventListener('click', () => {
    toggleAccordion(iconQontoCollapse, qontoPanel);
});

iconToolsCollapse.addEventListener('click', () => {
    toggleAccordion(iconToolsCollapse, toolsPanel);
});

iconAboutCollapse.addEventListener('click', () => {
    toggleAccordion(iconAboutCollapse, aboutPanel);
});