# API_ShowCase

A CRUD APP with only NodeJS and ExpressJS. 

Please note this is not a production app.

Some seed data has been provided.

## Instructions

Install necessary dependencies with $ npm install

Make sure you create a new DB on MongoLab (mLab) or if you are familiar you can just use mongoDB with mongo shell.

## Under config folder 

Add your password and username to config.json

Add your URL link from mLab to index.js

## Use postman to display data

<a href='https://www.getpostman.com/'>Install postman</a> to perform CRUD

###For all existing data 

$ http://localhost:3000/api/todos/test

###To Create database select type as Application/Json 

$ http://localhost:3000/api/todo

###To Update database select type as Application/Json 

Use existing _id from database to update

$ http://localhost:3000/api/todo

### To delete data

Use existing _id ONLY from database to delete

$ http://localhost:3000/api/todo
