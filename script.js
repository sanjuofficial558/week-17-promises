// Questions 01 Solutions:---

let num = [4,6,8,10,12,14];
function dbArray(array, cb){
    let double = array.map((value)=>{
        return cb(value);
    });
    // return double;
    console.log(double);
}

function cb(num){
    return num*2;
}

dbArray(num, cb);

// output--------------
// [8,12,16,20,24,28]



// Questions 02 Solutions:---

function manipulateString (inputString, cb){
    let upperCaseString = inputString.toUpperCase();
    cb(upperCaseString);
}
function logString(upperCaseString){
    console.log(`manipulated string is ${upperCaseString}`);
}
manipulateString("Sanjeev Kumar", logString)


// Questions 03 Solutions:---

let person = {
    fname:"Sanjeev",
    lname: "K",
    age: 20
};

const ageInDays = (person, cb)=>{
   const fullName = `${person.fname} ${person.lname}`
   const AgeInDays = person.age * 365;
   cb(fullName, AgeInDays);
}


function log(fullName, AgeInDays){
    console.log(`The person's full name is ${fullName} and their age in days is ${AgeInDays}`);
}

ageInDays(person, log);



// Questions 04 Solutions:---

const books = [
    {
        title: "The History of Tom Jones, a Foundling",
        author: "Henry Fielding",
        year:  1749,
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year:  1813,
    },
    {
        title: "The Red and the Black",
        author: "Stendhal",
        year:  1830,
    },
    {
        title: "Madame Bovary",
        author: "Gustave Flaubert",
        year:  1856,
    },
    {
        title: "Moby-Dick",
        author: "Herman Melville",
        year:  1851,
    },
    {
        title: "The Brothers Karamazov",
        author: "Dostoevsky",
        year:  1880,
    },
]

function logTitle(titles){
    titles.sort();
    console.log(titles.join("\n"));
}

function extractTitle(book, cb){
    const titles = books.map((book) => book.title);
    cb(titles);
}

extractTitle(books, logTitle);




// Questions 05 Solutions:---

function hello(name){
    let prom = new Promise((resolve, reject)=>{
            resolve(`Hello, ${name}`);
        });
    return prom;
}
hello("Sanjeev").then((name) =>{console.log(name);})




// Questions 06 Solutions:---

async function fetchData(getURL) {
    let data = await (await fetch(getURL)).json();
    console.log(data); ////Output
  }
fetchData("https://jsonplaceholder.typicode.com/todos/1");


// Questions 07 Solutions:---

async function getCombineData(){
    const [data1, data2] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((resp) => resp.json()),

            fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((resp) => resp.json()),
        ]);
    
    const combineData = {
        todo: data1,
        post: data2
    };

    return combineData;
}

// getCombineData().then((data) => console.log(data))



// Questions 08 Solutions:---
async function fetchPost(getURL) {
    let data = await (await fetch(getURL)).json();

    if(data.length > 0){
        for (const key in data) {
            // console.log( "Post:- "+data[key].body);  //Output
        }
    }
    else{
        throw new Error ("Something went wrong while fetching data.")
    }
  }

fetchPost("https://jsonplaceholder.typicode.com/posts");





// Questions 09 Solutions:---

async function fetching(getURL) {
    let data = await (await fetch(getURL)).json();
    if (data.length > 0) {
        console.log(data);  //Output
    } else {
        throw new Error("Can't Fetch Data.");
    }
    
  }

fetching("https://jsonplaceholder.typicode.com/posts/123456789");


