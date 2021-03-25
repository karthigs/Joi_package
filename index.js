const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

//dbConnection
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('./controller/userController')
const {Validator} = require('./validate')
async function connectDB() {
    await mongoose.connect('mongodb://127.0.0.1:27017/tasks', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
}
connectDB();


//Router
var router = express.Router();
router.get('/api/users', getUsers);
router.get('/api/user/:id', getUser);
router.post('/api/user', Validator,createUser);
router.put('/api/user/:id', updateUser);
router.delete('/api/user/:id', deleteUser);
app.use('/', router);

app.listen(3000, () => {

});