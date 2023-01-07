class Formatter {
  //add static methods here
  //capitilizes the first letter
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
//removes non alphanumeric characters from a word
  static sanitize(string) {
    return string.replace(/[^a-z0-9A-Z-' ]/g, "");
  }
//capiltizes the first word in a sentences and all other words in a sentence except articles
  static titleize(string) {
    //capitalizes the first word
    let words = string.split(" ");
    let letters = words[0].split("");
    let firstCaps = letters[0].toUpperCase();
    let wordRemainderArray = letters.slice(1);
    let wordRemainder = wordRemainderArray.reduce((a,b,) => a + b,"");
    let firstWord = firstCaps + wordRemainder;
    //creates an array to store the words after mutation
    let otherWords = [];
    //loop through each word
    for (let s = 1; s <= words.length - 1; s++) {
      //if a word is the, a, an, but, of, and, for, at, by, and from it is not changed
      if (
        words[s] === "a" ||
        words[s] === "the" ||
        words[s] === "an" ||
        words[s] === "but" ||
        words[s] === "of" ||
        words[s] === "and" ||
        words[s] === "for" ||
        words[s] === "at" ||
        words[s] === "by" ||
        words[s] === "from"
      ) {
        otherWords.push(` ${words[s]}`);
      } else {
        //capitilizes the first letter of the words
        letters = words[s].split("");
        firstCaps = letters[0].toUpperCase();
        wordRemainderArray = letters.slice(1);
        wordRemainder = wordRemainderArray.reduce((a, b) => a + b,"");
        let otherWord = firstCaps + wordRemainder;
        otherWords.push(` ${otherWord}`);
      }
    }
    //joins adds the first word to the start of the array with the other words
    otherWords.unshift(firstWord);
    //adds all the words in the array, turning them back into a string
    let titleizedSentence = otherWords.reduce((a, b) => a + b,"");
    return titleizedSentence
  }
}
