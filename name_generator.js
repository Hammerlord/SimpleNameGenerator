const REDIN = {
	name: 'Redin',
	maxSyllables: 3,
	minSyllables: 2,
	syllables: ['mal', 'run', 'ae', 'kor', 'ith', 'tok', 'ro', 'sha', 'thro', 'storn', 'ja', 'bal',
		'nha', 'han', 'on', 'no', 'os', 'or', 'im', 'la', 'wa', 'yal', 'fii', 'olb', 'arn', 'gan',
		'ul', 'lok', 'krol', 'umn', 'sek', 'rha', 'rho', 'nu', 'kun', 'ber', 'nol', 'ish', 'an',
		'rak', 'to', 'kro', 'aul', 'rae', 'li', 'y', 'sho', 'vael', 'oak', 'var', 'ha']
};

const TIGRUN = {
	name: 'Tigrun',
	maxSyllables: 3,
	minSyllables: 2,
	syllables: ['ga', 'wa', 'yi', 'sho', 'ku', 'renn', 'ya', 'ka', 'ro', 'lun', 'fei', 'li', 'bai',
		'hu', 'kan', 'yu', 'e', 'shi', 'wa', 'ir', 'ha', 'rai', 'rhi', 'al', 'won', 'ta',
		'miu', 'ko', 'fun', 'tai', 'tan', 'zau', 'hom', 'ang', 'ri', 'hwa', 'jun', 'ban', 'ba',
		'gunn', 'fu', 'dai', 'ji', 'toh', 'sei', 'o', 'yuu', 'su', 'sai', 'hii', 'yu', 'jae',
		'mao', 'jang', 'na']
};

const UMRIN = {
	name: 'Umrin',
	maxSyllables: 3,
	minSyllables: 2,
	syllables: ['xir', 'sei', 'xia', 'nan', 'um', 'xis', 'rix', 'zen', 'ri', 'sa', 'in', 'te', 'za', 'zan',
		'ix', 'im', 'en', 'iil', 'an', 'or', 'sun', 'ai', 'zue', 'ban', 'gi', 'ten', 'rat', 'taz',
		'ril', 'ez', 'nas', 'nen', 'ci', 'cia', 'tan', 'ke', 'ser', 'ti', 'set', 'zer', 'val',
		'jin', 'xu', 'xen', 'lu', 'ma', 'el', 'ish', 'zel', 'zet', 'ys', 'cy']
};

const RIKELRIN = {
	name: 'Rikelrin',
	maxSyllables: 3,
	minSyllables: 2,
	syllables: ['as', 'tha', 'ros', 'ta', 'yv', 'od', 'gro', 'mul', 'da', 'ga', 'ron', 'gor', 'nov',
		'va', 'nos', 'nod', 'kor', 'an', 'um', 'dra', 'ath', 'born', 'kar', 'olb', 'aun', 'lod', 'ba',
		'veng', 'rik', 'rol', 'naz', 'ung', 'na', 'tev', 'vin', 'ul', 'tov', 'ata', 'tro', 'yev', 'zha', 'zho',
		'bor', 'nar', 'ghev']
};

const RYAS = {
	name: 'Ryas',
	maxSyllables: 3,
	minSyllables: 2,
	syllables: ['kax', 'zi', 'io', 'nyx', 'ky', 'var', 'fer', 'ze', 'den', 'nar', 'mar', 'rho', 'syl', 'zer',
		'sol', 'set', 'yos', 'nia', 'ia', 'nae', 'a', 'xil', 'ind', 'va', 'ar', 'naz', 'ir', 'nem', 'ven',
		'rys', 'ari', 'an', 'em', 'en', 'kin', 'rhy', 'to', 'zet', 'gal', 'kand', 'nar', 'seo', 'ies',
		'cas', 'zha', 'ius', 'stra', 'ian', 'san', 'dara', 'sef', 'eve', 'tep']
};

const URSUN = {
	name: 'Ursun',
	maxSyllables: 3,
	minSyllables: 1,
	minLetters: 3,
	syllables: ['born', 'la', 'har', 'ra', 'fang', 'ir', 'ron', 'gund', 'var', 'hor', 'sko', 'ald', 'ung', 'tun',
		'ulz', 'loth', 'ro', 'fir', 'gol', 'bar', 'un', 'gat', 'ur', 'sind', 'ia', 'weld', 'enn', 'thros', 'sig',
		'tos', 'harl', 'jarl', 'vald', 'dring', 'eg', 'toh', 'skriv', 'am', 'zun', 'ol', 'haeg', 'beo', 'ulf',
		'daen', 'stur', 'heo', 'naeg', 'red', 'thel', 'weyn', 'alf', 'dene', 'hal', 'ga', 'scyl', 'kitt', 'naegl',
		'hroth', 'singa', 'ean', 'reth', 'dene', 'gar', 'til', 'lac'
	]
};

const HIGHLANDER = {
	name: 'Highlander',
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
	name: 'Lowlander',
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

const speciesList = [
	HIGHLANDER,
	LOWLANDER,
	REDIN,
	TIGRUN,
	UMRIN,
	RIKELRIN,
	RYAS,
	URSUN
];

const speciesMap = speciesList.reduce((acc, species) => {
	acc[species.name] = species;
	return acc;
}, {});

export const speciesNames = Object.keys(speciesMap);

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

export function generateNames(speciesName, amount = 15) {
	const species = speciesMap[speciesName];
	if (!species) {
		return [];
	}

	const names = {};
	const isInvalidName = (name) => {
		const isFiltered = FILTER.some(filterItem => name.toLowerCase().includes(filterItem));
		return isFiltered || names[name];
	};

	for (let i = 0; i < amount; ++i) {
		let name = generateName(species);
		while (isInvalidName(name)) {
			name = generateName(species);
		}

		names[name] = true;
	}

	return Object.keys(names);
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

	const formatName = (name) => {
		let numConsecutive = 1;
		for (let i = name.length; i >= 0; --i) {
			if (name.charAt(i) === name.charAt(i - 1)) {
				++numConsecutive;
				if (numConsecutive >= 3) {
					name = name.substring(0, i) + name.substring(i + 1);
				}
			} else {
				numConsecutive = 1;
			}
		}
		return capitalize(name);
	};

	const syllables = species.syllables.slice(); // Defensive to splicing
	const numComponents = getNumComponents();
	const minLetters = species.minLetters || 2;
	let name = '';
	let i = 0;

	while (i < numComponents || name.length < minLetters) {
		const index = pickRandomIndex(syllables);
		name += syllables.splice(index, 1);
		++i;
	}

	return formatName(name);
}