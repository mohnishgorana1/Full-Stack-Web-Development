// Async Await se function ke exucution ko rok skte h
async function Weather(){
    let delhiWeather  = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve("27 Deg")
        }, 1000)
    })
    
    let MumbaiWeather  = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve("22 Deg")
        }, 4000)
    })

    // delhiWeather.then(alert)
    // MumbaiWeather.then(alert)
    // await keyword jese hi aega vo bolega ruko pehle iss promise ko resolve hone do 

    console.log("Ab Rukega Pls Wait! Fetching Delhi Weather");
        let delhiW = await delhiWeather
    console.log("Delhi weather Fetched", delhiW);

    console.log("Ab Rukega Pls Wait! Fetching Mumbai Weather");
        let MumbaiW = await MumbaiWeather
    console.log("Mumbai weather Fetched", MumbaiW);

    return [delhiW, MumbaiW]
}
const cherry = () => {
    console.log("Hey I m Cherry and I m Not Waiting ");
}

let myWeather = Weather();  // myweather ke andar promise jaega
let b = cherry()
myWeather.then( (value) => {
    console.log(value);
})