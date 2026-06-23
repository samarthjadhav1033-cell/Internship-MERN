// let arr=[10,20,33,55,60]
//     arr.forEach((val)=>{
//     if(val%2==0){
//         console.log(val);
//     }
// })

let arr=[1,2,3,4,5]

let result= arr.map((val)=>val*3).filter((val)=>val%2!=0).reduce((c,n)=>(c*n))
    console.log(result);

    









