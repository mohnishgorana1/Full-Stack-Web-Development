// fetch("http://type.fit/api/quotes") // fetch always give you promises 
//   .then(function f(response) {
//     return response.json();
//   })
//   .then(function f(value) {
//     console.log(value);
//   });

fetch('https://api.chucknorris.io/jokes/random')
 .then(response => {
    return response.json();
 })
 .then((data) => {
    // console.log("data is : ",data);
    var joke = data.value
    console.log("JOKE is : ",joke);
 })
 .catch()
 .finally()