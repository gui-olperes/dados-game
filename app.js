let randomNumber1 = Math.floor(Math.random() * 6) + 1

let randomDiceImage = `img/dice${randomNumber1}.png`

let image1 = document.querySelectorAll('img')[0].setAttribute('src', randomDiceImage)

let randomNumber2 = Math.floor(Math.random() * 6) + 1

let randomDiceImage2 = `img/dice${randomNumber2}.png`

let image2 = document.querySelectorAll('img')[1].setAttribute('src', randomDiceImage2)

if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = '🏆 O jogador 1 Venceu!'

} else if (randomNumber2 > randomNumber1){
    document.querySelector('h1').innerHTML = '🏆 O jogador 2 Venceu!'
} else{
    document.querySelector('h1').innerHTML = 'Empate!'
}