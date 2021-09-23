const add = (a: number, b: number): number => {
    return a + b;
}

let numbers = "1 2";

let [a, b] = numbers.split(" ");

let result = add(parseInt(a), parseInt(b));
console.log(result);


