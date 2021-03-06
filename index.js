import { generateNames, speciesNames } from "./name_generator.js";

/**
 * Generate names for the selected species and update the DOM.
 */
function generate() {
	const selectionBox = document.getElementById('species');
	const selected = selectionBox.options[selectionBox.selectedIndex].value;
	if (!selected) {
		return;
	}

	const title = document.querySelector('.results-container h3');
	title.innerHTML = `Results for ${selected}`;

	const names = generateNames(selected);
	const resultsBox = document.getElementById('results');
	resultsBox.innerHTML = null;
	names.forEach(name => resultsBox.appendChild(makeNameNode(name)));
}

/**
 * Given a generated name, create a DOM node and return it.
 * @param {string} name - A generated name
 * @returns {HTMLDivElement} - The name node
 */
function makeNameNode(name) {

	const recordName = () => {
		const textBox = document.querySelector('.results-container textarea');
		const content = textBox.value.trim();
		if (!content) {
			textBox.value = name;
		} else {
			textBox.value = content + "\n" + name;
		}
	};

	const node = document.createElement('div');
	node.textContent = name;
	const icon = document.createElement('span');
	icon.textContent = '›';
	icon.addEventListener('click', recordName);
	node.appendChild(icon);
	return node;
}

/**
 * On load, set up the species selection box and load an initial set of names.
 */
window.onload = function () {
	const selectionBox = document.getElementById('species');
	for (const name of speciesNames) {
		const option = document.createElement('option');
		option.value = name;
		option.innerHTML = name;
		selectionBox.appendChild(option);
	}
	selectionBox.selectedIndex = 0;
	selectionBox.focus();
	const textBox = document.querySelector('.results-container textarea');
	textBox.addEventListener('focus', textBox.select);
	document.querySelector('button').addEventListener('click', generate);
	generate();
};
