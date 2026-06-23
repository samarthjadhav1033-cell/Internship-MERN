// // WAP to print initial lettter of name (S)
// for (let i = 1; i <= 7; i++) {
//     for (let j = 1; j <= 7; j++) {

//         if (
//             (i == 1 || i == 4 || i == 7) ||   // Horizontal lines
//             (i < 4 && j == 1) ||              // Upper left vertical line
//             (i > 4 && j == 7)                 // Lower right vertical line
//         ) {
//             process.stdout.write("*");
//         } else {
//             process.stdout.write(" ");
//         }
//     }
//     console.log();
// }

var ptr=""
for(let i=1;i<=4;i++){
    for(j=1;j<=4;j++){
        ptr+="*"
        
    }
    ptr+="\n"

}console.log(ptr);


