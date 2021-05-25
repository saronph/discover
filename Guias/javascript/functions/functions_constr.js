//function() constructor

function Person(name) {
  this.name = name
  this.walk = function() {
    return this.name + " andando"
  }
}

const saron = new Person('Saron')
const joao = new Person('João')
console.log(saron.walk())
console.log(joao.walk())
