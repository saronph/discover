// manipulando array
let techs = ["html", "css", "js"]

// adicionar um item no Fim
techs.push("react")

// adicionar no começo
techs.unshift("node")

// remover do fim 
techs.pop()

// remover do começo
techs.shift()

// pegar somente alguns elementos do array
// console.log(techs.slice(1, 3))

// remover 1 ou mais items em qualquer posição do array
// console.log(techs.splice(1, 2))

// encontrar a posição de um elemento no array
let index = techs.indexOf("xxx")

console.log(index)

