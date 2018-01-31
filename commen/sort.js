export { sortDesc, sortAsc }

sortDesc = function (arr){
  return sort_func(arr,NumDescSort);
}

sortAsc = function (arr) {
  return sort_func(arr,NumAscSort);
}

sort_func = function (arr,func) {
  return arr.sort(func);
}

function NumAscSort(a, b) {
  return a - b;
}
function NumDescSort(a, b) {
  return b - a;
}