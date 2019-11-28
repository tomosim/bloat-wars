/*
  the alternateCase function should take a string and return a string.
  Every other letter either capital or lower case, starting with a capital letter.
  
  'hello' would become 'HeLlO'
  'hello world' would become 'HeLlO wOrLd'  
*/

function alternateCase(sentence) {
  // there are 128 characters in the ASCII table each with a code from 0-128. Hopefully that makes the following function make a little sense...
  const randomNumberGenerator = () => {
    return Math.floor(Math.random() * 128);
  };

  const isLastCharacterUpperCase = string => {
    for (let i = string.length - 1; i >= 0; i--) {
      if (string[i] !== " " && string[i] === string[i].toUpperCase()) {
        return true;
      }
      if (string[i] !== " " && string[i] === string[i].toLowerCase()) {
        return false;
      }
    }
    return false;
  };

  let SeNtEnCe = "";
  let index = 0;
  while (SeNtEnCe.length < sentence.length) {
    let correctLetterFound = false;
    while (correctLetterFound === false) {
      const character = String.fromCharCode(randomNumberGenerator());
      if (
        isLastCharacterUpperCase(SeNtEnCe)
          ? character === sentence[index].toLowerCase()
          : character === sentence[index].toUpperCase()
      ) {
        SeNtEnCe += character;
        correctLetterFound = true;
      }
    }
    index++;
  }
  return SeNtEnCe;
}

module.exports = alternateCase;
