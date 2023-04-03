marks = [ 42,2007,300,2888,2500 ];
console.log(marks);


let max =  marks[0] ; // let max = 25;
let currMax = marks[0];

for( let i = 0; i<marks.length-1; i++)
{
    currMax = ( marks[i] > marks[i+1] ) ? marks[i] : marks[i+1] 

    if(max <= currMax){
        max = currMax
    }
    else{
        max = max ;
    }

}
console.log(max);