// let arr=[10,20,33,55,60]
// let sum=0;
//     arr.forEach((val)=>{
//     sum=sum+val
// })
// console.log(sum);

let arr=[1,2,3,4,5]

    let triarray=arr.map((val)=>val*3)
    console.log(triarray);

    let oddarray=triarray.filter((val)=>val%2!=0)
    console.log(oddarray);
    
    let mularray=oddarray.reduce((current,next)=>current*next)
    console.log(mularray); 