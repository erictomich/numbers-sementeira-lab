function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function naturalNumbers(number) { 
    switch(number) {
      case '1': 
        return "one"; break;
      case '2': 
        return "two"; break;
      case '3': 
        return "three"; break;
      case '4': 
        return "four"; break;
      case '5': 
        return "five"; break;
      case '6': 
        return "six"; break;
      case '7': 
        return "seven"; break;
      case '8': 
        return "eigth"; break;
      case '9': 
        return "nine"; break;
      default:
        return "";

    }
} 

function getTeenNumbers(number) {
  switch(number) {
    case '10': 
      return "ten"; break;
    case '11': 
      return "eleven"; break;
    case '12': 
      return "twelve"; break;
    case '13': 
      return "thirteen"; break;
    case '14': 
      return "fourteen"; break;
    case '15': 
      return "fifteen"; break;
    case '16': 
      return "sixteen"; break;
    case '17': 
      return "seventeen"; break;
    case '18': 
      return "eighteen"; break;
    case '19': 
      return "nineteen"; break;
    default:
      return "";
  }
}

function getDozens(number) {
  switch(number) {
    case '2': 
      return "twenty"; break;
    case '3': 
      return "thirty"; break;
    case '4': 
      return "forty"; break;
    case '5': 
      return "fifty"; break;
    case '6': 
      return "sixty"; break;
    case '7': 
      return "seventy"; break;
    case '8': 
      return "eighty"; break;
    case '9': 
      return "ninety"; break;
    default:
      return "";

  }
}

function getHundreds(number) {
  switch(number) {
    case '1': 
      return "one hundred"; break;
    case '2': 
      return "two hundred"; break;
    case '3': 
      return "three hundred"; break;
    case '4': 
      return "four hundred"; break;
    case '5': 
      return "five hundred"; break;
    case '6': 
      return "six hundred"; break;
    case '7': 
      return "seven hundred"; break;
    case '8': 
      return "eigth hundred"; break;
    case '9': 
      return "nine hundred"; break;
    default:
      return "";
  }
}

function getThousand(number) {
  switch(number) {
    case '1': 
      return "one thousand"; break;
    case '2': 
      return "two thousand"; break;
    case '3': 
      return "three thousand"; break;
    case '4': 
      return "four thousand"; break;
    case '5': 
      return "five thousand"; break;
    case '6': 
      return "six thousand"; break;
    case '7': 
      return "seven thousand"; break;
    case '8': 
      return "eigth thousand"; break;
    case '9': 
      return "nine thousand"; break;
    default:
      return "";

  }
}

  var nivel = 999; 
  var maxNumber = nivel * 10;

  var randomNumber = getRandomIntInclusive(100,maxNumber);

  //randomNumber = 119;

  var arrayNumber = randomNumber.toString().split('');
  console.log(randomNumber);
  console.log(arrayNumber);

  var inverseArrayNumber = arrayNumber.reverse();

  console.log(inverseArrayNumber);


  var inverseArrayTexts = []
  
  inverseArrayNumber.map(function(element, i) { 
    let traslate;
   
    if(i==3) { // milhar
      traslate = getThousand(element);
    }
    if(i==2) { // centenas
      traslate = getHundreds(element);
    }
    else if(i==1 && element != 1) {
      traslate = getDozens(element);
    } 
    else if(i==1 && element == 1) {
      // se a dezena for 1, então pega a deneza e a unidade
      traslate = getTeenNumbers(element.toString()+inverseArrayNumber[i-1].toString());
    }
    else if(i==0 && inverseArrayNumber[i+1]!=1) {
      traslate = naturalNumbers(element);
    }
    else if(i==0 && inverseArrayNumber[i+1]==1) {
      traslate = "";
    } 
    // else {
    //   traslate = naturalNumbers(element);
    // }
    inverseArrayTexts[i] = traslate;
  });
  
  console.log(inverseArrayTexts);

  console.log("Tamanho do array: ", inverseArrayNumber.length)
  
  var finalText;
 
  if(inverseArrayNumber.length == 2 && inverseArrayNumber[1] == 1) // se for número entre dez e dezenove
  {
    finalText = getTeenNumbers(randomNumber.toString());
  } else {
    
    finalText = inverseArrayTexts.reverse().join(" ");
  }

  console.log(finalText);
  // lista.reverse() reverte a array
  
  