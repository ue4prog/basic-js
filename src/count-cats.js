module.exports = function countCats(matrix) {
  let counter = 0 ;
  matrix.flat().forEach(element => {
    if(element=== "^^"){
      counter++
    }
  }, 0); 
  return counter;
  } 