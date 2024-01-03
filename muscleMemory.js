function sayHello(name) {
  let msg = "Hello, " + name + ". How are you?";
  return msg;
}

console.log(sayHello("world"));

function literalSayHello(name) {
  return `Hello, ${name}. How are you?`
}

console.log(literalSayHello("Andy"));

function paraglide(howMuch) {
  return `I love paragliding ${howMuch} much!`
}

console.log(paraglide("very"));

function waxSkis(temp) {
  return `I will use ${temp} wax for today's conditions!`
}

console.log(waxSkis("cold"));

function oilChain(type) {
  return `I will use ${type} oil for today's conditions!`
}

console.log(oilChain("dry"));
