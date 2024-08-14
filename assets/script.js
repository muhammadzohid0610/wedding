function toggleModal() {
	var modal = document.getElementById('menuModal');
	modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
}

function showRoute(route) {
	document.querySelectorAll('.route').forEach(section => {
		section.style.display = 'none';
	});
	const target = document.getElementById(route);
	if (target) {
		target.style.display = 'block';
		localStorage.setItem('currentRoute', route);
	} else {
		console.error('Route not found:', route);
	}
}

document.querySelectorAll('nav a, .modal a').forEach(link => {
	link.addEventListener('click', (event) => {
		event.preventDefault();
		const route = event.target.getAttribute('data-route');
		showRoute(route);
		toggleModal();
	});
});

const currentRoute = localStorage.getItem('currentRoute') || 'home';
showRoute(currentRoute);