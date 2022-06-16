import { CONFIG } from './config'

export const WORDS = [
  'Bison',
	'Hares',
	'Bears',
	'Pikas',
	'Foxes',
	'Mouse',
	'Seals',
	'Sheep',
	'Whale',
	'Skunk',
	'Vixen',
	'Marsh',
	'Moose',
	'Goats',
	'Otter',
	'Shrew',
	'Voles',
	'Swamp',
	'Beach',
	'Woods',
	'Pines',
	'Gator',
	'Racer',
	'Snake',
	'Anole',
	'Ducks',
	'Coral',
	'Skink',
	'Gecko',
	'Coots',
	'Eagle',
	'Wrens',
	'Terns',
	'Hawks',
	'Heron',
	'Gulls',
	'Teals',
	'Goose',
	'Raven',
	'Quail',
	'Egret',
	'Finch',
	'Doves',
	'Macaw',
	'Swans',
	'Kites',
	'Crane',
	'Egret',
	'Snipe',
	'Wasps',
	'Horse',
	'Maple',
	'Aspen',
	'Elder',
	'Palms',
	'Agave',
	'Alder',
	'Apple',
	'Birch',
	'Plums',
	'Pecan',
	'Cacti',
	'Berry',
	'Larch',
	'Holly',
	'Hazel',
	'Beech',
	'Cedar',
	'Osage',
	'Sitka',
	'Lions',
	'Trout',
	'Pikes',
	'Perch',
	'Toads',
	'Carps',
	'Roach',
	'River',
	'Creek',
	'Brook',
	'Loach',
	
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
