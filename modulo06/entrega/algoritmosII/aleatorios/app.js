

var randomPick = (n, min, max) => {
  
  var result = [];
  var range = max - min + 1;

  for (i=0; i < n; i++) {
    result.push(Math.floor((Math.random() * range)) + min );
  }

return result;
}

console.log("Una tirada de dado: ", randomPick(1, 1, 6));
console.log("Una apuesta para la primitiva: ", randomPick(6, 1, 49));