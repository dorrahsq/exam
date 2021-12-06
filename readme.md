## exam
-  npm run dev: command not found
install nodemon - npm i nodemon

- Error: Cannot find module '../db'
require("./db") instad of require("../db");

- Error: Cannot find module 'mongoose'
install mongoose - npm i mongoose

- Error: Cannot find module './../../db/models/todos'
require("./../../db/models/todos") instad of require("./../../db/models/todo")

- Error: Cannot find module 'mongose'
const mongoose = require("mongoose") instad of const mongoose = require("mongose");

- TypeError: mongoose.module is not a function
mongoose.model("Todo", todoSchema) instad of mongoose.module("Todo", todoSchema);

- Error: Route.get() requires a callback function but got a [object Undefined]
module.exports instad of module.export
 
- Error: Route.put() requires a callback function but got a [object Undefined]
export updateTodo

- ReferenceError: morgan is not defined
import morgan - write const morgan = require('morgan') in index file

- Error: listen EADDRINUSE: address already in use 4000
change the port in .env PORT=4000 without ; 

- ReferenceError: DB_URL is not defined
import dotenv -- const dotenv = require("dotenv"); dotenv.config();
 
- create todo 
> TypeError: Cannot read properties of undefined (reading 'todo')
app.use(express.json()) before app.use(todoRouter);
> Cast to Boolean failed for value \"dance\" (type string) at path \"task\""
 task: { type: Boolean, required: true } -- Boolean > String
> const newTodo = new todoModel({
    task : todo,
  });

- updateTodo > its params so we need to change the endpoint
  todoRouter.put("/todo/:id", updateTodo);
