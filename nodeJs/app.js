const fs = require('fs');
const path = require('path');

//=================================================================
// fs.mkdir(path.join(__dirname, 'main', 'online'), err =>{
//   if(err){
//     console.log(err);
//   }
// });

// fs.mkdir(path.join(__dirname, 'main', 'inPerson'), err =>{
//   if(err){
//     console.log(err);
//   }
// });


//=================================================================
// fs.writeFile(path.join(__dirname, 'main', 'online', 'online.txt'), 'Some data2', (err) =>{
//   if(err){
//     console.log(err);
//   }
// });

// fs.truncate(path.join(__dirname, 'main', 'online', 'online.txt'), (err) =>{
//   if(err){
//     console.log(err);
//   }
// });

// fs.writeFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), 'Some data2', (err) =>{
//   if(err){
//     console.log(err);
//   }
// });

// fs.truncate(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), (err) =>{
//   if(err){
//     console.log(err);
//   }
// });


//=================================================================

const onlineArr = [
  {name: "Slava",
  age: 21,
  city: "Kiev"},
  {name: "Tania",
  age: 23,
  city: "Kiev"}
]

// onlineArr.map(user => {
//   fs.appendFile(path.join(__dirname, 'main', 'online', 'online.txt'),
//   `\nNAME: ${user.name}; \nAGE: ${user.age}; \nCITY: ${user.city};`,
//   (err) => {
//     if (err){
//       console.log(err);
//     }
//   })
// })

const inPersonArr = [
    {name: "Andrii",
    age: 22,
    city: "Lviv"},
    {name: "Volodymyr",
    age: 26,
    city: "Lviv"}
]


// inPersonArr.map(user => {
//   fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'),
//       `\nNAME: ${user.name}; \nAGE: ${user.age}; \nCITY: ${user.city};`,
//       (err) => {
//           if (err) {
//               console.log(err)
//           }
//       })
// })

//==================================================================

const replaceUsers = (way, file, arr) => {
  fs.truncate(path.join(__dirname, 'main', way, file),
      (err) => {
          if (err) {
              console.log(err);
          }
      })

  arr.map(user => {
      fs.appendFile(path.join(__dirname, 'main', way, file),
          `\nNAME: ${user.name}; \nAGE: ${user.age}; \nCITY: ${user.city}`,
          (err) => {
              if (err) {
                  console.log(err)
              }
          })
  })
}


replaceUsers('online', 'online.txt', inPersonArr)
replaceUsers('inPerson', 'inPerson.txt', onlineArr)