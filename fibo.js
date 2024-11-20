function fibo(num) {
  let fib = 0;
  let fibp = 0;
  const fibArr = [];
  for (let i = 1; i < num; i++) {
    if (i == 1) {
      fibArr.push(0);
      fibArr.push(1);
      fibp = 0;
      fib = 1;
    } else {
      fib = fib + fibp;
      fibp = fib - fibp;
      fibArr.push(fib);
    }
  }
  return fibArr;
}

function fiboRec(num) {
  if (num == 2) {
    console.log(0);
    console.log(1);
    return { fib: 1, fibp: 0 };
  } else {
    let { fib, fibp } = fiboRec(num - 1);
    fib = fib + fibp;
    fibp = fib - fibp;
    console.log(fib);
    return { fib, fibp };
  }
}

function mergeSort(arr) {
  let arrLeft = [];
  let arrRight = [];
  let arrSorted = [];
  if (arr.length > 1) {
    arrLeft = mergeSort(arr.slice(0, arr.length / 2));
    arrRight = mergeSort(arr.slice(arr.length / 2, arr.length));
  } else {
    return arr;
  }

  for (let i = 0; i < arrLeft.length; i++) {
    let indexRight = 0;
    let pushed = false;
    for (let j = 0; j < arrRight.length; j++) {
      if (arrLeft[i] < arrRight[j]) {
        arrSorted.push(arrLeft[i]);
        pushed = true
        break;
      } else {
        arrSorted.push(arrRight[j]);
        indexRight++;
      }
    }
    arrRight = arrRight.splice(indexRight);
    if (i + 1 >= arrLeft.length && arrRight.length > 0) {
      for (let x = 0; x < arrRight.length; x++) {
        arrSorted.push(arrRight[x]);
      }
    }
    if (!pushed && arrRight.length < 1){
        arrSorted.push(arrLeft[i])
    }
  }
  return arrSorted;
}

// console.log(fibo(8))
// fibonacci(8);
console.log(mergeSort([105, 79, 100, 110]));
