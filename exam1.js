let words = ['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA', 'ESPONJA', 'RAMO', 'JAPONES', 'ARMO', 'MOJAN', 'MARO', 'ORAM', 'MONJA', 'ALEXIS']
let matchWords = {}

while(true) {
  const word = words.shift()
  const chars = [ ...word ]

  matchWords[word] = words
    .filter(_word => _word.length === chars.length)
    .filter(_word => chars.every(char => _word.includes(char)))
  words = words.filter(_word => !matchWords[word].includes(_word))

  if(words.length === 0) break
}

for(let index in matchWords) {
  console.log(`${index}-${matchWords[index].join("-")} `)
}