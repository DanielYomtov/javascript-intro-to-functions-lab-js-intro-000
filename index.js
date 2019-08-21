function shout(string){
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function sayHiToGrandma(string){
  if(string === string.toUpperCase){
     return "Hi";
  } else if (string === string.toLowerCase) {
    return "i cant hear you";
  } else {
    return "I love you, Grandma.";
  }
}
