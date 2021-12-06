## exam
-  npm run dev: command not found <br/>
install nodemon - npm i nodemon

- Error: Cannot find module '../db' <br/>
require("./db") instad of require("../db");

- Error: Cannot find module 'mongoose' <br/>
install mongoose - npm i mongoose

- Error: Cannot find module './../../db/models/todos' <br/>
require("./../../db/models/todos") instad of require("./../../db/models/todo")

- Error: Cannot find module 'mongose' <br/>
const mongoose = require("mongoose") instad of const mongoose = require("mongose");

- TypeError: mongoose.module is not a function <br/>
mongoose.model("Todo", todoSchema) instad of mongoose.module("Todo", todoSchema);

- Error: Route.get() requires a callback function but got a [object Undefined] <br/>
module.exports instad of module.export
 
- Error: Route.put() requires a callback function but got a [object Undefined] <br/>
export updateTodo

- ReferenceError: morgan is not defined <br/>
import morgan - write const morgan = require('morgan') in index file

- Error: listen EADDRINUSE: address already in use 4000 <br/>
change the port in .env PORT=4000 without ; 

- ReferenceError: DB_URL is not defined <br/>
import dotenv -- const dotenv = require("dotenv"); dotenv.config();
 
- create todo  <br/>
1) TypeError: Cannot read properties of undefined (reading 'todo') <br/>
app.use(express.json()) before app.use(todoRouter); <br/>
2) Cast to Boolean failed for value \"dance\" (type string) at path \"task\"" <br/>
 task: { type: Boolean, required: true } -- Boolean > String <br/>
3) const newTodo = new todoModel({task : todo,});

- updateTodo > its params so we need to change the endpoint <br/>
  todoRouter.put("/todo/:id", updateTodo);
