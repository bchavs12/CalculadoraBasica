const somar = () => {
  let num1 = document.getElementById('num1')
  let num2 = document.getElementById('num2')
  let resultado = document.querySelector('#resultado')
  num1 = Number(num1.value)
  num2 = Number(num2.value)
  let total = num1 + num2
  resultado.innerHTML = `A soma entre <strong>${num1}</strong> e <strong>${num2}</strong> é igual a <strong>${total}</strong>`
}

const subtrair = () => {
  let num1 = document.getElementById('num1')
  let num2 = document.getElementById('num2')
  let resultado = document.querySelector('#resultado')
  num1 = Number(num1.value)
  num2 = Number(num2.value)
  let total = num1 - num2
  resultado.innerHTML = `A Subtração entre <strong>${num1}</strong> e <strong>${num2}</strong> é igual a <strong>${total}</strong>`
}

const multiplicar = () => {
  let num1 = document.getElementById('num1')
  let num2 = document.getElementById('num2')
  let resultado = document.querySelector('#resultado')
  num1 = Number(num1.value)
  num2 = Number(num2.value)
  let total = num1 * num2
  resultado.innerHTML = `A Multiplicação entre <strong>${num1}</strong> e <strong>${num2}</strong> é igual a <strong>${total}</strong>`
}

const dividir = () => {
  let num1 = document.getElementById('num1')
  let num2 = document.getElementById('num2')
  let resultado = document.querySelector('#resultado')
  num1 = Number(num1.value)
  num2 = Number(num2.value)
  total = num1 / num2
  if (total == Infinity || total == 0) {
    resultado.innerHTML = 'Não se pode dividir por zero'
  } else {
    resultado.innerHTML = `A Divisão entre <strong>${num1}</strong> e <strong>${num2}</strong> é igual a <strong>${total}</strong>`
  }
}

