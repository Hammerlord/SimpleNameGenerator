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
	syllables:  ['ed', 'wyn', 'ric', 'jon', 'ald', 'gen', 'ger', 'mel', 'da', 'in', 'mi', 'as', 'don', 'lis',
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
};

const ARROW = '›';

const FILTER = ['ass', 'asian', 'india', 'lol', 'anal', 'danger', 'kinky', 'mister', 'strong', 'greed', 'nerdy', 'renal', 'bored', 'hair', 'satan'];

window.onload = function() {
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
	textBox.addEventListener('focus', () => textBox.select());
	const generateButton = document.querySelector('button');
	generateButton.addEventListener('click', () => generate());
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
	const resultsBox = document.getElementById('results');
	resultsBox.innerHTML = null;
	const names = [];
	for (let i = 0; i < 15; ++i) {
		let name = generateName(species);
		const isFiltered = FILTER.find(filterItem => name.toLowerCase().includes(filterItem));
		if (isFiltered || name.length === 1) {
			// Reroll once if it's a known stupid result.
			name = generateName(species);
		}
		const nameNode = makeNameNode(name);
		resultsBox.appendChild(nameNode);
	}
}

function changeResultsTitle(species) {
	const title = document.querySelector('.results-container h3');
	title.innerHTML = `Results for ${species.label}`;
}

function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function makeNameNode(name) {

	const recordName = (name) => {
		const textBox = document.querySelector('.results-container textarea');
		const content = textBox.value.trim();
		console.log(content);
		if (content === '') {
			textBox.value = name;
		} else {
			textBox.value = content + "\n" + name;
		}
	};

	const node = document.createElement('div');
	node.textContent = name;
	const icon = document.createElement('span');
	icon.textContent = ARROW;
	icon.addEventListener('click', () => recordName(name));
	node.appendChild(icon);
	return node;
}

function generateName(species) {

	const pickRandomIndex = (fromArray) => {
		return Math.floor(Math.random() * fromArray.length);
	}

	const getNumComponents = () => {
		const min = species.minSyllables;
		const max = species.maxSyllables;
		const pool = [min, 2, 2, max];
		const index = pickRandomIndex(pool);
		return pool[index];
	}

	const syllables = species.syllables.slice(); // Defensive to splicing
	const name = [];
	for (let i = 0; i < getNumComponents(); ++i) {
		const index = pickRandomIndex(syllables);
		const component = syllables.splice(index, 1);
		name.push(component);
	}
	return capitalize(name.join(''));
}