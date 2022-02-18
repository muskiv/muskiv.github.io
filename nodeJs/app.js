const fs = require('fs');
const path = require('path');

// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл, в вас вийде невеликий callback hell, пізніше я вам покажу
// як можна це обійти, але поки зробіть так

const pathSomeTxt = path.join(__dirname, 'some.txt');
const pathSomeTxt2 = path.join(__dirname, 'some2.txt');

// fs.writeFile(pathSomeTxt, 'Some Data, SACBTMKJGF;DCS SFBD', (err) => {
//   if (err) {
//     console.log(err);
//     throw err;
//   }

//   fs.readFile(pathSomeTxt, 'utf8', (err, data)=>{
//     if (err) {
//     console.log(err);
//     throw err;
//     }

//     fs.writeFile(pathSomeTxt2, data, (err) => {
//       if (err) {
//         console.log(err);
//         throw err;
//       }});
//   });
// });


// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній, старий файл видаліть після того як все завершиться. Також вийде callback hell


const pathSomeTxt3 = path.join(__dirname, 'some3.txt');
const pathSomeFile = path.join(__dirname, 'file2');
const pathSomeTxt5 = path.join(__dirname, 'file2', 'some4.txt');


// fs.writeFile(pathSomeTxt3, 'Some data sfvdg hdjlskmldkfg fdvfvdfvpf', (err) => {
//   if (err) {
//     console.log(err);
//     throw err;
//   }
  
//   fs.readFile(pathSomeTxt3, 'utf8', (err, data) =>{
//     if (err) {
//       console.log(err);
//       throw err;
//     }
    
//     fs.mkdir(pathSomeFile, {recursive: true}, (err) =>{
//       if (err) {
//         console.log(err);
//         throw err;
//       }

//       fs.writeFile(pathSomeTxt5, data, (err) => {
//         if (err) {
//           console.log(err);
//           throw err;
//         }

//         fs.unlink(pathSomeTxt3, (err) => {
//           if(err) {
//             console.log(err);
//             throw err;
//           }
//         });
//       });
//     });
//   });
// });

// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли запишіть якусь дату) ) 
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new

const pathMainDir = path.join(__dirname, 'mainDir');
const pathSomeDir2 = path.join(__dirname, 'mainDir', 'someDir2');
const pathSomeDir3 = path.join(__dirname, 'mainDir', 'someDir3');
const pathSomeTxt6 = path.join(__dirname, 'mainDir', 'someTxt6.txt');
const pathSomeTxt7 = path.join(__dirname, 'mainDir', 'someTxt7.txt');


fs.mkdir(pathMainDir, {recursive: true}, (err) => {
  if (err){
    console.log(err);
    throw err;
  }

  fs.mkdir(pathSomeDir2, {recursive: true}, (err) => {
    if (err){
      console.log(err);
      throw err;
    }});
  
  fs.mkdir(pathSomeDir3, {recursive: true}, (err) => {
    if (err){
      console.log(err);
      throw err;
    }});

  fs.writeFile(pathSomeTxt6, 'TEST TEXT LOREM', (err) => {
    if (err){
      console.log(err);
      throw err;
    }});

  fs.writeFile(pathSomeTxt7, 'kljmn hbgvfcdxs cdfvgbh njmki', (err) => {
    if (err){
      console.log(err);
      throw err;
    }});
});
