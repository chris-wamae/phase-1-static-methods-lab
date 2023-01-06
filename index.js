class Formatter {
  //add static methods here
  static capitalize(string){
 return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static stringSanitize(string){
    return string.replace(/[^a-z0-9A-Z-' ]/g,"")
  }

  static titleize(string){
let words = string.split(" ")
let letters = words[0].split("")
let firstCaps = letters[0].toUpperCase()
let wordRemainderArray = letters.slice(1)
let wordRemainder = wordRemainderArray.reduce((a,b)=>a + b)
let firstWord = firstCaps + wordRemainder
for(let s = 1;s <= words.length -1;s++){
//loop through each word
//if a word is the, a, an, but, of, and, for, at, by, and from don't change it
//otherwise capitilize the first letter
}


}
}

