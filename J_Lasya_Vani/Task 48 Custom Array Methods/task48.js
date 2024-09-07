function forEachArray(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

forEachArray([1, 2, 3], function(element) {
  console.log(element);
});

function mapArray(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
  }
  const doubled = mapArray([1, 2, 3], function(element) {
    return element * 2;
  });
  console.log(doubled); // Output: [2, 4, 6]
  function filterArray(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  const evenNumbers = filterArray([1, 2, 3, 4], function(element) {
    return element % 2 === 0;
  });
  console.log(evenNumbers); // Output: [2, 4]
  