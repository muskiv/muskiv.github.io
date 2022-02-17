const fs = require('fs');
const path = require('path');

// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл, в вас вийде невеликий callback hell, пізніше я вам покажу
// як можна це обійти, але поки зробіть так

const pathSomeTxt = path.join(__dirname, 'some.txt');
const pathSomeTxt2 = path.join(__dirname, 'some2.txt');

fs.writeFile(pathSomeTxt, 'Some Data, SACBTMKJGF;DCS SFBD', (err) => {
  if (err) {
    console.log(err);
    throw err;
  }

  fs.readFile(pathSomeTxt, 'utf8', (err, data)=>{
    if (err) {
    console.log(err);
    throw err;
    }

    fs.writeFile(pathSomeTxt2, data, (err) => {
      if (err) {
        console.log(err);
        throw err;
      }});
  });
});
