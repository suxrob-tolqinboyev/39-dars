// 1-masala

// for 1
// let k = +prompt("K raqamini kiriting");
// let n = +prompt("N raqamini kiriting");

// for (let i = 1; i <= n; i++) {
//   console.log("SALOM" + k);
// }

// // k va n sonlarini aniqlaymiz
// let k = 5; // Masalan, k = 5
// let n = 3; // Masalan, n = 3 (n > 0 bo'lishi kerak)

// // n marta k ni chiqarish
// for (let i = 0; i < n; i++) {
//   alert(k);
// }

// for2
// let a = +prompt("A sonini kiriting");
// let b = +prompt("B sonini kiriting");
// let J = 0;
// for (let i = a; i >= b; i--) {
//   console.log(i);
//   J++
// }
// console.log("jami sonlar: " + J);
// console.log("a va b sonlari ham chiqsin.");

// for3
// let a = +prompt ("A sonini kiriting");
// let b = +prompt ("B sonini kiriting");
// let J = 0;
// for( let i = a - 1 ; i>=b + 1 ; i--) {
//     console.log(i);
// J++
// }
// console.log("jami sonlar: " + J);
// console.log("a va b sonlari ham chiqsin.");

// for4
// let a = +prompt ("1 kg konfet narxi");
// for( let i = 1 ; i<=10 ; i++) {
//     console.log(i * a);
// }

// for5
// let price = parseFloat(prompt("1 kg konfet narxini kiriting: "));

// for (let i = 1; i <= 10; i++) {
//   let w = i / 10;
//   let cost = w * price;
//   console.log(w + " kg konfet narxi: " + cost);
// }

// for6
// let price = parseFloat(prompt("1 kg konfet narxini kiriting: "));

// for (let i = 12; i <= 20; i += 2) {
//   let w = i / 10;
//   let cost = w * price;
//   console.log(w + " kg konfet narxi: ", +cost, "so'm bo'ladi");
// }

// for7
// let a = +prompt ("A sonini kiriting");
// let b = +prompt ("B sonini kiriting");
// for( let i = a ; i<=b ; i++) {
//     console.log(i + a);
// }

// a va b sonlarini belgilaymiz
// let a = +prompt("Ixtiyoriy son kiriting")
// let b = +prompt("Ixtiyoriy son kiriting")

// let sum = 0;

// for (let i = a; i <= b; i++) {
//   sum += i;
// }

// console.log("kiritilgan sonlar yig'indisi: " + sum);

// for8
// let a = +prompt ("A sonini kiriting");
// let b = +prompt ("B sonini kiriting");
// for( let i = a ; i<=b ; i++) {
//     console.log(i * a);
// }

// for9
// let a = +prompt ("A sonini kiriting");
// let b = +prompt ("B sonini kiriting");
// let sum = 0;
// for (let i = a; i <= b; i++) {
//   sum += i * i;
// }
// console.log("Kvadratlar yig‘indisi: " + sum);

// for10
// let n = +prompt("N raqamini kiriting");
// let S = 0;
// for(i = 1; i <= n; i++) {
//     S += 1/i;
// }
// console.log("yig'indi S = " + S);

// for11
// let n = +prompt("N sonini kiriting");

//   let S = 0;

//   for (let i = n; i <= 2 * n; i++) {
//     S += i ** 2;
//   }

//   console.log("Yig‘indi S: " + S);

// for12
// let n = +prompt("n sonini kiriting (n > 0):");
// let S = 1;

// for (let i = 1; i <= n; i++) {
//   S *= 1 + i / 10;
// }
// console.log("NATIJASI:" + S);


// 2-masala

// while1;
// let a = +prompt("A sonini kiriting");
// let b = +prompt("B sonini kiriting");

// while (a >= b) {
//   a = a - b;
// }
// console.log("Ortib qolgan joy: ", a);

// while2
// let a = +prompt ("A sonini kiriting");
// let b = +prompt ("B sonini kiriting");

// let C = 0;

// while(a>=b){
//     a = a - b;
//     C++;
// }
// alert(" joylashgan qismi : "+C );

// while 3
// let n = +prompt("A raqamini kiriting");
// let k = +prompt("B raqamini kiriting");

// let sum = 0;

// while (n >= k) {
//   n -= k;
//   sum++;
// }

// console.log('qolgan toy =', n);
// console.log('butun qismi =', sum);

// while4
// let n = +prompt("N sonini kiriting (n > 0) bo'lsin");
// let S = 1;
// let degree = false;

// while (S <= n) {
//   if (S === n) {
//     degree = true;
//     break;
//   }
//   S *= 3;
// }
// if (degree) {
//   console.log("3-ning darajasi");
// } else {
//   console.log("3-ning darajasi emas");
// }

// wihle5
// while5
// let n = prompt("Iltimos, n sonini kiriting (n > 0):");
// n = parseInt(n);

// let k = 0;
// while (n > 1) {
//   n = n / 2;
//   k++;
// }

// console.log("K ning qiymati: " + k);

// while17
// let n = +prompt("N sonini kiriting");
// let m = +prompt("M sonini kiriting");
// let B = 0;

// while (n > m) {

//     n-=m;
//     B++
// }
// console.log("butun qismi: " + B);
// console.log("qoldiq qismi: " + n);

// while17
// let n = +prompt("N sonini kiriting: ");
// let m = +prompt("M sonini kiriting: ");
// let B = 0;
// let Q = n;

// while (Q >= m) {
//   Q = Q - m;
//   B = B + 1;
// }
// console.log("Bo'linma: " + B);
// console.log("Qoldiq: " + Q);

// while18
// let n = +prompt("N sonini kiriting: ");
// let q = 0;

// while (n > 0) {
//   q = q * 10 + (n % 10);
//   n = Math.floor(n / 10);
// }
// console.log("Sonning teskari raqamlari: " + q);

// while19
// let n = +prompt("N sonini kiriting (n > 0): ");
// let Y = 0;
// let X= 0;
// let r = 0;

// while (n > 0) {
//   r = n % 10;
//   Y += r;
//   X += 1;
//   n = Math.floor(n / 10);
// }
// console.log("Raqam yegindisi: " + Y);
// console.log("Raqam soni: " + X);




// TYPE SCRIPT
// numeric string used with + gives string type
// let result;

// result = '3' + 2;
// console.log(result); // "32"

// result = '3' + true;
// console.log(result); // "3true"

// result = '3' + undefined;
// console.log(result); // "3undefined"

// result = '3' + null;
// console.log(result); // "3null"

// // numeric string used with -, /, * results in number type
// result = '4' - '2';
// console.log(result); // 2

// result = '4' - 2;
// console.log(result); // 2

// result = '4' * 2;
// console.log(result); // 8

// result = '4' / 2;
// console.log(result); // 2

// // non-numeric string used with -, /, * results to NaN
// result = 'hello' - 'world';
// console.log(result); // NaN

// result = '4' - 'hello';
// console.log(result); // NaN

// // if boolean is used, true is 1, false is 0
// result = '4' - true;
// console.log(result); // 3

// result = 4 + true;
// console.log(result); // 5

// result = 4 + false;
// console.log(result); // 4

// // null is 0 when used with a number
// let result;

// result = 4 + null;
// console.log(result);  // 4

// result = 4 - null;
// console.log(result);  // 4

// // Arithmetic operation of undefined with number, boolean or null gives NaN
// result = 4 + undefined;
// console.log(result);  // NaN

// result = 4 - undefined;
// console.log(result);  // NaN

// result = true + undefined;
// console.log(result);  // NaN

// result = null + undefined;
// console.log(result);  // NaN

// // Converting strings and booleans to numbers
// result = Number('324');
// console.log(result);  // 324

// result = Number('324e-1');
// console.log(result);  // 32.4

// result = Number(true);
// console.log(result);  // 1

// result = Number(false);
// console.log(result);  // 0

// result = Number(null);
// console.log(result);  // 0

// result = Number(' ');
// console.log(result);  // 0

// result = Number('hello');
// console.log(result);  // NaN

// result = Number(undefined);
// console.log(result);  // NaN

// result = Number(NaN);
// console.log(result);  // NaN

// // Converting a string to a number using different methods
// result = parseInt('20.01');
// console.log(result);  // 20

// result = parseFloat('20.01');
// console.log(result);  // 20.01

// result = +'20.01';
// console.log(result);  // 20.01

// result = Math.floor('20.01');
// console.log(result);  // 20

// // Converting various data types to string
// result = String(324);
// console.log(result);  // "324"

// result = String(2 + 4);
// console.log(result);  // "6"

// result = String(null);
// console.log(result);  // "null"

// result = String(undefined);
// console.log(result);  // "undefined"

// result = String(NaN);
// console.log(result);  // "NaN"

// result = String(true);
// console.log(result);  // "true"

// result = String(false);
// console.log(result);  // "false"

// result = (324).toString();
// console.log(result);  // "324"

// result = true.toString();
// console.log(result);  // "true"

// // Converting empty string, zero, and other falsy values to boolean
// result = Boolean('');
// console.log(result);  // false

// result = Boolean(0);
// console.log(result);  // false

// result = Boolean(undefined);
// console.log(result);  // false

// result = Boolean(null);
// console.log(result);  // false

// result = Boolean(NaN);
// console.log(result);  // false