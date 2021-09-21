// 1
class Cat {
    constructor(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;
    }

    log = () => {
        return `${this.constructor.name}(${this.name}, ${this.breed}, ${this.age})`;
    }

    attributes = () => {
        return [this.name, this.breed, this.age];
    }
}

const cats = [
    new Cat("Sotis", "bondkatt", 3),
    new Cat("Findus", "bondkatt", 4)
]

//2
const timer = (func, ...args) => {
    return async () => {
        console.log(`starting to time function ${func.name}...`);
        const start  = new Date();
        let result = await func(...args);
        const end = new Date();
        console.log(`Function ${func.name} took ${end.getTime() - start.getTime()}ms to complete.`);
        return result;
    }
}

const timed = async (second) => {
    console.log(`Waiting ${second}s.`);
    await new Promise(resolve => setTimeout(resolve, second * 1000));
    console.log(`Finished waiting ${second}s.`);
}


timer(timed, 4)();
timer(timed, 3)();


// 3
// for each example
console.log("Cats");
cats.forEach((cat) => console.log(cat.log()));

// map example
const olderCats = cats.map(cat => {
    let [name, breed, age] = cat.attributes();
    return new Cat(name, breed, age+2);
});
console.log("Older Cats");
olderCats.forEach(cat => console.log(cat.log()));

// filter example
const oldCats = cats.filter(cat => {
    return cat.age > 3;
});
console.log("Old Cats");
oldCats.forEach(cat => console.log(cat.log()));


// 4
const nums = [2, 1024];
const foo = (div, num) => {
    if (num === 2) {
        return 1;
    }
    return 1 + foo(div, num / div);
}
// spreads nums over foo's parameters
console.log(foo(...nums));

// compresses all given parameters into the array nums
const multiply = (...nums) => {
    let prod = 1;
    for (const num of nums) {
        prod *= num;
    }
    return prod;
}
console.log(multiply(2, 4, 8, 16));

// 5
// array destructuring
const add = (a, b) => {
    return [a + b, a, b];
}

let [sum, left, right] = add(4, 8);
console.log(sum , left, right);

let added;
[sum, ...added] = add(sum, sum * 2);
console.log(sum, added);

// object destructuring
const logCat = ({name, breed, age}) => {
    console.log(`The cat ${name} of breed ${breed} is ${age} years old.`);
}

cats.forEach(logCat);

// 6
class Foo {
    constructor(a) {
        this.a = a;
        window.addEventListener("load", () => {
            // this.a does refer to Foo.a
            console.log(`arrow function ${this.a}`);
        });

        window.addEventListener("load", function () {
            /// this.a does NOT refer to Foo.a
            console.log(`regular function ${this.a}`);
        });
    }
}

// creates a promise
const p = new Promise(((resolve, reject) => {
    let number = Math.random();
    if (number > 0.5) {
        resolve(number);
    }
    reject(number);
}));

// async / await, error handling with javascript try / catch
// set timeout is used to get into an asynchronous scope so await can be used.
setTimeout(async () => {
    try {
        let number = await p;
        console.log(`(A)The generated number was larger than 0.5. ${number}`);
    } catch (e) {
        console.log(`(A)The generated number was smaller or equal to 0.5 ${e}`);
    }
});

// .then() .catch()
// (this is the same promise as above and will not regenerate a new number)
p.then(number => {
    console.log(`(T)The generated number was larger than 0.5. ${number}`);
}).catch(e => {
    console.log(`(T)The generated number was smaller or equal to 0.5 ${e}`);
});

// async / await
const request = async () => {
    const url = "https://djangorest.eliaseriksson.eu/";
    let response;
    try {
        response = await fetch(url);
    } catch (e) {
        console.log(e);
        throw e;
    }
    let json = await response.json();
    console.log(json);
}
request();

//.then / .catch
const url = "https://djangorest.eliaseriksson.eu/";
fetch(url).then(response => {
    return response.json();
}).then(data => {
    console.log(data);
}).catch(e => {
    console.log(e);
    throw e;
});
