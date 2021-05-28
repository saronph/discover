function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C');
  const fahrenheitExists = degree.toUpperCase().includes('F');

  if(!celsiusExists && !fahrenheitExists) {
    throw new Error('Unidade de temperatura não identificada')
  }

  let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
  let degreeSign = 'C'

  if(celsiusExists) {
   updatedDegree = Number(degree.toUpperCase().replace("C", ""));
   formula = (celsius) => celsius * 9/5 + 32
   degreeSign = 'F'
  }

  return formula(updatedDegree) + degreeSign
}

try {
  console.log(transformDegree('50C'))
} catch (e) {
  console.log(e.message)
}

// let C = '14';
// let F = '';

// function convertTemperature() {
//   let temperatureC = ((F - 32) * 5/9).toFixed(0)
//   let temperatureF = (C * 9/5 + 32).toFixed(0)

//   return temperatureF
// }

// console.log(convertTemperature())