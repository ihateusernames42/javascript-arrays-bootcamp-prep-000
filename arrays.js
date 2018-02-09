var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray (x, y){
  return [y, ...x]
}
function destructivelyAddElementToBeginningOfArray(x,y){
  x.unshift(y)
  return x
}
<<<<<<< HEAD
function addElementToEndOfArray(x,y) {
  return [...x, y]
}
function destructivelyAddElementToEndOfArray (x,y){
  x.push(y)
  return x
}
function accessElementInArray(x,y){
  return x[y]
}
function destructivelyRemoveElementFromBeginningOfArray(x){
  x.shift()
  return x
}
function removeElementFromBeginningOfArray(x){
 return x.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(x){
  x.pop()
  return x
}
function removeElementFromEndOfArray(x){
  return x.slice(0, x.length - 1)
}
=======
>>>>>>> 944b18ad4843b2a5992f1142ee0ac8f2d45e9847
