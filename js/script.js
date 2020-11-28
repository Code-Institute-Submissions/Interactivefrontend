const status = document.getElementById('status');

status.addEventListener('change', () => {
	document.body.classList.toggle('night');
});