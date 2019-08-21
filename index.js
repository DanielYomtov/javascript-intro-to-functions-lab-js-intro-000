function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  if (string.toLowerCase === string) {
    return "I can't hear you!";
  } else if (string.toUpperCase === string){
    return "YES INDEED!";
  } else if ("I love you, Grandma." === string){
    return "I love you, too.";
  }
}
