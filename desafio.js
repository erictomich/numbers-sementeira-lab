// crie um mecanismo para escrever o número em inglês

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var nivel = 1000; 
  var maxNumber = nivel * 10;

  var randomNumber = getRandomIntInclusive(1,maxNumber);

  var arrayNumber = randomNumber.toString().split('');
  console.log(randomNumber);
  console.log(arrayNumber);

  var inverseArrayNumber = arrayNumber.reverse();

  console.log(inverseArrayNumber);


  
  // lista.reverse() reverte a array

  
  