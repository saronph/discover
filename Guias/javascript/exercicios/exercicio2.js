let financial = {
  revenue: [100, 80, 50.49, 10],
  expenses: [50, 35.08]
}

function sum(array) {
  let total = 0;

  for(let value of array) {
    total += value
  }

  return total
}

function calculteBalance() {
  const calculateRevenue = sum(financial.revenue);
  const calculateExpenses = sum(financial.expenses);

  const total = (calculateRevenue - calculateExpenses).toFixed(2);

  if (total > 0) {
    let message = `Sua família teve saldo positivo de R$${total}` 
    return message;   
  } else {
    let message = `Sua família teve saldo negativo de R$${total}` 
    return message; 
  }
}

console.log(calculteBalance())

// function calculateFinancial() {
//   let financial = {
//     revenue: [100, 80, 50.49, 10],
//     expenses: [50, 35.08]
//   }

//   let totalRevenue = financial.revenue.reduce(
//     (totalRevenue, currentElement) => totalRevenue + currentElement)

//   let totalExpenses = financial.expenses.reduce(
//     (totalExpenses, currentElement) => totalExpenses + currentElement)

//   let total = (totalRevenue - totalExpenses).toFixed(2)

//   if (total > 0) {
//     let positiveTotal = `Sua família teve saldo positivo de R$${total}` 
//     return positiveTotal;   
//   } else {
//     let negativeTotal = `Sua família teve saldo negativo de R$${total}` 
//     return negativeTotal; 
//   }
// }

// console.log(calculateFinancial())