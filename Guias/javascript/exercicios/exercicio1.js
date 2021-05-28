// let nota = 75;

function getScore(nota) {
  let resultA = nota >= 90;
  let resultB = nota >= 80 && nota <= 89;
  let resultC = nota >= 70 && nota <= 79;
  let resultD = nota >= 60 && nota <= 69;
  let resultF = nota < 60;

  let notaFinal;

  if (resultA) {
    notaFinal = 'A'
  } else if (resultB) {
    notaFinal = 'B'
  } else if (resultC) {
    notaFinal = 'C'
  } else if (resultD) {
    notaFinal = 'D'
  } else if (resultF) {
    notaFinal = 'F'
  } 

  return notaFinal
}

console.log(getScore(70))
console.log(getScore(30))
console.log(getScore(80))
console.log(getScore(90))