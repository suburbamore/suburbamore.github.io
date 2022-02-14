let bio_lines = ["Hello! I'm Alice Bibaud.", "I am a junior Computer Science student at Rensselaer Polytechnic Institute,", "and am actively looking for internships in computing.", "Welcome to my website - I hope you find what you're looking for here."];

let body_elem = document.getElementsByTagName("body")[0];

bio_lines.forEach(text => {
	let new_line = document.createElement("pre");
	new_line.classList.add("typewrite");
	new_line.innerText = text;

	body_elem.appendChild(new_line);
});