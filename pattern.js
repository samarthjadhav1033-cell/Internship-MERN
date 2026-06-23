// var ptr =""
// for ( i = 1; i<=4;i++){
//     for(j=3;j>=i;j--){
//         ptr +=" ";

//     }
//     for(k=1;k<=i;k++){
//         ptr +="*"; 
//     }
//     ptr += "\n";
    
// }console.log(ptr);
//    *
//   ** 
//  ***
// ****



// var ptr = ""
// for (i = 4; i >= 1; i--) {
//     for (j = 1; j <=4-i; j++) {
//         ptr += " ";
//     }
//     for (k = i; k >= 1; k--) {
//         ptr += "*";
//     }
//     ptr += "\n";
// }
// console.log(ptr);
// ****
//  ***
//   **
//    *

// var ptr = ""
// for (i = 4; i >= 1; i--) {
//     for (j = 1; j <=4-i; j++) {
//         ptr += " ";
//     }
//     for (k = i; k >= 1; k--) {
//         ptr += " *";
//     }
//     ptr += "\n";
// }
// console.log(ptr);
//  * * * *
//   * * *
//    * *
//     *

// var ptr = ""
// for (i = 1; i <= 5; i++) {
// for (j = 1; j <=6-i; j++) {     
//     ptr += " ";
//     }
//     for (k = 1; k <= i; k++) {
//        ptr += " *";
//     }
//     ptr += "\n";
// }
// for (i = 6; i >= 1; i--) {
//     for (j = 1; j <=6-i; j++) {
//         ptr += " ";
//     }
//     for (k = i; k >= 1; k--) {
//         ptr += " *";
//     }
//     ptr += "\n";
// } 
// console.log(ptr);
//       *
//      * *
//     * * *
//    * * * *
//   * * * * *
//  * * * * * *
//   * * * * *
//    * * * *
//     * * *
//      * *
//       *


// var ptr = ""
// for (i = 1; i <= 5; i++) {
// for (j = 1; j <=6-i; j++) {
//     ptr += " "; 
//     }
//     for (k = 1; k <= i; k++) {
//         if(i==1||i==5||k==1||k==i){
//             ptr += " *";
//         } else{
//             ptr += "  ";
//         }
//     }
//     ptr += "\n";
// }
// console.log(ptr);

//       *
//      * *
//     *   *
//    *     *
//   * * * * *



var ptr = ""
for (i = 1; i <= 5; i++) {
for (j = 1; j <=6-i; j++) {
    ptr += " "; 
    }
    for (k = 1; k <= i; k++) {
        if(i==1||i==5||k==1||k==i){
            ptr += " *";
        } else{
            ptr += "  ";
        }
    }
    ptr += "\n";
}
console.log(ptr);

for (i = 6; i >= 1; i--) {
    for (j = 1; j <=6-i; j++) {
    
        if(i==6||i==1||k==1||k==i){
        ptr += "*";
    }else{
        ptr+=" ";
    }
    }
    for (k = i; k >= 1; k--) {
        ptr += " *";
    }
    ptr += "\n";
} 
console.log(ptr);