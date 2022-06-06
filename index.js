"use strict";
require ("dotenv").config();
let PORT = process.env.PORT || 3000;
const server = require("./src/server")
const {db} = require("./src/server");
db.sync()
.then(()=>{
    server.start(PORT);
})
.catch(console.error);
