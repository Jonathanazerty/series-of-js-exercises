var movies = [
    `The Conjuring 3: The Devil Made Me Do It`,
    `Tom & Jerry`,
    `Cruella`,
    `K3: Dans van de Farao`,
    `A Quiet Place Part II`,
    `Voyagers`,
    `Demon Slayer: Mugen Train`,
    `Freaky`,
    `Songbird`,
    `Nomadland`,
    `Drunk`,
    `Honest Thief`,
    `Bon Bini: Judeska in da House`,
    `Sons of Philadelphia`,
  ];

  var reversed = movies.reverse();

  document.write(`<ol>`);
for (let i = 0; i < movies.length; i++) {
  document.write(`<li>${movies[i].toLowerCase()}</li>`);
}
document.write(`</ol>`);

console.log('reversed:', reversed);