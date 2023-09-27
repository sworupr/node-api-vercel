const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// const cors = require('cors')
const mongoose = require('mongoose');

// MONGO_URI = 'mongodb+srv://sworup:c1MNXl0hxt2EEAHg@cluster0.iqctmc7.mongodb.net/?retryWrites=true&w=majority'
// mongoose.connect(MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });



// app.use(cors())
// app.use(express.static('public'))
app.use(bodyParser.urlencoded({
  extended: false
}))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//   }
// })
// let User = mongoose.model('User', userSchema);


// const exerciseSchema = new mongoose.Schema({
//   username: {
//     type: String,
//   },
//   description: {
//     type: String,
//   },
//   duration: {
//     type: Number
//   },
//   date: {
//     type: Date
//   }
// })

// let Exercise = mongoose.model('Exercise', exerciseSchema);


// const logSchema = new mongoose.Schema({
//   username: {
//     type: String,
//   },
//   count: {
//     type: Number
//   },
//   log: {
//     type: Array,
//   }
// })



// // POST method to create user and save to DB
// app.post('/api/users', (req, res) => {
//   console.log('POST add user ran')
//   let user = new User({
//     username: req.body.username
//   })
//   user
//     .save()
//     .then((doc) => {
//       console.log(doc)
//       res.json(doc).status(200)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })

// // GET all users
// app.get('/api/users', (req, res) => {
//   console.log('get all users ran')
//   User.find()
//     .then(doc => {
//       console.log(doc);
//       res.json(doc).status(200)
//     })
//     .catch(err => console.log(err))
// })



// // POST add exercise 
// app.post('/api/users/:_id/exercises', (req, res) => {
//   console.log('POST add exercises ran')
//   nowDate = new Date()
//   nowDate = nowDate.toDateString()

//   User.findById({
//       _id: req.params._id
//     })
//     .then(findUserbyIdResponse => {
//       console.log(findUserbyIdResponse)
//       console.log(findUserbyIdResponse.username)
//       let exercise = new Exercise({
//         username: findUserbyIdResponse.username,
//         description: req.body.description,
//         duration: req.body.duration,
//         date: req.body.date || nowDate
//       })
//       exercise
//         .save()
//         .then(saveExerciseResponse => {
//           console.log(saveExerciseResponse)
//           let response = {}
//           response.username = findUserbyIdResponse.username
//           response._id = findUserbyIdResponse._id
//           response.description = saveExerciseResponse.description
//           response.duration = saveExerciseResponse.duration
//           response.date = saveExerciseResponse.date.toDateString()
//           console.log(response)
//           res.json(response)
//         })
//         .catch(err => console.log(err))

//     })
//     .catch(err => console.log(err))
// })

// // GET LOGS
// app.get('/api/users/:_id/logs', (req, res) => {
//   const userId = req.params._id;
//   const fromDate = req.query.from ? new Date(req.query.from) : null;
//   const toDate = req.query.to ? new Date(req.query.to) : null;
//   const limit = req.query.limit ? parseInt(req.query.limit) : null;

//   User.findById(userId)
//     .then(userQueryResponse => {
//       const query = {
//         username: userQueryResponse.username,
//       };

//       if (fromDate && toDate) {
//         query.date = { $gte: fromDate, $lt: toDate };
//       } else if (fromDate) {
//         query.date = { $gte: fromDate };
//       } else if (toDate) {
//         query.date = { $lt: toDate };
//       }

//       const exerciseQuery = Exercise.find(query);

//       if (limit) {
//         exerciseQuery.limit(limit);
//       }

//       exerciseQuery.exec()
//         .then(logQuery => {
//           console.log(logQuery);
//           const response = { ...userQueryResponse._doc };
//           response.log = logQuery.map(e => {
//             return {
//               description: e.description,
//               date: e.date.toDateString(),
//               duration: e.duration
//             };
//           });
//           response.count = logQuery.length;
//           console.log(response);
//           return res.json(response);
//         })
//         .catch(err => console.log(err));
//     })
//     .catch(err => console.log(err));
// });
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})