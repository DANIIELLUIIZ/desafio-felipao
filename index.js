let nomePersonagem = 'Tadeu'
let nivelXp = 16040
let mensagemNivel = `Olá, ${nomePersonagem}.Seu nível atual é ${nivelXp} e sua classificação é: `

if (nivelXp <= 1000) {
  console.log(mensagemNivel + 'Ferro')
} else if (nivelXp > 1000 && nivelXp <= 2000) {
  console.log(mensagemNivel + 'Bronze')
} else if (nivelXp >= 2001 && nivelXp <= 5999) {
  console.log(mensagemNivel + 'Prata')
} else if (nivelXp >= 6000 && nivelXp <= 7000) {
  console.log(mensagemNivel + 'Ouro')
} else if (nivelXp >= 7001 && nivelXp <= 8000) {
  console.log(mensagemNivel + 'Platina')
} else if (nivelXp >= 8001 && nivelXp <= 9000) {
  console.log(mensagemNivel + 'Ascendente')
} else if (nivelXp > 9001 && nivelXp <= 10000) {
  console.log(mensagemNivel + 'Imortal')
} else {
  console.log(mensagemNivel + 'Radiante')
}
