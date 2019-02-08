var express = require("express");
var bodyParser = require('body-parser');
//const { User } = require('./sequelize');
var cors = require('cors')
const app = express();

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var Users = require('./routes/Users')

app.use('/Users', Users)

app.listen(3000, function () {
  console.log('API LISTENNING ON PORT 3000')
})
// // create a user
// app.post('/api/users', (req, res) => {
//   User.findOrCreate({ where: { name: 'hfae' }, defaults: { password: '1234' } })
//     .spread((user, created) => {
//       console.log(user.get({
//         plain: true
//       }))
//       console.log(created)
//     })
//   // User.create(req.body)
//   //   .then(user => res.json(user))
// })
// // get all users
// app.get('/api/users', (req, res) => {
//   User.findAll().then(users => res.json(users))
//  })