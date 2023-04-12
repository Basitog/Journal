export function wordCounter(text) {
  if (text.trim().length === 0){
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function (element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

// export function numberOfOccurrencesInText(word, text) {
//   if ((text.trim().length === 0) || (word.trim().length === 0)) {
//     return 0;
//   }
//   const wordArray = text.split(" ");
//   let wordCount = 0;
//   wordArray.forEach(function (element) {
//     if (element.toLowerCase().includes(word.toLowerCase())) {
//       wordCount++;
//     }
//   });
//   return wordCount;

// }


export function countVowel(title) {

  const count = title.match(/[aeiou]/gi).length;

  return count;

}

export function countConsonant(consonant) {
  const cluster = consonant.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
  return cluster;
}

export function getTeaser(string) {

  const wordSplit = string.split(" ");
  const teaserArray =[];
  for(let i = 0; i< 8; i++){
    teaserArray.push(wordSplit[i]);
  }
  return teaserArray.concat("........");
}


// export default function Journal(title, body) {
//   this.title = title;
//   this.body = body;
// }
  
// Journal.prototype.wordCounter = function () {
//   let totalWords = 0;
//   let wordArray = this.body.split(" ");
//   totalWords = wordArray.length;
//   return totalWords;
// };
  
// Journal.prototype.charCounter = function () {
//   let vowelArr = ["a", "i", "o", "e", "u"];
//   let totalVowels = 0;
//   let totalConsonants = 0;
  
//   for (let i = 0; i < this.body.length; i++) {
//     if (vowelArr.includes(this.body[i])) {
//       totalVowels++;
//     }
//     else if (this.body[i] != " ") {
//       totalConsonants++;
//     }
//   }
//   return [totalVowels, totalConsonants];
// };

//   const splitSentence = string.split(" ");
//   const firstEightWords = splitSentence.slice(0,8);
//   const joinedString = firstEightWords.join("");
//   const chars = joinedString.split(" ");
//   for (let i = 0; i < chars.length; i++) {


//     return firstEightWords;
//   }
