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
  let i = 0;

  while(i < facts.length) {
    facts[i].push("!!!");
    i++;
  }
  return facts;
}
