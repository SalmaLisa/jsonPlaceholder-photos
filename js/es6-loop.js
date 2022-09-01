//practice 4

//4.1
const scores = [45, 667, 89, 23, 14, 58, 68, 54, 33, 99, 75];
const map = scores.map(score => parseFloat((score / 7).toFixed(2)));
console.log(map);

// 4.2
const scores2 = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];
const divided = scores2.map(score => score / 7);
console.log(divided)

// practice 5 { summary of map(), forEach(), filter(), find() }

/* 
  Although all of these methods are applicable only on array and they loop through each element of the array, some unique behaviour makes them different :
  map() : It returns an array of results after completing the operation.
  forEach() : It is similar to map() but it returns nothing. We use this when we don't need any return value.
  filter() : It does operation on the basis of condition and returns an array containing all of values those fulfill the condition. 
  find(): It is exactly like filter() but it returns the first single value which comes under the condition.
  
*/