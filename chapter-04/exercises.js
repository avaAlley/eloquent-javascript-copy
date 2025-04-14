////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step=1, output=[]) {
  // base
  if(start === end){
    return output;
  }

  if(step < 0 && start < end){
    return output;
  }

  // recursion
  if(output.length === 0){
    output.push(start);
  }
  output.push(start + step);
  return range(start + step, end, step, output);


}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array, output=0) {
  // base
  if(array.length === 0){
    return output;
  }

  // recursion
  output += array[0];
  return sum(array.slice(1), output);

}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array, output=[]) {
  // base
  if(array.length === 0){
    return output;

  }

  // recursion

  output.unshift(array[0]);
  return reverseArray(array.slice(1), output);

}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  return array.reverse()

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let rest = null;
  for(let i = array.length - 1; i >= 0; i--){
    rest = { value: array[i], rest: rest };
  }
  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, array=[]) {
  // base
  if(list.rest === null){
    array.push(list.value);
    return array;
  }
  
  // recursion
  array.push(list.value);
  
  return listToArray(list.rest, array);
  
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {

  let listObj = { value: value, rest: list };
  return listObj;

  // let listObj = {}
  // listObj.value = value;
  // listObj.rest = list;
  // return listObj;

  // list = { value: value, rest: list }
  // return list;

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// function nth(list, value) {


// }

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual() {

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};