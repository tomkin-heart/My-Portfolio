const hamburger = document.getElementById('hamburger')
const navLinks = document.getElementById('nav-links')

hamburger.addEventListener('click', () => {
	navLinks.classList.toggle('show')
	hamburger.classList.toggle('active')
})

navLinks.addEventListener('click', () => {
	navLinks.classList.remove('show')
	hamburger.classList.remove('active')
})

const contactLink = document.querySelector('a[href="#contact"]')
const contactSection = document.getElementById('contact')
const main = document.querySelector('main')
const projects = document.getElementById('projects')
const skills = document.getElementById('skills')

contactLink.addEventListener('click', e => {
	e.preventDefault()

	if (!contactSection.classList.contains('show')) {
		contactSection.classList.toggle('show')
		main.classList.toggle('hide')
		projects.classList.toggle('hide')
		skills.classList.toggle('hide')
	}
})

const aboutLink = document.querySelector('a[href="#about_me"]')
const projectsLink = document.querySelector('a[href="#projects"]')
const skillsLink = document.querySelector('a[href="#skills"]')

aboutLink.addEventListener('click', () => {
	contactSection.classList.remove('show')
	main.classList.remove('hide')
	projects.classList.remove('hide')
	skills.classList.remove('hide')
})

projectsLink.addEventListener('click', () => {
	contactSection.classList.remove('show')
	main.classList.remove('hide')
	projects.classList.remove('hide')
	skills.classList.remove('hide')
})

skillsLink.addEventListener('click', () => {
	contactSection.classList.remove('show')
	main.classList.remove('hide')
	projects.classList.remove('hide')
	skills.classList.remove('hide')
})

setTimeout(() => {
	window.scrollTo({
		top: contactSection.offsetTop,
		behavior: 'smooth',
	})
}, 40)
