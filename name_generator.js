const REDIN = {
	label: 'Redin',
	maxSyllables: 3,
	minSyllables: 2,
	syllables: ['mal', 'run', 'ae', 'kor', 'ith', 'tok', 'ro', 'sha', 'thro', 'storn', 'ja', 'bal',
		'nha', 'han', 'on', 'no', 'os', 'or', 'im', 'la', 'wa', 'yal', 'fii', 'olb', 'arn', 'gan',
		'ul', 'lok', 'krol', 'umn', 'sek', 'rha', 'rho', 'nu', 'kun', 'ber', 'nol', 'ish', 'an',
		'rak', 'to', 'kro', 'aul', 'rae', 'li', 'y', 'sho', 'vael', 'oak', 'var', 'ha']
};

const TIGRUN = {
	label: 'Tigrun',
	maxSyllables: 3,
	minSyllables: 2,
	syllables: ['ga', 'wa', 'yi', 'sho', 'ku', 'renn', 'ya', 'ka', 'ro', 'lun', 'fei', 'li', 'bai',
		'hu', 'kan', 'yu', 'e', 'shi', 'wa', 'ir', 'ha', 'rai', 'rhi', 'al', 'won', 'ta',
		'miu', 'ko', 'fun', 'tai', 'tan', 'zau', 'hom', 'ang', 'ri', 'hwa', 'jun', 'ban', 'ba',
		'gunn', 'fu', 'dai', 'ji', 'toh', 'sei', 'o', 'yuu', 'su', 'sai', 'hii', 'yu', 'jae',
		'mao', 'jang', 'na']
};

const UMRIN = {
	label: 'Umrin',
	maxSyllables: 3,
	minSyllables: 2,
	syllables: ['xir', 'sei', 'xia', 'nan', 'um', 'xis', 'rix', 'zen', 'ri', 'sa', 'in', 'te', 'za', 'zan',
		'ix', 'im', 'en', 'iil', 'an', 'or', 'sun', 'ai', 'zue', 'ban', 'gi', 'ten', 'rat', 'taz',
		'ril', 'ez', 'nas', 'nen', 'ci', 'cia', 'tan', 'ke', 'ser', 'ti', 'set', 'zer', 'val',
		'jin', 'xu', 'xen', 'lu', 'ma', 'el', 'ish', 'zel', 'zet', 'ys', 'cy']
};

const RIKELRIN = {
	label: 'Rikelrin',
	maxSyllables: 3,
	minSyllables: 2,
	syllables: ['as', 'tha', 'ros', 'ta', 'yv', 'od', 'gro', 'mul', 'da', 'ga', 'ron', 'gor', 'nov',
		'va', 'nos', 'nod', 'kor', 'an', 'um', 'dra', 'ath', 'born', 'kar', 'olb', 'aun', 'lod', 'ba',
		'veng', 'rik', 'rol', 'naz', 'ung', 'na', 'tev', 'vin', 'ul', 'tov', 'ata', 'tro', 'yev', 'zha', 'zho',
		'bor', 'nar']
};

const RYAS = {
	label: 'Ryas',
	maxSyllables: 3,
	minSyllables: 2,
	syllables: ['kax', 'zi', 'io', 'nyx', 'ky', 'var', 'fer', 'ze', 'den', 'nar', 'mar', 'rho', 'syl', 'zer',
		'sol', 'set', 'yos', 'nia', 'ia', 'nae', 'a', 'xil', 'ind', 'va', 'ar', 'naz', 'ir', 'nem', 'ven',
		'rys', 'ari', 'an', 'em', 'en', 'kin', 'rhy', 'to', 'zet', 'gal', 'kand', 'nar', 'seo', 'ies',
		'cas', 'zha', 'ius', 'stra', 'ian', 'san', 'dara', 'sef', 'eve', 'tep']
};

const URSUN = {
	label: 'Ursun',
	maxSyllables: 3,
	minSyllables: 1,
	syllables: ['born', 'la', 'har', 'ra', 'fang', 'ir', 'ron', 'gund', 'var', 'hor', 'sko', 'ald', 'ung', 'tun',
		'ulz', 'loth', 'ro', 'fir', 'gol', 'bar', 'un', 'gat', 'ur', 'sind', 'ia', 'weld', 'enn', 'thros', 'sig',
		'tos', 'harl', 'jarl', 'vald', 'dring', 'legg', 'toh', 'skriv', 'am', 'zun', 'ol', 'haeg', 'beo', 'ulf',
		'daen', 'stur', 'heo', 'naeg', 'red', 'thel', 'weyn', 'alf', 'dene', 'hal', 'ga', 'scyl', 'kitt'
	]
};

const HIGHLANDER = {
	label: 'Highlander',
	maxSyllables: 2,
	minSyllables: 1,
	syllables: ['kur', 'rek', 'gen', 'ban', 'jan', 'lan', 'ul', 'ric', 'jorn', 'donn', 'nal', 'thar',
		'orn', 'gor', 'kor', 'zan', 'sab', 'el', 'in', 'os', 'ro', 'reth', 'toh', 'rahl',
		'roth', 'vol', 'rath', 'zen', 'ren', 'dol', 'aen', 'ind', 'rha', 'thor', 'jol', 'rab',
		'aul', 'ta', 'bar', 'ad', 'den', 'wen', 'ma', 'rod', 'dath', 'if', 'thek', 'dar',
		'nos', 'dra', 'du', 'yn', 'ya', 'gar', 'ae', 'stro', 'rit', 'sor', 'jen', 'auk', 'ran',
		'stom', 'rom']
};

const LOWLANDER = {
	label: 'Lowlander',
	maxSyllables: 2,
	minSyllables: 1,
	syllables: ['ed', 'wyn', 'ric', 'jon', 'ald', 'gen', 'ger', 'mel', 'da', 'in', 'mi', 'as', 'don', 'lis',
		'vin', 'etta', 'ton', 'kas', 'stan', 'nic', 'hen', 'ches', 'lin', 'va', 'ner', 'gib', 'son',
		'ma', 'ann', 'ren', 'din', 'gor', 'her', 'leo', 'len', 'dal', 'worth', 'stron', 'gard',
		'red', 'wend', 'shel', 'ome', 'cyn', 'luc', 'ban', 'jo', 'well', 'cor', 'seth', 'ser', 'nis',
		'al', 'jay', 'ai', 'dy', 'tan', 'roth', 'cern', 'wald', 'ven', 'grey', 'bor', 'es', 'ler',
		'ster', 'zel', 'dan', 'ole', 'a', 'by', 'ard', 'holl', 'and', 'way', 'clyn', 'wan', 'os', 'brad',
		'wor', 'bert', 'ham', 'lia', 'del', 'bran', 'tram', 'ber', 'mer', 'som', 'beck', 'ian', 'vand', 'ol', 'teo',
		'ain', 'tov', 'han', 'lock', 'grimm', 'wyrd', 'ash', 'stan', 'stein']
};

const speciesMap = {
	highlander: HIGHLANDER,
	lowlander: LOWLANDER,
	ryas: RYAS,
	rikelrin: RIKELRIN,
	umrin: UMRIN,
	tigrun: TIGRUN,
	redin: REDIN,
	ursun: URSUN,
};

// Just a quick way to remove unwanted words...
const FILTER = [
	'ass',
	'asian',
	'india',
	'lol',
	'anal',
	'danger',
	'kinky',
	'mister',
	'strong',
	'greed',
	'nerdy',
	'renal',
	'bored',
	'hair',
	'satan'
];

const NUM_NAMES_TO_GENERATE = 15;

window.onload = function () {
	const selectionBox = document.getElementById('species');
	for (const key in speciesMap) {
		const option = document.createElement('option');
		option.value = key;
		option.innerHTML = speciesMap[key].label;
		selectionBox.appendChild(option);
	}
	selectionBox.selectedIndex = 0;
	selectionBox.focus();
	const textBox = document.querySelector('.results-container textarea');
	textBox.addEventListener('focus', textBox.select);
	document.querySelector('button').addEventListener('click', generate);
	generate();
};

function getSelection() {
	const selectionBox = document.getElementById('species');
	const selected = selectionBox.options[selectionBox.selectedIndex];
	if (selected) {
		return speciesMap[selected.value];
	}
}

function generate() {
	const species = getSelection();
	if (!species) {
		return;
	}
	changeResultsTitle(species);
	const names = {};

	const isInvalidName = name => {
		const isFiltered = FILTER.some(filterItem => name.toLowerCase().includes(filterItem));
		return isFiltered || name.length === 1 || names[name];
	};

	for (let i = 0; i < NUM_NAMES_TO_GENERATE; ++i) {
		let name = generateName(species);
		while (isInvalidName(name)) {
			name = generateName(species);
		}

		names[name] = true;
	}

	const resultsBox = document.getElementById('results');
	resultsBox.innerHTML = null;
	Object.keys(names).forEach(name => resultsBox.appendChild(makeNameNode(name)));
}

function changeResultsTitle(species) {
	const title = document.querySelector('.results-container h3');
	title.innerHTML = `Results for ${species.label}`;
}

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

function generateName(species) {

	const pickRandomIndex = (fromArray) => {
		return Math.floor(Math.random() * fromArray.length);
	};

	const getNumComponents = () => {
		const { minSyllables, maxSyllables } = species;
		const pool = [minSyllables, 2, 2, maxSyllables];
		const index = pickRandomIndex(pool);
		return pool[index];
	};

	const capitalize = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	const constructName = (fromComponents) => {
		let name = fromComponents.join('');
		let numConsecutive = 1;
		let prevChar = null;
		for (let i = name.length; i >= 0; --i) {
			if (name.charAt(i) === prevChar) {
				++numConsecutive;
				if (numConsecutive >= 3) {
					name = name.substring(0, i) + name.substring(i + 1);
				}
			} else {
				numConsecutive = 1;
				prevChar = name.charAt(i);
			}
		}
		return capitalize(name);
	};

	const syllables = species.syllables.slice(); // Defensive to splicing
	const nameComponents = [];
	for (let i = 0; i < getNumComponents(); ++i) {
		const index = pickRandomIndex(syllables);
		const component = syllables.splice(index, 1);
		nameComponents.push(component);
	}
	return constructName(nameComponents);
}