// Project Euler: Problem 1: Multiples of 3 and 5

function multiplesOf3and5(number) {
    let total = 0;
    for(let i = 1; i < number; i++){
      if(i % 3 === 0 || i % 5 === 0){
        total += i;
      }
    }
    return total;
  }
  
  multiplesOf3and5(1000);