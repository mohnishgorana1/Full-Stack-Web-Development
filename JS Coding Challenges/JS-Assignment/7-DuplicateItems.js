let Items = ["Mango", "Banana", "Milk", "Milk", "Banana", "Grapes", "Pencil", "Pencil"]
//  i     =     0       1       2       3           4       5           6           7
console.log(Items);

let temp = new Array
console.log(temp)

Items

// temp = [  ]


for(let i = 0; i < Items.length-1; i++)
{   
    for(let j = 0; j <= temp.length; j++){

        if(temp.length == 0){
            temp[j] = Items[i]
        }

        // if(temp[j] == Items[j] ){
        //     temp[i] = Items[j]
        // }
    }
}
console.log(temp)