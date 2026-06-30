let arr = [10, [20, 30], [50, 60], [70, 80]];

let [a, [b, c], [d, e], [f, g]] = arr;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);

let  obj1={
    key1:"val1",
    key2:{
        key3:"val3",
        key4:"val4"
    }
}

let {key1,key2:{key3,key4}}=obj1;

console.log(key1);
console.log(key3);
console.log(key4);









