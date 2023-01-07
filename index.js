class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-z0-9A-Z-' ]/g, "");
  }

  static titleize(string) {
    let words = string.split(" ");
    let letters = words[0].split("");
    let firstCaps = letters[0].toUpperCase();
    let wordRemainderArray = letters.slice(1);
    let wordRemainder = wordRemainderArray.reduce((a,b,) => a + b,"");
    let firstWord = firstCaps + wordRemainder;
    let otherWords = [];
    //loop through each word
    for (let s = 1; s <= words.length - 1; s++) {
      //if a word is the, a, an, but, of, and, for, at, by, and from don't change it
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
        console.log(`${words[s]} was not changed`);
        otherWords.push(` ${words[s]}`);
      } else {
        letters = words[s].split("");
        firstCaps = letters[0].toUpperCase();
        wordRemainderArray = letters.slice(1);
        wordRemainder = wordRemainderArray.reduce((a, b) => a + b,"");
        let otherWord = firstCaps + wordRemainder;
        otherWords.push(` ${otherWord}`);
      }
      //otherwise capitilize the first letter
    }
    otherWords.unshift(firstWord);
    let titleizedSentence = otherWords.reduce((a, b) => a + b,"");
    return titleizedSentence
  }
}
