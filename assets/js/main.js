document.addEventListener('DOMContentLoaded', function() {
	const preloader = document.getElementById('preloader');
	const leftDot = document.getElementById('leftDot');
	const rightDot = document.getElementById('rightDot');
	const bracketContainer = document.getElementById('bracketContainer');
	const leftTop = document.getElementById('leftTop');
	const leftBottom = document.getElementById('leftBottom');
	const rightTop = document.getElementById('rightTop');
	const rightBottom = document.getElementById('rightBottom');
	
	let cycles = 0;
	const totalCycles = 2;
	
	function runAnimation() {
		// Reset to initial state
		leftDot.style.opacity = '1';
		rightDot.style.opacity = '1';
		bracketContainer.style.opacity = '0';
		
		leftTop.style.width = '0';
		leftBottom.style.width = '0';
		rightTop.style.width = '0';
		rightBottom.style.width = '0';
		
		// Start animation - expand lines and fade out dots
		setTimeout(() => {
			// Hide dots as lines emerge
			leftDot.style.opacity = '0';
			rightDot.style.opacity = '0';
			bracketContainer.style.opacity = '1';
			
			// Extend bracket lines
			leftTop.style.width = '140px';
			leftBottom.style.width = '140px';
			rightTop.style.width = '140px';
			rightBottom.style.width = '140px';
			
			// Hold the logo state
			setTimeout(() => {
				// Retract lines
				leftTop.style.width = '0';
				leftBottom.style.width = '0';
				rightTop.style.width = '0';
				rightBottom.style.width = '0';
				
				// Show dots again as lines retract
				setTimeout(() => {
					bracketContainer.style.opacity = '0';
					leftDot.style.opacity = '1';
					rightDot.style.opacity = '1';
					
					// Check if we need to repeat cycle
					setTimeout(() => {
						cycles++;
						if (cycles < totalCycles) {
							runAnimation();
						} else {
							// Fade out and remove preloader
							preloader.style.transition = 'opacity 1s ease';
							preloader.style.opacity = '0';
							
							setTimeout(() => {
								preloader.style.display = 'none';
							}, 1000);
						}
					}, 500);
				}, 400);
			}, 1500);
		}, 500);
	}
	
	// Start the animation sequence
	runAnimation();
});

// Show Menu on Mobile
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId)
	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			nav.classList.toggle('show-menu')
		})
	}
}
showMenu('nav-toggle', 'nav-menu')

// Remove Mobile Menu
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Change Background header
function scrollHeader() {
	const nav = document.getElementById('header')
	if (this.scrollY >= 80) nav.classList.add('scroll-header');
	else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Show Scroll Up button
function scrollUp() {
	const scrollUp = document.getElementById('scroll-up');
	if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
	else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
