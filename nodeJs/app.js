const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');

const app = express();
app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const users = [
  {
    firstName: 'Ira',
    lastName: 'Malenka',
    email: 'MalenkarI@gmail.com',
    password: 'qwerty',
    age: '20',
    city: 'lviv'
  }
];

let error = '';

app.get('/login', (req, res)=>{
  res.render('login');
});

app.get('/users', (req, res)=>{
  
  if (Object.keys(req.query).length) {
    let filterUsers = [...users];

    if (req.query.age) {
      filterUsers = filterUsers.filter(user => user.age === req.query.age);
    }
    if (req.query.city) {
      filterUsers = filterUsers.filter(user => user.city === req.query.city);
    }
    res.render('users', {users: filterUsers});
    return;
  }
  res.render('users', {users});
});

app.get('/error', (req, res)=>{
  error = 'This email already exists... please enter your email';
  res.render('error', {error});
});

app.post('/login', (req, res) => {
  let mailFilter = users.filter(user => user.email === req.body.email);
  if (mailFilter.length > 0) {
    res.redirect('/error');
    return
  }
  users.push(req.body);
  res.redirect('/users');
});

app.get('/users/:userId', (req, res) => {
  const {userId} = req.params;
  res.json(users[userId]);
});

app.use((req, res) => {
  res.render('notFound');
});

app.listen(6001, ()=>{
  console.log('Server has started on PORT 6001');
});


// 1. /login, поля які треба відрендерити в файлі hbs: firstName, lastName, email(унікальне поле), password, age, city
// просто зробити темплейт з цим усім і вводити свої дані які будуть пушитися в масив і редірект робити на сторінку з усіма юзерами /users і перевірка чи такий імейл не існує, якщо існує то редірект на еррор пейдж
// 2. /users просто сторінка з усіма юзерами, але можна по квері параметрам їх фільтрувати по age і city
// 3. /user/:id сторінка з інфою про одного юзера

// 4. зробити якщо не відпрацюють ендпоінти то на сторінку notFound редірект