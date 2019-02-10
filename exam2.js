const word1 = "foo(bar)"
console.log(formatWord(word1))

const word2 = "(bar)"
console.log(formatWord(word2))

function formatWord(realWord) {
  return realWord.split("(").map(word => {
    if(word.match(/\)/)) {
      return [ ...(word.replace(/\)/g, "")) ].reverse().join("")
    }
  
    return word
  })
  .join("")
}