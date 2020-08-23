const arr = [1, 2, 3, 4, 5];
const addTxt = (txt, arrElement) => txt += arrElement;
const everySome = (value) => value === 3;


const forEachMethod = (array, callBack) => {
    for (let i = 0; i < array.length; i++) {
        callBack.call(array, array[i], i);
    }
};

forEachMethod(arr, function(result) {
    console.log(addTxt('array elements - ', result));
});



const methodMap = (array, callBack) => {
    const newArr = [];

    for (let i = 0; i < array.length; i++) {
        newArr.push(callBack.call(array, array[i], i));
    }
    return newArr;
};

const ArrElemWithTxt = methodMap(arr, function(result) {
    return addTxt('array elements - ', result);
});

console.log(ArrElemWithTxt);



const filterMethod = (array, callBack) => {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {

        if (callBack.call(array, array[i], i)) {

            newArr.push(array[i]);
        };
    }
    return newArr;
};

const arrFilter = filterMethod(arr, function name(params) {
    return params >= 3;
});
console.log(arrFilter);



const someCheck = (array, callBack) => {
    for (let i = 0; i < array.length; i++) {
        if (callBack.call(array, array[i], i)) {
            return true;
        }
    }
    return false;
};
const functionSome = someCheck(arr, everySome);

console.log(functionSome);


const everyCheck = (array, callBack) => {
    for (let i = 0; i < array.length; i++) {
        if (!callBack.call(array, array[i], i)) {
            return false;
        }
    }
    return true;
};

const functionEvery = everyCheck(arr, everySome);
console.log(functionEvery);


const findSomething = (array, callBack) => {
    for (let i = 0; i < array.length; i++) {
        if (callBack.call(array, array[i], i)) {
            return array[i];
        }
    }
    return;
};

const findNum = findSomething(arr, everySome);
console.log(findNum);



const reduceMethod = (array, callBack) => {
    let result = 0;
    for (let i = 0; i < array.length; i++) {

        result = callBack.call(null, result, arr[i], i);
    }
    return result;
};

const arrSum = reduceMethod(arr, function name(sum, current, index) {
    sum += current;
    if (index + 1 === arr.length) {
        return addTxt('Array sum = ', sum);
    } else {
        return sum;
    }
});
console.log(arrSum);