
document.addEventListener('DOMContentLoaded', () => {
	const imgLightBox = document.querySelectorAll('.materialboxed');
	M.Materialbox.init(imgLightBox, {
		inDuration: 600,
		outDuration: 600
	});
});

const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
});

sr.reveal(".location-image",{
    origin: 'top',
    interval: 100,
});