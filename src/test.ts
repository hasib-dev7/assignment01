function filterEvenNumbers(numbers:number[]):number[]{
    return numbers.filter((n)=>n%2===0)
}
const result=filterEvenNumbers([1, 2, 3, 4, 5, 6])
console.log(result)