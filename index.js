// add solution here
function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    var newString = `${musicians[i]} plays ${instruments[i]}`;
    newArray.push(newString);
  }
  return newArray;
};

function johnLennonFacts(facts) {
  let exclArray = [];
  let i = 0;
  while(i < facts.length) {
    let exclaimationFacts = `${facts[i]}!!!`;
     exclArray.push(exclaimationFacts);
    i++;
  }
return exclArray;
}


function iLoveTheBeatles(number) {

}
