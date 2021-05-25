//const e let são locais e só funcionam no escopo onde foi criada
let x = 1;

{
  // let x = 0
  x = 0
  console.log('valor x escopo', x)
}

console.log('valor x', x)