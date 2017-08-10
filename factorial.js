/**
 * factorial - returns the factorial of a number
 */

function factorialize(num) {

  if (num == 1 || num == 0){
    return 1;
  }
  
  if (num > 0){
    return factorialize(num - 1) * num;    
  }
}
