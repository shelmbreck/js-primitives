var word = "Space";

var newWord = word.split("").splice(word.indexOf('a'),1, 'i')
console.log(newWord)

word = word.join('')
console.log(word)