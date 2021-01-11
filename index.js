const express = require("express");
const mongodb = require("mongodb");
const app = express();
const router = express.Router();
const cors = require("cors");

let users = require("./users");

app.use(express.urlencoded({ extended: false })); 
app.use(express.json());
app.use(cors());

let MongoClient = mongodb.MongoClient;
let db;

/* CONEXIÓN CON LA BASE DE DATOS */
MongoClient.connect("mongodb://127.0.0.1:27017", function (err, client) {
    if(err!==null) {
        console.log(err);
    } else {
        db = client.db("coworking");
       app.locals.db = client.db("Boo");
        //db = client.db("bootFit");
        //app.locals.db = client.db("bootFit");
    }
});