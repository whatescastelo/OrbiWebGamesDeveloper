const myArray = [12, 34, 56, 56, 56, 24, 12, 34, 34, 56];

function valoresUnicos(arr)
{
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(myArray));