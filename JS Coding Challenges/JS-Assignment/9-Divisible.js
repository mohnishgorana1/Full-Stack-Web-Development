
let arr = [15,18,17,13,12,25,21,24];

for(i in arr)
{
    if( (arr[i] % 3 == 0) && (arr[i] % 2 != 0) ) 
    {
        console.log(arr[i]);
    }
}