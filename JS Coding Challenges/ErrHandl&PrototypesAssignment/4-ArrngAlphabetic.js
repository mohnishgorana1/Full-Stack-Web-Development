//                                       Arrange in alphabetical order.

// Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
// function. The program should use the map function to create a new list containing only the titles of the books,
// and then pass this new list to the callback function. The callback function should then log the titles to the
// console in alphabetical order.

let books = [
    { title : "Money Matters !", author: "Mohnish Gorana", year: 2025 },
    { title : "kbknm !", author: "Xyz", year: 2030 },
    { title : "Ancient", author: "ABc", year: 2021 },
]

for(var i in books){
    console.log(books[i].author);
}

let booksTitles = books.map( operation )

function operation(books){
    return books.author
}
console.log(booksTitles.sort());