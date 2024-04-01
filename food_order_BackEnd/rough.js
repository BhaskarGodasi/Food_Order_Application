// for(let i=0;i<=5;i++){
//     if(i==3){
//         return
//     }
//     console.log(i)
// }

let sum = 0;
console.log(sum, "hello1");
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
   return sum += i;
  }, 10);
  console.log(sum, "hello");
}
console.log(sum, "hello");


let x = 0;
do {
  x++;
} while (x < 5);
console.log(x);


 "hello"
const a= 5;
const b='5';

console.log(a==b);
console.log(a===b)

let x = 5;
{
  let x = 10;
  let y = 20;
}
console.log(x);
console.log(y);

// https://api.publicapis.org/entries