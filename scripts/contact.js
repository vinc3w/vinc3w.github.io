function main() {

	const form = document.getElementById("contact-form");
	const subjectInput = document.getElementById("contact-subject");
	const bodyInput = document.getElementById("contact-body");

	form.onsubmit = e => {
		const url = `
			mailto:vinc3w59@gmail.com?
				subject=${subjectInput.value}
				&body=${bodyInput.value}
		`;
		open(url, "_blank");
		e.preventDefault();
	}

}

main();
