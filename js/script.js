const chk = document.getElementById('status');

chk.addEventListener('change', () => {
	document.body.classList.toggle('night');
});