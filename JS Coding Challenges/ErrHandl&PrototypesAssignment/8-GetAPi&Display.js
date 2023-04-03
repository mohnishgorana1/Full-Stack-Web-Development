fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (response) => {
        return response.json();
    })
    .then( (value) => {
        console.log(value);
    })