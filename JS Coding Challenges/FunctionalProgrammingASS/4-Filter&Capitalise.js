// Write a program that takes a list of books, including their authors and publication years as input. 
// The program should then filter out all books that were published before 2010 
// and create a new array with the remaining books, but with their author names capitalized.

let books = [
    { author: "mohnish", year: 2011 },
    { author: "gorana", year: 2008 },
    { author: "chinu", year: 2010 },
    { author: "darshu", year: 2007 },
    { author: "ekta", year: 2012 }
]

// let book = books.filter( book =>  book.year < 2010  )
console.log(books);

let book = books.filter( book => book.year < 2010  )

console.log( "Books published before 2010\n",book);


let capitalName = books.filter( book => book.year >= 2010 )
console.log(capitalName);

capitalName.forEach( obj => {
    obj.author = obj.author.toUpperCase();
});

console.log(capitalName);
