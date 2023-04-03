// fetch('https://jsonplaceholder.typicode.com/posts/12345679')
//     .then( (response) => {
//         return response.json();
//     })
//     .catch(()=>{
//         console.log("Handled");
//     })

try{
    const response = fetch('https://jsonplaceholder.typicode.com/posts/12345679');
} catch(error){
    console.log("Error",error);
}